import {
	$,
	config,
	CreateHTMLElement,
	customElementsDefine,
	JSONStringFormat,
	loadingIcon,
} from '../../utils';
import './../input';

/**
 * 复选框组件
 */
@customElementsDefine
class SelectComponent extends CreateHTMLElement {
	/**
	 * 监听属性
	 * @returns {string[]}      需要被监听的属性名
	 */
	static get observedAttributes() {
		return ['options-add', 'options', 'value', 'disabled'];
	}

	/**
	 * 获取是否可见
	 * @return {boolean}    ture || false
	 */
	get visible() {
		return $(this).attr('visible') === 'true';
	}

	/**
	 * 设置是否可见的
	 * @param bool          true || false
	 */
	set visible(bool) {
		let visible = bool === 'true' || bool === true;

		$(this).attr('visible', visible);

		$(this.shadowRoot).find(`${config.prefix}-popover`).attr('visible', visible);
	}

	/**
	 * 获取禁用状态
	 * @return {boolean}    是否禁用
	 */
	get value() {
		let value = $(this).attr('value')
		return value ? JSONStringFormat(value) : '';
	}

	/**
	 *
	 * 获取禁用状态
	 * @param value          是否禁用
	 */
	set value(value) {
		$(this).attr('value', value);

		let inputElement = $(this.shadowRoot)
			.find(`${config.prefix}-input`)
			.attr('show-clear', value !== '');

		if (value === '') {
			$(inputElement).attr('placeholder', $(this).attr('placeholder') || '请选择');
		}
	}

	/**
	 * 获取禁用状态
	 * @return {boolean}    是否禁用
	 */
	get disabled() {
		return $(this).attr('disabled') === 'true';
	}

	/**
	 * 获取禁用状态
	 * @param bool          是否禁用
	 */
	set disabled(bool) {
		$(this).attr('disabled', bool === true || bool === 'true');
	}

	/**
	 * 当自定义元素的指定属性被增加、移除或更改时被调用
	 * @param name          属性名
	 * @param oldValue      更改前的属性值
	 * @param newValue      新的属性值
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) return;

		switch (name) {
			case 'options':
			case 'options-add':
				this.createSelectOption(name === 'options-add');
				break;
			case 'value':

				break;
			default:
				this[name] = newValue;
		}
	}

	/**
	 * 当自定义元素第一次被连接到文档DOM时被调用
	 */
	connectedCallback() {
		this.createSelectOption();

		this.onSelect();
		this.onInput();
		this.onScroll();

		$(this.shadowRoot)
			.find(`${config.prefix}-popover`)
			.on('visible', ev => this.visible = ev.detail.visible);
	}

	/**
	 * 当滚动时
	 */
	onScroll() {
		if ($(this).attr('scroll') !== 'true') return;
		let timer = 0;

		$(this.shadowRoot)
			.find('.select-wrapper')
			.on('scroll', ev => {
				let el = ev.currentTarget;

				clearTimeout(timer);
				timer = setTimeout(() => {
					let maxHeight = $(el).find('.select-lists').offset().height - el.offsetHeight;

					if (el.scrollTop + 50 >= maxHeight && !$(this.shadowRoot).find('.select-placeholder.loading.show').length) {
						$(this.shadowRoot).find('.select-placeholder.loading').addClass('show');
					}
				}, 100)
			});
	}

	/**
	 * 当选择时
	 */
	onSelect() {
		$(this.shadowRoot)
			.find('.select-lists')
			.on('click', ev => {
				let el = ev.target;

				if (!$(el).hasClass('select-option') ||$(el).hasClass('disabled') === 'true') {
					return;
				}

				// 多选
				if ($(this).attr('multiple') === 'true') {
					$(el).toggleClass('active');
				} else {
					$(this.shadowRoot)
						.find('.select-option.active')
						.removeClass('active');

					$(el).addClass('active');

					this.visible = false;
				}

				$(this.shadowRoot)
					.find('.select-option')
					.addClass('show');

				$(this.shadowRoot)
					.find(`${config.prefix}-input`)
					.attr('value', '');

				let label = [];
				this.value = $(this.shadowRoot)
					.find('.select-option.active')
					.each(el => {
						label.push($(el).text());
						return $(el).attr('data-value');
					});

				$(this.shadowRoot)
					.find(`${config.prefix}-input`)
					.attr('placeholder', label.join('/'));

				$(this).attr('label', label.join('/'));
			});
	}

	/**
	 * 当输入时
	 */
	onInput() {
		let timer = 0;
		let inputEventCallback = ev => {
			let { value } = ev.detail;

			clearTimeout(timer);
			timer = setTimeout(() => {
				if (value === '') {
					$(this.shadowRoot)
						.find('.select-option')
						.addClass('show');

					return this.noDataPlaceholderHandler();
				}

				$(this.shadowRoot)
					.find('.select-option')
					.each(item => {
						!$(item).text().toLowerCase().includes(value.toLowerCase())
							? $(item).removeClass('show')
							: $(item).addClass('show');
					});

				this.noDataPlaceholderHandler();
			}, 100);
		};

		$(this.shadowRoot)
			.find(`${config.prefix}-input`)
			.on('focus', () => this.visible = true)
			.on('input', inputEventCallback)
			.on('change', inputEventCallback)
			.on('clear', ev => {
				if (!ev.detail.value) {
					this.value = '';

					$(this.shadowRoot)
						.find('.select-option')
						.addClass('show')
						.removeClass('active');
				}
			});
	}

