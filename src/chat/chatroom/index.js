import {
	pxToVw,
	$,
	CreateHTMLElement,
	config,
	customElementsDefine,
} from '../../utils';

/**
 * 单选框组件
 */
@customElementsDefine
class ImChatroomComponent extends CreateHTMLElement {
	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                }
                
                .im-chatroom-header {
                	
                }
                
                .im-chatroom-main {
                	flex: 1;
                	overflow: hidden;
                }
            </style>
            
            <section class="im-chatroom-wrapper">
				<div class="im-chatroom-header"></div>
				<div class="im-chatroom-main"></div>
				<div class="im-chatroom-footer"></div>
			</section>
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
