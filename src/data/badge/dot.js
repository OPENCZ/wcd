import {
	$,
	pxToVw,
	CreateHTMLElement,
	customElementsDefine,
} from '../../utils';

/**
 * 微章组件
 */
@customElementsDefine
class BadgeDotComponent extends CreateHTMLElement {
	/**
	 * 监听属性
	 * @returns {string[]}      需要被监听的属性名
	 */
	static get observedAttributes() {
		return ['size', 'color'];
	}

	/**
	 * 当自定义元素的指定属性被增加、移除或更改时被调用
	 * @param name          属性名
	 * @param oldValue      更改前的属性值
	 * @param newValue      新的属性值
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) return;

		let svg = $(this.shadowRoot).find('svg');
		console.log(svg);
		// 修改颜色
		if (name === 'color') {
			console.log(newValue);
			$(svg).attr('fill', newValue);
		}

		// 修改尺寸
		if (name === 'size') {
			$(svg).css({
				width: pxToVw(newValue),
				height: pxToVw(newValue),
			});
		}
	}

	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		let size = $(this).attr('size');
		!size || size < 0 ? (size = 32) : '';

		return `
            <style>
                svg {
                    display: block;
                    width: ${pxToVw(size)};
                    height: ${pxToVw(size)};
                    fill: ${$(this).attr('color') || `var(--color-badge)`};
                }
            </style>
            
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 298.666667c117.333333 0 213.333333 96 213.333333 213.333333s-96 213.333333-213.333333 213.333333-213.333333-96-213.333333-213.333333S394.666667 298.666667 512 298.666667z"></path>
            </svg>
        `;
	}
}
