import {$, CreateHTMLElement, customElementsDefine, loadingIconSvg} from '../../utils';

/**
 * 复选框组件
 */
@customElementsDefine
class ButtonComponent extends CreateHTMLElement {
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['type'];
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
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'type':
                this.setTypeStyle(newValue);
                break;
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {}

    /**
     * 设置类型样式
     * @param type      类型
     */
    setTypeStyle(type) {
        if (type === 'text') {
            return $(this.shadowRoot).find('div').css({
                borderColor: 'transparent',
            });
        }

        if (type === 'link') {
            return $(this.shadowRoot).find('div').css({
                color: `var(--color-link)`,
                borderColor: 'transparent',
            });
        }

        let typeArray = ['theme', 'info', 'success', 'warning', 'danger', 'disabled'];
        let i = typeArray.indexOf(type);

        if (i === -1) return;

        let css;

        // 幽灵按钮样式设置
        if ($(this).attr('ghost') === 'true') {
            css = {
                color: `var(--color-${typeArray[i]})`,
                borderColor: `var(--color-${typeArray[i]})`,
            };
        } else {
            css = {
                color: 'white',
                borderColor: `var(--color-${typeArray[i]})`,
                backgroundColor: `var(--color-${typeArray[i]})`,
            };
        }

        $(this.shadowRoot).find('.button-wrapper').css(css);
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
                    cursor: pointer;
                    transition: .3s;
                    position: relative;
                }
                
                :host([type=disabled]) {
                    cursor: not-allowed;
                }
                
                :host(:hover) {
                    opacity: .8;
                }
                
                :host([type=disabled]:hover), :host([loading=true]:hover) {
                    opacity: 1;
                }
                
                .button-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: var(--height-md);
                    padding: 0 var(--margin-padding-lg);
                    border: var(--border-1px-width) solid var(--color-border);
                }
                
                :host([ghost=true]) .button-wrapper {
                    background: transparent;
                }
                
                :host([size=lg]) .button-wrapper {
                    height: var(--height-lg);
                    font-size: var(--font-size-sm);
                }
                
                :host([size=sm]) .button-wrapper {
                    height: var(--height-sm);
                    font-size: var(--font-size-xs);
                    padding: 0 var(--margin-padding-md);
                }
                
                .loading-box {
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    transition: .3s;
                }
                
                :host([loading=true]) .loading-box {
                    display: flex;
                    background: rgba(255, 255, 255, .8);
                    backdrop-filter: blur(1px);
                }
                
                .loading-box svg {
                    animation: rotating 2s linear infinite;
                    width: 16px;
                    height: 16px;
                }
                
                @keyframes rotating {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(1turn);
                    }
                }
            </style>
            
            <div class="loading-box">${loadingIconSvg}</div>

            <div class="button-wrapper">
                <slot></slot>
            </div>
        `;
    }
}
