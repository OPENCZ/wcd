import {
	$,
	config,
	CreateHTMLElement,
	customElementsDefine,
} from '../../utils';

/**
 * 侧边栏子项
 */
@customElementsDefine
class MenuItem extends CreateHTMLElement {
	/**
	 * 监听属性
	 * @returns {string[]}      需要被监听的属性名
	 */
	static get observedAttributes() {
		return ['active'];
	}

	/**
	 * 当自定义元素的指定属性被增加、移除或更改时被调用
	 * @param name          属性名
	 * @param oldValue      更改前的属性值
	 * @param newValue      新的属性值
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) return;
	}

	/**
	 * 当自定义元素第一次被连接到文档DOM时被调用
	 */
	connectedCallback() {
		function f(node) {
			let result = [];
			while (node) {
				node.tagName?.toLocaleLowerCase() === `${config.prefix}-submenu`
					? result.push(node)
					: '';

				if (
					node.parentNode?.tagName?.toLocaleLowerCase() ===
					`${config.prefix}-menu`
				)
					break;

				node = node.parentNode;
			}

			return result;
		}

		if ($(this).attr('active') === 'true') {
			let path = f(this.parentNode);

			path.forEach(item => (item.open = true));
		}
	}

	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
                :host {
                    display: flex;
                    align-items: center;
                    height: var(--height-md);
                    cursor: pointer;
                }
                
                :host([active=true]), 
                :host(:hover) {
                    color: var(--color-link);
                }
                
                :host(:hover) {
                    opacity: .7;
                }
                
                ::slotted([slot=icon]) {
                    margin-right: 10px;
                }
            </style>
            
            <slot name="icon"></slot>

            <slot></slot>
        `;
	}
}
