import {$, CreateHTMLElement, customElementsDefine, loadingIconSvg} from '../../utils';

/**
 * 输入框组件
 */
@customElementsDefine
class InputComponent extends CreateHTMLElement {
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['type', 'disabled', 'placeholder'];
    }

    /**
     * 获取禁用状态
     * @return {boolean}    是否禁用
     */
    get value() {
        return $(this.shadowRoot).find('input').val() || '';
    }

    /**
     *
     * 获取禁用状态
     * @param value          是否禁用
     */
    set value(value) {
        $(this).attr('value', value);
        $(this.shadowRoot).find('input').val(value);

        let inputWrapper = $(this.shadowRoot).find('.input-wrapper');
        value ? $(inputWrapper).addClass('clear') : $(inputWrapper).removeClass('clear');
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
        bool = bool === true || bool === 'true';

        $(this).attr('disabled', bool);

        let input = $(this.shadowRoot).find('input');

        bool ? $(input).attr('disabled', true) : $(input).removeAttr('disabled');
    }

    /**
     * 获取禁用状态
     * @return {boolean}    是否禁用
     */
    get type() {
        return $(this).attr('type');
    }

    /**
     *
     * 获取禁用状态
     * @param type          是否禁用
     */
    set type(type) {
        $(this).attr('type', type);
        $(this.shadowRoot).find('input').attr('type', type);
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
            case 'type':
                this.type = newValue;
                break;
            case 'disabled':
                this.disabled = newValue;
                break;
            case 'placeholder':
                $(this.shadowRoot).find('input').attr('placeholder', newValue);
                break;
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.setDefaultValue();

        this.bind();

        if ($(this).attr('count') === 'true') {
            this.setMaxLength();
        }
    }

    /**
     * 绑定事件
     */
    bind() {
        let inputWrapper = $(this.shadowRoot).find('.input-wrapper');
        let label = $(this).attr('label');

        // 输入框事件回调
        let inputEventCallback = ev => {
            let v = ev.target.value;

            if (ev.type === 'blur' || ev.type === 'change') {
                v = this.setValue(v);
            }

            this.value = this.setMaxLength(v);

            this.dispatch(ev.type);

            if (ev.type === 'focus') {
                $(inputWrapper).addClass('focus');

                label ? $(inputWrapper).addClass('label') : '';
            }

            if (ev.type === 'blur') {
                $(inputWrapper).removeClass('focus');

                !v && label ? $(inputWrapper).removeClass('label') : '';
            }
        };

        // 监听输入框事件
        $(this.shadowRoot)
            .find('input')
            .on('input', inputEventCallback)
            .on('click', inputEventCallback)
            .on('focus', inputEventCallback)
            .on('blur', inputEventCallback)
            .on('change', inputEventCallback)
            .on('click', ev => {});

        // 组件点击时，手动出发输入框获取焦点
        $(this.shadowRoot).on('click', ev => {
            label ? $(inputWrapper).addClass('label') : '';

            this.shadowRoot.querySelector('input').focus();
        });

        // 清空值
        if ($(this).attr('clear') === 'true') {
            $(this.shadowRoot)
                .find('.icon-box.clear')
                .on('click', () => {
                    this.value = '';

                    this.setMaxLength();
                    this.dispatch('change');
                });
        }

        // 查看密码
        if ($(this).attr('type') === 'password' && $(this).attr('view') === 'true') {
            $(this.shadowRoot)
                .find('.icon-box.view')
                .on('click', ev => {
                    $(ev.currentTarget).toggleClass('change');

                    this.type = $(ev.currentTarget).hasClass('change') ? 'text' : 'password';
                });
        }
    }

    /**
     * 设置最小值和最大值
     * @param v             输入框值
     * @returns {string}    返回截取后的值
     */
    setValue(v = '') {
        if ($(this).attr('type') !== 'number') return v;

        let min = Number($(this).attr('min'));
        if (!isNaN(min)) {
            v = v < min ? min : v;
        }

        let max = Number($(this).attr('max'));
        if (!isNaN(max)) {
            v = v > max ? max : v;
        }

        return v;
    }

    /**
     * 设置最大长度
     * @param v             输入框值
     * @returns {string}    返回截取后的值
     */
    setMaxLength(v = '') {
        let maxLength = $(this).attr('length');

        if (maxLength > 0) {
            v = v.slice(0, 10);

            $(this.shadowRoot).find('.text-count').text(`${v.length}/${maxLength}`);
        }

        return v;
    }

    /**
     * 自定义事件返回数据
     */
    CustomEventResultParams(params = {}) {
        return {
            value: this.value,
            type: this.type,
            disabled: this.disabled,
            name: $(this).attr('name') || '',
        };
    }

    /**
     * 设置组件默认值
     */
    setDefaultValue() {
        let defaultValue = $(this).attr('default-value');

        if (defaultValue) {
            defaultValue = this.setValue(defaultValue);
            this.value = this.setMaxLength(defaultValue);
        }
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let isView = $(this).attr('type') === 'password' && $(this).attr('view') === 'true',
            label = $(this).attr('label'),
            placeholder = $(this).attr('placeholder') || '',
            autofocus = $(this).attr('autofocus') === 'true' ? 'autofocus' : '';

        label ? (placeholder = '') : '';

        return `
            <style>
                :host {
                    display: inline-block;
                    width: 200px;
                }
                
                :host([block=true]) {
                    display: block;
                    width: 100% !important;
                }
                
                .input-wrapper {
                    display: flex;
                    align-items: center;
                    border: var(--border-1px-width) solid var(--color-border);
                    transition: .3s;
                    width: 100%;
                    height: var(--height-md);
                    position: relative;
                }
                
                :host([size=lg]) .input-wrapper {
                    height: var(--height-lg);
                }
                
                :host([size=sm]) .input-wrapper {
                    height: var(--height-sm);
                }
                
                .input-wrapper.focus, .input-wrapper:hover {
                    border-color: var(--color-theme);
                }
                
                :host([disabled=true]) .input-wrapper.focus, :host([disabled=true]) .input-wrapper:hover {
                    border-color: var(--color-border);
                }
                
                :host([disabled=true]), :host([disabled=true]) input {
                    cursor: not-allowed;
                }
                
                .input-wrapper .text-label {
                    position: absolute;
                    background: white;
                    padding: 0 var(--margin-padding-md);
                    transition: .3s;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                }
                
                .input-wrapper.label .text-label {
                    top: 0;
                    left: var(--margin-padding-sm);
                    font-size: var(--font-size-xs);
                    color: var(--color-gray-light);
                }
                
                input {
                    flex: 1;
                    height: 100%;
                    padding: 0 var(--margin-padding-lg);
                    border: none;
                    overflow: hidden;
                    outline: none;
                    -webkit-tap-highlight-color: transparent;
                }
                
                :host([size=lg]) .input-wrapper input {
                    font-size: var(--font-size-sm);
                }
                
                :host([size=sm]) .input-wrapper input {
                    padding: 0 var(--margin-padding-md);
                    font-size: var(--font-size-xs);
                }
                
                :host([disabled=true]) input {
                    background: var(--color-disabled-bg);
                }
                
                input:-webkit-autofill {
                    box-shadow: 0 0 0 10000px white inset;
                }
                
                input:focus {
                    -webkit-tap-highlight-color: transparent;
                }
                
                input::-webkit-input-placeholder {
                    color: var(--color-gray-light);
                }
                
                input[type="search"]::-webkit-search-decoration {
                    display: none;
                }
                
                :host([align=center]) input {
                    text-align: center;
                }
                
                :host([align=right]) input {
                    text-align: right;
                }
                
                .icon-box {
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    padding: 0 var(--margin-padding-sm);
                    cursor: pointer;
                }
                
                :host([disabled=true]) .icon-box {
                    display: none !important;
                }
                
                .icon-box.clear {
                    display: none;
                }
                
                .icon-box.view {
                    display: flex;
                }
                
                .icon-box svg {
                    width: 16px;
                    height: 16px;
                    fill: var(--color-gray-light);
                }
                
                .icon-box:last-of-type {
                    margin-right: var(--margin-padding-sm);
                }
                
                .input-wrapper.clear .icon-box.clear, .input-wrapper .icon-box.view.change svg:last-of-type {
                    display: flex;
                }
                
                .input-wrapper .icon-box.view.change svg:first-of-type, .input-wrapper .icon-box.view svg:last-of-type {
                    display: none;
                }
                
                ::slotted([slot=prefix]) {
                    margin-left: var(--margin-padding-md);
                }
                
                ::slotted([slot=suffix]) {
                    margin-right: var(--margin-padding-md);
                }
                
                .text-count {
                    margin-right: var(--margin-padding-md);
                    color: var(--color-gray-light);
                    font-size: var(--font-size-xs);
                }
                
                :host([border=none]) .input-wrapper, :host([border=top]) .input-wrapper, :host([border=right]) .input-wrapper, :host([border=bottom]) .input-wrapper, :host([border=left]) .input-wrapper {
                    border: none;
                }
                
                ${['top', 'right', 'bottom', 'left']
                    .map(
                        item => `
                        :host([border=${item}]) .input-wrapper {
                            border-${item}: var(--border-1px-width) solid var(--color-border);;
                        }
                    `,
                    )
                    .join('')}
            </style>
            
            <div class="input-wrapper">
                ${label ? `<span class="text-label">${label}</span>` : ``}
            
                <slot name="prefix"></slot>
                
                <input type="text" placeholder="${placeholder}" ${autofocus}/>
                
                ${
                    $(this).attr('clear') === 'true'
                        ? `<span class="icon-box clear">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.992 64 64 264.96 64 512s200.96 448 448 448c247.008 0 448-200.96 448-448S759.04 64 512 64zM694.752 649.984c12.48 12.544 12.448 32.768-0.064 45.248-6.24 6.208-14.4 9.344-22.592 9.344-8.224 0-16.416-3.136-22.656-9.408l-137.6-138.016-138.048 136.576c-6.24 6.144-14.368 9.248-22.496 9.248-8.256 0-16.48-3.168-22.752-9.504-12.416-12.576-12.32-32.8 0.256-45.248l137.888-136.384-137.376-137.824c-12.48-12.512-12.448-32.768 0.064-45.248 12.512-12.512 32.736-12.448 45.248 0.064l137.568 137.984 138.048-136.576c12.544-12.448 32.832-12.32 45.248 0.256 12.448 12.576 12.32 32.832-0.256 45.248l-137.888 136.384L694.752 649.984z"></path></svg>
                            </span>
                        `
                        : ``
                }
                
                ${
                    isView
                        ? `
                            <span class="icon-box view">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M605.376 490.528l61.696 59.04C670.016 537.44 672 524.992 672 512c0-88.224-71.776-160-160-160-15.424 0-30.016 2.88-44.16 6.976l61.44 58.784C566.944 424.64 596.832 453.472 605.376 490.528z"></path><path d="M556.256 664.992l-61.376-58.752c-37.792-6.848-67.84-35.744-76.32-72.96l-61.632-58.944C353.984 486.496 352 498.976 352 512c0 88.224 71.776 160 160 160C527.456 672 542.08 669.088 556.256 664.992z"></path><path d="M178.944 136.864C166.144 124.672 145.888 125.12 133.696 137.888 121.472 150.656 121.92 170.912 134.688 183.136l736 704C876.896 893.056 884.832 896 892.8 896c8.448 0 16.832-3.328 23.136-9.888 12.224-12.768 11.744-33.024-0.992-45.248L178.944 136.864z"></path><path d="M512 800c-169.28 0-335.328-113.568-414.88-283.936-0.16-0.608-0.352-1.152-0.544-1.728-0.064-0.544-0.224-0.992-0.288-1.312C96.256 512.672 96 512.224 96 511.776L96 511.36c0-0.736 0.448-1.472 0.544-2.208 0.128-0.448 0.352-0.832 0.48-1.28 29.728-64.128 72-120.256 122.144-165.312L172.864 298.304c-55.488 50.656-102.08 113.152-134.624 184.256-1.056 2.112-1.792 4.096-2.272 5.888-0.256 0.544-0.448 1.056-0.64 1.6-1.76 5.056-1.76 8.48-1.632 7.712-0.8 3.744-1.6 11.2-1.6 11.2-0.224 2.24-0.192 4.032 0.064 6.272 0 0 0.704 13.472 1.056 14.816l4.544 13.632C126.4 737.344 316.992 865.76 512 865.76c69.824 0 138.976-17.792 203.104-47.936l-49.856-48.576C616.128 789.12 564.224 800 512 800z"></path><path d="M992 512.096c0-5.792-0.992-10.592-1.28-11.136-0.192-2.912-1.152-8.096-2.08-10.816-0.256-0.672-0.544-1.376-0.832-2.08-0.48-1.568-1.024-3.104-1.6-4.32C897.664 290.08 707.104 160 512 160c-69.76 0-138.88 16.864-203.008 47.072l49.856 47.648C407.968 234.88 459.808 224 512 224c169.76 0 336.192 114.048 414.752 283.68 0.096 0.32 0.16 0.608 0.256 0.8 0.064 0.288 0.16 0.608 0.256 0.864 0.16 1.28 0.32 2.496 0.48 3.168-0.16 0.672-0.256 1.28-0.384 1.952-0.032 0.16-0.096 0.32-0.128 0.48-0.128 0.416-0.288 0.864-0.416 1.376-29.696 64-71.872 120.032-121.952 165.056l46.336 44.32c55.328-50.496 101.728-112.672 134.016-183.36 1.376-2.496 2.24-4.832 2.848-6.912 0.256-0.608 0.48-1.184 0.672-1.76 1.536-4.48 1.856-8.352 1.728-8.352 0 0 0 0.032-0.032 0.032C991.04 522.272 992 517.664 992 512.096z"></path>
                                </svg>
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M992 512.096c0-5.76-0.992-10.592-1.28-11.136-0.192-2.88-1.152-8.064-2.08-10.816-0.256-0.672-0.544-1.376-0.832-2.08-0.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160 316.928 160 126.368 290.016 38.24 482.592c-1.056 2.112-1.792 4.096-2.272 5.856-0.224 0.544-0.448 1.088-0.64 1.6-1.76 5.088-1.792 8.64-1.632 7.744-0.832 3.744-1.568 11.168-1.568 11.168-0.224 2.272-0.224 4.032 0.032 6.304 0 0 0.736 6.464 1.088 7.808 0.128 1.824 0.576 4.512 1.12 6.976l-0.032 0c0.448 2.08 1.12 4.096 1.984 6.08 0.48 1.536 0.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912 0.256-0.608 0.48-1.184 0.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32 0 0 0 0-0.032 0.032C991.04 522.272 992 517.632 992 512.096zM927.328 514.464c-0.032 0.16-0.096 0.32-0.128 0.48-0.128 0.416-0.288 0.864-0.416 1.376C848.032 686.08 681.696 800 512 800c-169.28 0-335.328-113.568-414.88-283.968-0.16-0.576-0.32-1.152-0.512-1.696-0.064-0.544-0.16-1.024-0.192-1.344-0.064-0.352-0.128-0.8-0.192-1.248l0.032-0.416c0.16-0.704 0.288-1.44 0.384-2.208 0.128-0.416 0.256-0.832 0.384-1.28C175.84 337.984 342.304 224 512 224c169.76 0 336.192 114.08 414.752 283.68 0.096 0.32 0.16 0.608 0.256 0.832 0.064 0.288 0.16 0.576 0.256 0.864 0.16 1.28 0.32 2.528 0.48 3.168C927.552 513.184 927.456 513.824 927.328 514.464z"></path><path d="M512 352c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160S600.224 352 512 352zM512 608c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96S564.928 608 512 608z"></path>
                                </svg>
                            </span>
                        `
                        : ``
                }
                
                ${$(this).attr('count') === 'true' ? `<span class="text-count"></span>` : ``}
                
                <slot name="suffix"></slot>
            </div>
        `;
    }
}
