import {pxToVw, $, createCustomElement, CreateHTMLElement, config} from '../../utils';

/**
 * 单选框组件
 */
class RadioComponent extends CreateHTMLElement {
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
     * 设置是否选中
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
     * 设置禁用状态
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
                ? this.dispatch('change', this.CustomEventResultParams())
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

            let name = this.getAttribute('name') || '',
                isSelf = false;

            if (name) {
                $(`${config.prefix}-radio[name="${name}"][checked="true"]`).each(item => {
                    if (item.disabled) return;

                    this == item && item.checked ? (isSelf = true) : (item.checked = false);
                });
            }

            if ((!name && this.checked) || isSelf) return;

            this.checked = true;
        });
    }

    /**
     * 自定义事件返回数据
     */
    CustomEventResultParams() {
        return {
            name: $(this).attr('name'),
            value: this.value,
            checked: this.checked,
            disabled: this.disabled,
        };
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
                
                .radio-wrapper {
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
                }
                
                .radio-wrapper .radio-label {
                    margin-left: ${pxToVw(10)};
                }
                
                .radio-wrapper .radio-label:empty {
                    margin-left: 0;
                }
                
                .radio-wrapper .radio-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: var(--border-1px-width) solid var(--color-border);
                    border-radius: 50%;
                    transition: .3s;
                }
                
                .radio-wrapper .radio-icon span {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    transform: scale(0);
                    transition: inherit;
                }
                
                :host([checked=true]) .radio-wrapper .radio-icon {
                    border-color: var(--color-theme)
                }
                
                :host([checked=true]) .radio-wrapper .radio-icon span {
                    background: var(--color-theme);
                    transform: scale(.5);
                }
                
                :host([disabled=true]) .radio-wrapper {
                    cursor: not-allowed;
                }
                
                :host([disabled=true]) .radio-wrapper .radio-icon {
                    border-color: var(--color-disabled);
                    background: var(--color-disabled-bg);
                }
                
                :host([disabled=true][checked=true]) .radio-wrapper .radio-icon span {
                    background: var(--color-disabled);
                }
                
                :host([disabled=true]) .radio-wrapper .radio-label {
                    color: var(--color-disabled);
                }
            </style>
            
            <style class="reset-style">${this.resetStyle()}</style>
            
            <div class="radio-wrapper">
                <div class="radio-icon">
                    <span></span>
                </div>
                <span class="radio-label">
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
        let size = $(this).attr('size') || 32;
        size = pxToVw(size - 2);

        return `
            .radio-wrapper .radio-icon {
                width: ${size};
                height: ${size};
            }
        `;
    }
}

createCustomElement(RadioComponent);
