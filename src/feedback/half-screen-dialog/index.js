import {$, pxToVw, CreateHTMLElement, config, customElementsDefine} from '../../utils';
import './../drawer';

/**
 * 半屏对话框
 */
@customElementsDefine
class HalfScreenDialogComponent extends CreateHTMLElement {
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['visible'];
    }

    /**
     * 获取是否可见
     * @return {boolean}    true || false
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
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            $(this.shadowRoot).find(`${config.prefix}-drawer`).attr('visible', newValue);
        }
    }
    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.bind();
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
     * 事件绑定
     */
    bind() {
        $(this.shadowRoot)
            .find(`${config.prefix}-drawer`)
            .on('change', ev => {
                this.visible = ev.detail.visible;
            });
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let borderRadius = $(this).attr('border-radius') || 24;

        return `
            <${config.prefix}-drawer 
                visible="${this.visible || false}"
                mask-closable="${$(this).attr('mask-closable') || true}"
                align="bottom"
            >
                <style>
                    .half-screen-dialog-wrapper {
                        background: white;
                        border-radius: ${pxToVw(borderRadius, borderRadius, 0, 0)};
                        display: flex;
                        flex-direction: column;
                        max-height: 90vh;
                        position: relative;
                    }
                    
                    ::slotted([slot=header]) {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        min-height: ${pxToVw(110)};
                        font-size: ${pxToVw(30)};
                        font-weight: bold;
                    }
                    
                    ::slotted([slot=body]) {
                        flex: 1;
                        overflow: auto;
                        -webkit-overflow-scrolling: touch;
                    }
                </style>
                
                <div class="half-screen-dialog-wrapper">
                    <slot name="header"></slot>
                    <slot name="body"></slot>
                    <slot name="footer"></slot>
                </div>
            </${config.prefix}-drawer>
        `;
    }
}
