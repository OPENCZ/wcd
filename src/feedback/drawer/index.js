import {$, pxToVw, CreateHTMLElement, customElementsDefine} from '../../utils';

/**
 * 抽屉
 */
@customElementsDefine
class DrawerComponent extends CreateHTMLElement {
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['visible'];
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
        $(this).attr('visible', bool === 'true' || bool === true);
    }

    /**
     * 获取对齐方式
     * @return {string}     top || right || bottom || left || center
     */
    get align() {
        return $(this).attr('align') || 'center';
    }

    /**
     * 设置对齐方式
     * @param align         top || right || bottom || left || center
     */
    set align(align) {
        align ? $(this).attr('align', align) : '';
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            newValue === 'true' ? this.show() : this.hide(() => this.dispatch('afterClose'));

            this.dispatch('change');
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.onClick();
    }

    /**
     * 自定义事件返回数据
     */
    CustomEventResultParams() {
        return {
            visible: this.visible,
        };
    }

    /**
     * 显示
     */
    show() {
        this.setOffsetStyle();

        let el = $(this.shadowRoot).find('.drawer-wrapper').addClass('visible');

        setTimeout(() => $(el).addClass('show'), 50);
    }

    /**
     * 设置位移样式
     */
    setOffsetStyle() {
        let offset = $(this).attr('offset');

        if (!(offset > 0) || !['top', 'right', 'bottom', 'left'].includes(this.align)) return;

        if (offset) {
            $(this.shadowRoot)
                .find('.drawer-wrapper')
                .css({
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    [this.align]: pxToVw(offset),
                });
        }
    }

    /**
     * 隐藏
     * @param cb    隐藏后回调
     */
    hide(cb = () => {}) {
        let el = $(this.shadowRoot).find('.drawer-wrapper').removeClass('show').addClass('hide');

        setTimeout(() => {
            $(el).removeClass('hide', 'visible');
            $(this).attr('visible', 'false');
            cb();
        }, 300);
    }

    /**
     * 当点击时
     */
    onClick() {
        $(this.shadowRoot)
            .find('.drawer-wrapper')
            .on('click', ev => {
                $(this).attr('mask-closable') !== 'false' && $(ev.target).hasClass('drawer-wrapper') ? this.hide() : '';
            });
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        return `
            <style>
                :host([visible]) {
                    display: block !important;
                }
                
                .drawer-wrapper {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    display: none;
                    overflow: hidden;
                    opacity: 0;
                    z-index: var(--modal-z-index);
                    background: var(--color-mask-black);
                    transition: .3s;
                }
                
                .drawer-wrapper.visible {
                    display: flex;
                }
                
                .drawer-wrapper.show, .drawer-wrapper.show .drawer-box {
                    opacity: 1;
                }
                
                .drawer-wrapper.hide {
                    opacity: 0;
                }
                
                .drawer-wrapper .drawer-box {
                    max-width: 100%;
                    max-height: 100%;
                    overflow-scrolling: touch;
                    cursor: auto;
                    opacity: 0;
                    transition: .3s;
                    text-align: left;
                }
                
                :host([align=top]) .drawer-wrapper {
                    align-items: flex-start;
                }
                
                :host([align=top]) .drawer-wrapper .drawer-box,
                :host([align=top]) .drawer-wrapper.hide .drawer-box {
                    transform: translate(0, -100%);
                }
                
                :host([align=right]) .drawer-wrapper {
                    justify-content: flex-end;
                }
                
                
                :host([align=right]) .drawer-wrapper .drawer-box, :host([align=right]) .drawer-wrapper.hide .drawer-box {
                    transform: translate(100%, 0);
                }
                
                
                :host([align=bottom]) .drawer-wrapper {
                    align-items: flex-end;
                }
                
                :host([align=bottom]) .drawer-wrapper .drawer-box, :host([align=bottom]) .drawer-wrapper.hide .drawer-box {
                    transform: translate(0, 100%);
                }
                
                :host([align=left]) .drawer-wrapper .drawer-box, :host([align=left]) .drawer-wrapper.hide .drawer-box {
                    transform: translate(-100%, 0);
                }
                
                :host([align=center]) .drawer-wrapper {
                    justify-content: center;
                    align-items: center
                }
                
                :host([align=center]) .drawer-wrapper .drawer-box, :host([align=center]) .drawer-wrapper.hide .drawer-box {
                    transform: scale(0.8);
                }
                
                :host([align=top]) .drawer-wrapper .drawer-box,
                :host([align=top]) .drawer-wrapper .drawer-box ::slotted(*),
                :host([align=bottom]) .drawer-wrapper .drawer-box,
                :host([align=bottom]) .drawer-wrapper .drawer-box ::slotted(*) {
                    width: 100%;
                }
                
                :host([align=right]) .drawer-wrapper .drawer-box,
                :host([align=right]) .drawer-wrapper .drawer-box ::slotted(*),
                :host([align=left]) .drawer-wrapper .drawer-box,
                :host([align=left]) .drawer-wrapper .drawer-box ::slotted(*) {
                    height: 100%;
                }
                
                :host([align]) .drawer-wrapper.show .drawer-box {
                    transform: translate(0, 0);
                }
                
                :host ::slotted(*) {
                    max-width: 100vw;
                    max-height: 100vh;
                }
            </style>
                
            <div class="drawer-wrapper">
                <div class="drawer-box">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}
