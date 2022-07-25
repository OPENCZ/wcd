import {
	$,
	pxToVw,
	customElementsDefine,
	CreateHTMLElement,
	config,
} from '../../utils';
import '../popup';

/**
 * 对话框
 * @docs    请查阅README.md文档
 */
@customElementsDefine
class DialogComponent extends CreateHTMLElement {
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
	 * 当自定义元素的指定属性被增加、移除或更改时被调用
	 * @param name          属性名
	 * @param oldValue      更改前的属性值
	 * @param newValue      新的属性值
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue) {
			$(this.shadowRoot)
				.find(`${config.prefix}-popup`)
				.attr('visible', newValue);
		}
	}

	/**
	 * 当自定义元素第一次被连接到文档DOM时被调用
	 */
	connectedCallback() {
		this.onChange();
	}

	/**
	 * 当监听属性改变时
	 */
	onChange() {
		$(this.shadowRoot)
			.find(`${config.prefix}-popup`)
			.on('change', ev => (this.visible = ev.detail.visible));
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
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <${config.prefix}-popup 
                visible="${$(this).attr('visible') || false}"
                mask-closable="${$(this).attr('mask-closable') || true}"
                align="center"
            >
                <style>
                    :host([visible]) {
                        display: block !important;
                    }
                    
                    .dialog-component {
                        overflow: hidden;
                        width: 400px;
                        max-width: 85vw;
                        padding-top: ${pxToVw(40)};
                        background: white;
                        border-radius: ${
													$(this).attr('border-radius') ||
													`var(--border-radius)`
												};
                    }
                    
                    ::slotted([slot=header]) {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: ${pxToVw(0, 40)} !important;
                        font-size: var(--font-size-md);
                        font-weight: bold;
                    }
                    
                    ::slotted([slot=body]) {
                        overflow: auto;
                        -webkit-overflow-scrolling: touch;
                        max-height: 70vh;
                        padding: ${pxToVw(10, 40, 0)} !important;
                        word-break: break-all;
                    }
                    
                    ::slotted([slot=footer]) {
                        display: flex;
                        align-items: center;
                        margin-top: ${pxToVw(40)};
                        border-top: var(--border-1px-width) solid var(--color-border);
                    }
                </style>
                
                <div class="dialog-component">
                    <slot name="header"></slot>
                    <slot name="body"></slot>
                    <slot name="footer"></slot>
                </div>
            </${config.prefix}-popup>
        `;
	}
}
