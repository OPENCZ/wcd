import {
	$,
	pxToVw,
	CreateHTMLElement,
	config,
	customElementsDefine,
} from '../../utils';
import './item';

/**
 * 面包屑组件
 */
@customElementsDefine
class BreadcrumbComponent extends CreateHTMLElement {
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
                }
                
                ::slotted(${config.prefix}-breadcrumb-item) {
                    display: inline-flex;
                    color: var(--color-gray-light);
                }
                
                ::slotted(${config.prefix}-breadcrumb-item):last-of-type {
                    color: var(--color-black);
                }
                
                ::slotted(${config.prefix}-breadcrumb-item)::after {
                    display: block;
                    content: "${$(this).attr('separator') || '/'}";
                    margin: ${pxToVw(0, 16)};
                }
                
                ::slotted(${
									config.prefix
								}-breadcrumb-item:last-of-type):last-of-type::after {
                    display: none;
                }
            </style>
            <slot></slot>
        `;
	}
}
