import {$, config, CreateHTMLElement, customElementsDefine, pxToVw} from '../../utils';

/**
 * 侧边栏子项
 */
@customElementsDefine
class Submenu extends CreateHTMLElement {
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['open'];
    }

    /**
     * 设置是否打开状态
     * @param bool          布尔值
     */
    set open(bool) {
        $(this).attr('open', bool === 'true' || bool === true);
    }

    /**
     * 获取是否打开状态
     * @returns {boolean}   布尔值
     */
    get open() {
        return $(this).attr('open') === 'true';
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        newValue === 'true' ? this.show() : this.hide();
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        let sub = $(this.shadowRoot).find('.sub-box');

        $(this.shadowRoot)
            .find('.title-box')
            .on('click', () => {
                let h = $(sub).removeClass('transition').children().offset().height;

                if (this.open) {
                    $(sub).css('height', h);
                }

                setTimeout(() => {
                    this.open = !this.open;

                    $(sub)
                        .addClass('transition')
                        .css('height', this.open ? h : 0);
                }, 50);

                setTimeout(() => {
                    this.open
                        ? $(sub).css('height', '100%')
                        : $(this).find(`${config.prefix}-submenu[open=true]`).attr('open', 'false');
                }, 300);
            });
    }

    show() {
        let sub = $(this.shadowRoot).find('.sub-box');
        let h = $(sub).removeClass('transition').children().offset().height;

        setTimeout(() => {
            $(sub).addClass('transition').css('height', h);
        }, 50);
        setTimeout(() => {
            $(sub).css('height', '100%');
        }, 300);
    }

    hide() {
        $(this.shadowRoot).find('.sub-box').css('height', 0);
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        return `
            <style>
                :host {
                    display: block;
                }
                
                .sub-box {
                    height: 0;
                    overflow: hidden;
                }
                
                .sub-box.transition {
                    transition: .3s;
                }
                
                .title-box {
                    display: flex;
                    align-items: center;
                    height: var(--height-md);
                    cursor: pointer;
                    transition: .3s color;
                    padding-right: var(--margin-padding-md);
                }
                
                .title-box:hover {
                    color: var(--color-link);
                }
                
                .title-box:hover svg {
                    fill: var(--color-link);
                }
                
                .title-box ::slotted([slot=icon]) {
                    margin-right: 10px;
                }
                
                .title-box ::slotted([slot=title]) {
                    flex: 1;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                
                .title-box svg {
                    width: ${pxToVw(24)};
                    height: ${pxToVw(24)};
                    transition: .3s transform;
                }
                
                :host([open=true]) .title-box svg {
                    transform: rotate(180deg);
                }
            </style>
            
            <div class="title-box">
                <slot name="icon"></slot>
                <slot name="title"></slot>

                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M890.336 330.912c-12.576-12.416-32.8-12.352-45.248 0.192L517.248 661.952 184.832 332.512c-12.576-12.448-32.8-12.352-45.28 0.192-12.448 12.576-12.352 32.832 0.192 45.28l353.312 350.112c0.544 0.544 1.248 0.672 1.792 1.184 0.128 0.128 0.16 0.288 0.288 0.416 6.24 6.176 14.4 9.28 22.528 9.28 8.224 0 16.48-3.168 22.72-9.472l350.112-353.312C902.976 363.616 902.88 343.36 890.336 330.912z"></path></svg>
            </div>

            <div class="sub-box">
                <div>
                    <slot></slot>
                </div>
            </div>
        `;
    }
}
