import { $, config } from '../../utils';
import './component';

/**
 * 对话框
 */
export class Dialog {
	constructor(options) {
		this.id = `Dialog-${new Date().getTime()}`;

		this.render(options);
	}

	/**
	 * 渲染
	 */
	render(options) {
		if (!options.title && !options.content) return;

		let str = `
            <${config.prefix}-dialog
                id="${this.id}" 
                visible="true"
                mask-closable="${options.maskClosable || true}"
                border-radius="${options.borderRadius}"
            >
                ${
									options.title
										? `<div slot="header">${options.title}</div>`
										: ``
								}
                ${
									options.content
										? `<div slot="body">${options.content}</div>`
										: ``
								}
                
                <div slot="footer">
                    ${
											options.buttons?.length
												? options.buttons.map(
														(item, i) =>
															`<button data-index="${i}">${item}</button>`,
												  )
												: `<button data-index="0">我知道了</button>`
										}
                </div>
            </${config.prefix}-popup>
        `;

		$(document.body).append(str);

		this.bind(options.onClick);
	}

	/**
	 * 事件绑定
	 * @param onClick   当操作按钮点击时回调
	 */
	bind(onClick = () => {}) {
		$(`#${this.id} [slot="footer"] button`).on('click', ev => {
			let index = $(ev.target).attr('data-index');

			onClick(Number(index), () => $(`#${this.id}`).attr('visible', false));
		});
	}
}
