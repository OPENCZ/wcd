import {
	pxToVw,
	$,
	config,
	CreateHTMLElement,
	customElementsDefine,
} from '../../utils';

/**
 * 气泡聊天框
 */
@customElementsDefine
class ChatComponent extends CreateHTMLElement {
	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
            	:host {
            		display: flex;
            	}
            	
                :host([placement=right]) ::slotted(${config.prefix}-chat-bubble) {
					border-radius: 20px 4px 20px 20px !important;
                }
            </style>
            
            <slot></slot>
        `;
	}
}

/**
 * 聊天时间框
 */
@customElementsDefine
class ChatTimeComponent extends CreateHTMLElement {
	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
            	:host {
            		display: block;
            		margin-top: var(--margin-padding-lg);
            		text-align: center;
            		color: var(--color-gray-light);
            		font-size: var(--font-size-xs);
            	}
            </style>
            
            <slot></slot>
        `;
	}
}

/**
 * 气泡聊天框
 */
@customElementsDefine
class ChatMessageComponent extends CreateHTMLElement {
	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
            	:host {
	            	display: block;
            		margin-top: var(--margin-padding-lg);
            	}
            	
                :host ::slotted([slot=avatar]) {
                	margin-right: var(--margin-padding-md);
                }
                
                :host([placement=right]) ::slotted([slot=avatar]) {
					margin-right: 0;
					margin-left: var(--margin-padding-md);
                }
                
                :host ::slotted([slot=nickname]) {
                	margin-bottom: var(--margin-padding-sm);
                	font-size: var(--font-size-xs);
                }
                
                .chat-message-wrapper {
                	display: flex;
                }
                
                :host([placement=right]) .chat-message-wrapper {
                	flex-direction: row-reverse;
                }
                
                .chat-message-wrapper > img {
                	width: 32px;
                	height: 32px;
                }
                
                .chat-message-wrapper > div {
                	flex: 1;
                	overflow: hidden;
                }
                
                :host([placement=right]) .chat-message-wrapper > div {
                	text-align: right;
                }
            </style>
            
            <div class="chat-message-wrapper">
				<slot name="avatar"></slot>

            	<div>
					<slot name="nickname"></slot>
            		<div>
            			<slot></slot>
					</div>
				</div>
			</div>
        `;
	}
}

/**
 * 气泡聊天框
 */
@customElementsDefine
class ChatBubbleComponent extends CreateHTMLElement {
	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
                :host {
                	display: inline-block;
                    max-width: 680px;
					min-width: 1px;
					background: #f9f9f9;
					border-radius: 4px;
					padding: 5px 12px;
					line-height: 1.7;
					word-wrap: break-word;
					user-select: text;
					font-size: var(--font-size);
                }
            </style>
            
            <slot></slot>
        `;
	}
}
