import {
	$,
	CreateHTMLElement,
	customElementsDefine,
	pxToVw,
} from '../../utils';

/**
 * 侧边栏子项
 */
@customElementsDefine
class MenuGroup extends CreateHTMLElement {
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
                ::slotted([slot=title]) { 
                    color: var(--color-gray-light);
                    font-size: var(--font-size-xs);
                }
            </style>
            
            <slot name="title"></slot>
            
            <slot></slot>
        `;
	}
}