	/**
	 * 无数据占位元素显示隐藏处理
	 */
	noDataPlaceholderHandler() {
		let nodeDataPlaceholderElement = $(this.shadowRoot).find(`.select-placeholder.no-data`);

		$(this.shadowRoot).find('.select-option.show').length
			? $(nodeDataPlaceholderElement).removeClass('show')
			: $(nodeDataPlaceholderElement).addClass('show');
	}

	/**
	 * 自定义事件返回数据
	 */
	CustomEventResultParams(params = {}) {
		return {
			value: $(this).attr('multiple') === 'true' ? this.value : this.value[0],
			type: this.type,
			disabled: this.disabled,
			name: $(this).attr('name') || '',
		};
	}

	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
            	:host([value]) ${config.prefix}-input {
					--color-gray-light: var(--color-black)
				}
				
            	.select-wrapper {
            		max-height: 280px;
            		overflow-y: auto;
            	}
            	
            	.select-option-title {
            		padding: var(--margin-padding-sm);
            		color: var(--color-gray-light);
            	}
            	
            	.select-option {
            		height: var(--select-option-height);
            		padding: 0 var(--margin-padding-md);
            		color: var(--color-gray);
            		line-height: var(--select-option-height);
            		overflow: hidden;
            		text-overflow: ellipsis;
            		white-space: nowrap;
            		transition: .3s;
            		cursor: pointer;
            		display: none;
            	}
            	
            	.select-option:hover {
            		background: #f9f9f9;
            	}
            	
            	.select-option.active {
            		background: #f9f9f9;
            		color: var(--color-theme);
            	}
            	
            	.select-placeholder {
            		display: none;
            		align-items: center;
            		justify-content: center;
            		overflow: hidden;
            		height: var(--select-option-height);
            		color: var(--color-gray-light);
            	}
            	
            	:host([visible=true]) ${config.prefix}-input span  {
            		transition: .3s transform;
            	}
            	
            	${config.prefix}-input span svg {
            		width: var(--font-size-xs);
            		height: var(--font-size-xs);
            		fill: var(--color-border)
            	}
            	
            	:host([visible=true]) ${config.prefix}-input span  {
            		transform: rotate(180deg);
            	}
            	
            	.show {
            		display: flex !important;
            	}
            	
				${loadingIcon.style}
			</style>
			
			<${config.prefix}-popover trigger="none">
                <div class="select-wrapper" slot="content">
                	<div class="select-lists"></div>

					<div class="select-placeholder no-data">暂无数据</div>
					<div class="select-placeholder loading show">
	                	${loadingIcon.html}
					</div>
				</div>
				
				<${config.prefix}-input
					clear="true" 
					slot="placeholder" 
					placeholder="${$(this).attr('placeholder')}"
				>
					<span slot="suffix">
						<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
							<path d="M890.336 330.912c-12.576-12.416-32.8-12.352-45.248 0.192L517.248 661.952 184.832 332.512c-12.576-12.448-32.8-12.352-45.28 0.192-12.448 12.576-12.352 32.832 0.192 45.28l353.312 350.112c0.544 0.544 1.248 0.672 1.792 1.184 0.128 0.128 0.16 0.288 0.288 0.416 6.24 6.176 14.4 9.28 22.528 9.28 8.224 0 16.48-3.168 22.72-9.472l350.112-353.312C902.976 363.616 902.88 343.36 890.336 330.912z"></path>
						</svg>
					</span>
				</${config.prefix}-input>
			</${config.prefix}-popover>
        `;
	}

	/**
	 * 创建选择项
	 * @param isAdd			是否追加
	 */
	createSelectOption(isAdd) {
		let optionHtmlString = '',
			options = JSONStringFormat($(this).attr(`options${isAdd ? '-add' : ''}`)),
			// 字段名
			fieldName = {
				label: 'label',
				value: 'value',
				title: 'title',
				children: 'children',
				...(JSONStringFormat($(this).attr('field-name')) || {}),
			},
			// 创建选择框配置项
			createOptionString = item => `
				<div class="select-option show" data-value="${item[fieldName.value]}" title="${item[fieldName.label]}">
					${item[fieldName.label]}
				</div>
			`,
			// 占位元素处理
			placeholderElementHandler = () => {
				let selectListsElement = $(this.shadowRoot)
					.find('.select-lists')
				isAdd
					? $(selectListsElement).append(optionHtmlString)
					: $(selectListsElement).html(optionHtmlString);

				$(this.shadowRoot)
					.find('.select-placeholder.loading')
					.removeClass('show');

				this.noDataPlaceholderHandler();
			};

		if (!options) {
			return placeholderElementHandler();
		}

		optionHtmlString = options
			.map(item => {
				let result = ``;

				if (item[fieldName.title]) {
					result = `
						<div class="select-option-title">
							${item[fieldName.title]}
						</div>
					`;
				}

				result += item[fieldName.children]
					? item[fieldName.children]
						.map(child => createOptionString(child))
						.join('')
					: createOptionString(item);

				return result;
			})
			.join('');

		placeholderElementHandler();
	}
}
