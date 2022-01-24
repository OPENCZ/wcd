import {$, pxToVw, createCustomElement, CreateHTMLElement} from '../../utils';

/**
 * 开关组件
 */
class SwitchComponent extends CreateHTMLElement {
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
     * 设置选中状态
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
     * @param val          属性值
     */
    set value(val) {
        val !== '' ? $(this).attr('checked', val) : '';
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
        $(this.shadowRoot).on('click', () => {
            if (this.disabled) return;

            this.checked = !this.checked;
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
                
                .switch-wrapper {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
                    padding: 0;
                    background: #FDFDFD;
                    box-sizing: border-box;
                    border: var(--border-1px-width) solid var(--color-border);
                    transition: background-color 0.1s,border 0.1s;
                    overflow: hidden;
                }
                
                .switch-wrapper .switch-icon {
                    border-radius: 19px;
                    background: white;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
                    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
                }
                
                :host([checked=true]) .switch-wrapper {
                    background: var(--color-theme);
                    border-color: var(--color-theme);
                }
                
                :host([disabled=true]) .switch-wrapper {
                    cursor: not-allowed;
                    background: var(--color-disabled);
                }
                
                :host([disabled=true][checked=true]) .switch-wrapper {
                    cursor: not-allowed;
                    background: var(--color-disabled);
                    border-color: var(--color-disabled);
                }
            </style>
            
            <style class="reset-style">${this.resetStyle()}</style>
            
            <label class="switch-wrapper">
                <i class="switch-icon"></i>
            </label>
        `;
    }

    /**
     * 重置样式
     * @return {string}     重置后的样式
     */
    resetStyle() {
        let size = Number($(this).attr('size')) || 48,
            width = Math.round(size * 1.6);

        return `
            .switch-wrapper {
                width: ${pxToVw(width)};
                height: ${pxToVw(size)};
                border-radius: ${pxToVw(size / 2)};
            }
            .switch-wrapper .switch-icon {
                width: ${pxToVw(size - 4)};
                height: ${pxToVw(size - 4)};
            }
                
            :host([checked=true]) .switch-wrapper .switch-icon {
                transform: translateX(${pxToVw(width - size)});
            }
        `;
    }
}

createCustomElement(SwitchComponent);
