import {$, pxToVw, createCustomElement, CreateHTMLElement, loadingIconSvg} from '../../utils';

/**
 * 加载组件
 */
class SpinComponent extends CreateHTMLElement {
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['loading'];
    }

    /**
     * 获取加载类型
     * @return {string}     类型
     */
    get type() {
        return $(this).attr('type') === 'more' ? 'more' : 'mask';
    }

    /**
     * 设置加载类型
     * @param type          可选值：“mask”、“more”；默认：“more”
     */
    set type(type) {
        $(this).attr('type', type === 'more' ? 'more' : 'mask');
    }

    /**
     * 获取加载状态
     * @return {boolean}    布尔值
     */
    get loading() {
        return $(this).attr('loading') === 'true';
    }

    /**
     * 设置加载状态
     * @param bool          布尔值
     */
    set loading(bool) {
        $(this).attr('loading', bool === true || bool === 'true');
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            newValue === 'true' ? this.show() : this.hide();

            this.dispatch('change');
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.loading ? this.show() : this.hide();

        // "mask"插槽元素存在时，删除默认元素
        if ($(this).find(`[slot=mask]`).length) {
            $(this.shadowRoot).find(`.loading-mask-wrapper .icon-loading`).remove();
        }

        // "more"插槽元素存在时，删除默认元素
        if ($(this).find(`[slot=more]`).length) {
            $(this.shadowRoot).find(`.loading-more-wrapper .icon-loading`).remove();
        }
    }

    /**
     * 自定义事件返回数据
     */
    CustomEventResultParams() {
        return {
            loading: this.loading,
        };
    }

    /**
     * 显示
     */
    show() {
        let el = $(this.shadowRoot).find(`.loading-${this.type}-wrapper`).addClass('loading');

        this.setMaskStyle();
        this.setLoadingIconStyle();

        setTimeout(() => {
            $(el).addClass('show');

            $(this.shadowRoot)
                .find(`.loading-${this.type === 'more' ? 'mask' : 'more'}-wrapper`)
                .removeClass('loading', 'show', 'hide');
        }, 50);
    }

    /**
     * 隐藏
     */
    hide() {
        let el = $(this.shadowRoot).find(`.loading-${this.type}-wrapper`).removeClass('show').addClass('hide');

        setTimeout(() => {
            $(el).removeClass('show', 'hide', 'loading');
            this.loading = false;
        }, 300);
    }

    /**
     * 设置遮罩层样式
     */
    setMaskStyle() {
        let top = $(this).attr('mask-icon-top'),
            el = $(this.shadowRoot)
                .find('.loading-mask-wrapper')
                .css({
                    backdropFilter: `blur(${pxToVw(this.getAttribute('mask-blur') || 6)})`,
                    background: $(this).attr('mask-bg') || 'var(--color-mask-white)',
                });

        if (top > 0) {
            $(el).css({
                alignItems: 'flex-start',
                paddingTop: pxToVw(top),
            });
        }
    }

    /**
     * 设置默认加载图标样式
     */
    setLoadingIconStyle() {
        let fontSize = $(this).attr('font-size') || 48;

        $(this.shadowRoot)
            .find('.icon-loading')
            .each(el => {
                $(el).css({
                    width: pxToVw(fontSize),
                    height: pxToVw(fontSize),
                    fill: $(this).attr('color') || 'var(--color-theme)',
                });
            });
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
                    position: relative;
                    min-height: var(--height-md);
                }
                
                .loading-more-wrapper, .loading-mask-wrapper {
                    display: none;
                    justify-content: center;
                    align-items: center;
                    transition: .3s;
                    opacity: 0;
                }
                
                .loading-mask-wrapper {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                }
                
                :host([loading]) .loading-more-wrapper.loading, :host([loading]) .loading-mask-wrapper.loading {
                    display: flex;
                }
                
                :host([loading=true]) .loading-more-wrapper.show, :host([loading=true]) .loading-mask-wrapper.show {
                    opacity: 1;
                }
                
                :host([loading=false]) .loading-more-wrapper.hide, :host([loading=false]) .loading-mask-wrapper.hide {
                    opacity: 0;
                }
                
                :host([loading=true]) .loading-mask-wrapper.loading ::slotted([slot="icon"]) {
                    display: block !important;
                }
                
                .loading-more-wrapper .icon-loading, .loading-mask-wrapper .icon-loading {
                    line-height: var(--height-md);
                    animation: rotating 2s linear infinite;
                }
                
                .loading-more-wrapper {
                    transform: scale(0);
                    height: 0;
                    min-height: var(--height-md);
                }
                
                :host([loading=true]) .loading-more-wrapper.loading {
                    height: 100%;
                }
                
                .loading-more-wrapper.show {
                    transform: scale(1);
                }
                
                .loading-more-wrapper.hide {
                    transform: scale(0);
                    height: 0;
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
            
            <slot></slot>
            
            <div class="loading-mask-wrapper"> 
                <slot name="mask"></slot>
                ${loadingIconSvg}
            </div>
            
            <div class="loading-more-wrapper">
                <div>
                    <slot name="more"></slot>
                    ${loadingIconSvg}
                </div>
            </div>
        `;
    }
}

createCustomElement(SpinComponent);
