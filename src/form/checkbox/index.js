import {
	$,
	pxToVw,
	CreateHTMLElement,
	config,
	customElementsDefine,
} from '../../utils';

/**
 * 复选框组件
 */
@customElementsDefine
class CheckboxComponent extends CreateHTMLElement {
	/**
	 * 监听属性
	 * @returns {string[]}      需要被监听的属性名
	 */
	static get observedAttributes() {
		return ['checked', 'size'];
	}

	/**
	 * 获取选中状态
	 * @return {boolean}    是否选中
	 */
	get checked() {
		return $(this).attr('checked') === 'true';
	}

	/**
	 *
	 * 获取选中状态
	 * @param bool          是否选中
	 */
	set checked(bool) {
		$(this).attr('checked', bool === true || bool === 'true');
	}

	/**
	 * 获取禁用状态
	 * @return {boolean}    是否禁用
	 */
	get disabled() {
		return $(this).attr('disabled') === 'true';
	}

	/**
	 *
	 * 获取禁用状态
	 * @param bool          是否禁用
	 */
	set disabled(bool) {
		$(this).attr('disabled', bool === true || bool === 'true');
	}

	/**
	 * 获取[value]属性值
	 * @return {string}    属性值
	 */
	get value() {
		return $(this).attr('value') || '';
	}

	/**
	 * 设置[value]属性值
	 * @param val           属性值
	 */
	set value(val) {
		val !== '' ? $(this).attr('value', val) : '';
	}

	/**
	 * 当自定义元素的指定属性被增加、移除或更改时被调用
	 * @param name          属性名
	 * @param oldValue      更改前的属性值
	 * @param newValue      新的属性值
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue) {
			name === 'checked'
				? this.dispatch('change')
				: $(this.shadowRoot).find('.reset-style').html(this.resetStyle());
		}
	}

	/**
	 * 当自定义元素第一次被连接到文档DOM时被调用
	 */
	connectedCallback() {
		this.onClick();
	}

	/**
	 * 当点击时
	 */
	onClick() {
		$(this.shadowRoot).on('click', ev => {
			ev.stopPropagation();
			ev.preventDefault();

			if (this.disabled) return;

			this.checked = !this.checked;

			$(`${config.prefix}-checkbox[data-trigger-event=true]`).removeAttr(
				'data-trigger-event',
			);

			$(this).attr('data-trigger-event', 'true');
		});
	}

	/**
	 * 自定义事件返回数据
	 */
	CustomEventResultParams() {
		let result = {
			name: $(this).attr('name'),
			value: this.value,
			checked: this.checked,
			disabled: this.disabled,
			isCheckedAll: false,
		};

		if (result.name) {
			let selector = `${config.prefix}-checkbox[name=${result.name}]`;

			let // 所有同名组件元素
				allCheckbox = $(selector),
				// 所有同名选中状态组件元素
				allCheckedCheckbox = $(`${selector}[checked=true]`),
				// 所有同名禁用状态组件元素
				allDisabledCheckbox = $(`${selector}[disabled=true]`),
				// 所有同名选中且禁用状态组件元素
				allCheckedAndDisabledCheckbox = $(
					`${selector}[checked=true][disabled=true]`,
				);

			result.isCheckedAll =
				allCheckbox.length ===
				allCheckedCheckbox.length +
					allDisabledCheckbox.length -
					allCheckedAndDisabledCheckbox.length;

			result.checkedLists = $(allCheckedCheckbox).each(item => ({
				name: $(item).attr('name'),
				value: item.value,
				checked: item.checked,
				disabled: item.disabled,
			}));
		} else {
			result.isCheckedAll = result.checked;
		}

		return result;
	}

	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
                :host {
                    display: inline-flex;
                }
                
                .checkbox-component {
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
                }
                
                .checkbox-component .checkbox-label {
                    margin-left: 5px;
                }
                
                .checkbox-component .checkbox-label:empty {
                    margin-left: 0;
                }
                
                .checkbox-component .checkbox-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: var(--border-1px-width) solid var(--color-border);
                    border-radius: ${pxToVw(4)};
                    transition: .3s;
                }
                
                .checkbox-component .checkbox-icon svg {
                    width: 90%;
                    height: 90%;
                    fill: var(--color-white);
                }
                
                :host([checked=true]) .checkbox-component .checkbox-icon {
                    background: var(--color-theme);
                    border-color: var(--color-theme)
                }
                
                :host([disabled=true]) .checkbox-component {
                    cursor: not-allowed;
                }
                
                :host([disabled=true]) .checkbox-component .checkbox-icon {
                    border-color: var(--color-disabled);
                    background: var(--color-disabled-bg);
                }
                
                :host([disabled=true][checked=true]) .checkbox-component .checkbox-icon {
                    background: var(--color-disabled);
                }
                
                :host([disabled=true]) .checkbox-component .checkbox-label {
                    color: var(--color-disabled);
                }
            </style>
            
            <style class="reset-style">${this.resetStyle()}</style>
            
            <div class="checkbox-component">
                <div class="checkbox-icon">
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M913.017 237.02c-25.311-25.312-66.349-25.312-91.66 0l-412.475 412.474-206.237-206.237c-25.312-25.312-66.35-25.312-91.661 0s-25.312 66.35 0 91.66l252.067 252.067c0.729 0.73 1.439 1.402 2.134 2.029 25.434 23.257 64.913 22.585 89.527-2.029l458.303-458.303c25.313-25.312 25.313-66.35 0.001-91.661z"></path></svg>
                </div>
                <span class="checkbox-label">
                    <slot></slot>
                </span>
            </div>
        `;
	}

	/**
	 * resetStyle
	 * @return {string}     重置后的样式
	 */
	resetStyle() {
		let size = (Number($(this).attr('size')) || 32) - 2;

		return `
            .checkbox-component .checkbox-icon {
                width: ${pxToVw(size)};
                height: ${pxToVw(size)};
            }
        `;
	}
}
