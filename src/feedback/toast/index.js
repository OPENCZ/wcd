import { $, pxToVw, config } from '../../utils';
import '../popup';

/**
 * 弹出式提示
 */
export class Toast {
	/**
	 * 构造器
	 * @param options       配置参数，可接收对象或非字符串
	 * @param afterClose    在提示框关闭后，该参数仅在简阶版生效
	 */
	constructor(options, afterClose) {
		let newOptions =
			typeof options !== 'object' ? { content: options, afterClose } : options;

		this.render(newOptions);
	}

	/**
	 * 渲染
	 * @param options   配线参数
	 */
	render(options) {
		let { icon, align, delay, content, borderRadius, afterClose } = options;

		let div = document.createElement('div'),
			popupComponent,
			id = `Toast-${new Date().getTime()}`;

		div.innerHTML = `
            <${config.prefix}-popup 
                visible="true"
                mask-closable="false"
                align="${align || 'center'}"
                id="${id}"
            >
                <style>
                    #${id} {
                        --color-mask-black: transparent;
                    }
                    ${config.prefix}-popup .toast-component {
                        max-height: 98vh;
                        color: white;
                        margin: ${pxToVw(20)};
                        box-sizing: border-box;
                        overflow: auto;
                        -webkit-overflow-scrolling: touch;
                        border-radius: ${pxToVw(borderRadius || 8)};
                        line-height: ${pxToVw(40)};
                        padding: ${pxToVw(10, 30)};
                        background: rgba(0, 0, 0, .7);
                        word-break: break-word;
                    }
                    
                    ${config.prefix}-popup .toast-component.has-icon {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: ${pxToVw(10, 20)};
                    }
                    
                    ${config.prefix}-popup .toast-component .toast-icon {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: ${pxToVw(100)};
                        font-size: ${pxToVw(100)};
                        margin-top: ${pxToVw(20)};
                    }
                    
                    ${config.prefix}-popup .toast-component .toast-content {
                        min-width: ${pxToVw(180)};
                        padding: ${pxToVw(20)} 0;
                        font-size: ${pxToVw(28)};
                        text-align: center;
                    }
                </style>
                
                <div class="toast-component ${icon ? 'has-icon' : 'no-icon'}">
                    <div class="toast-wrapper">
                        ${icon ? `<div class="toast-icon">${icon}</div>` : ''}
                        <div class="toast-content ">${content}</div>
                    </div>
                </div>
            </${config.prefix}-popup>
        `;

		popupComponent = div.children[0];
		document.body.appendChild(popupComponent);

		// 延时隐藏
		setTimeout(() => (popupComponent.visible = false), delay || 2500);

		// 绑定事件
		this.bind(popupComponent, afterClose);
	}

	/**
	 * 绑定事件
	 * @param el            <wc-popup/>元素
	 * @param afterClose    组件属性改变时回调事件类型
	 */
	bind(el, afterClose) {
		$(el).on('afterClose', () => {
			afterClose();
			$(el).remove();
		});
	}
}
