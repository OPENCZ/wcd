import {
	$,
	CreateHTMLElement,
	customElementsDefine,
	config,
} from '../../utils';

/**
 * 网格->列组件
 */
@customElementsDefine
class ColComponent extends CreateHTMLElement {
	/**
	 * 监听属性
	 * @returns {string[]}      需要被监听的属性名
	 */
	static get observedAttributes() {
		return ['span', 'offset', 'align', 'justify'];
	}

	/**
	 * 当自定义元素的指定属性被增加、移除或更改时被调用
	 * @param name          属性名
	 * @param oldValue      更改前的属性值
	 * @param newValue      新的属性值
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue) {
			console.log(name);
			let style = $(this.shadowRoot).find('style');

			switch (name) {
				case 'span':
					$(style).eq(1).html(this.setSpanStyle());
					break;
				case 'offset':
					$(style).eq(2).html(this.setOffsetStyle());
					break;
				case 'justify':
					$(style).eq(3).html(this.setJustifyStyle());
					break;
				case 'align':
					$(style).eq(4).html(this.setAlignStyle());
					break;
			}
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
                    display: none;
                }
            </style>
            
            <style>
                ${this.setSpanStyle()}
            </style>
            
            <style>
                ${this.setOffsetStyle()}
            </style>
            
            <style>
                ${this.setJustifyStyle()}
            </style>
            
            <style>
                ${this.setAlignStyle()}
            </style>
            
            <slot></slot>
        `;
	}

	/**
	 * 通过字符串截取操作对象
	 * @desc 不用eval转换对象是防止xss注入；不用JSON.parse转换对象是有格式要求
	 */
	getStringJSON(str) {
		let res = {};

		str
			.replace(/\{|\}/g, '')
			.split(',')
			.forEach(item => {
				let arr = item.trim().split(':');
				typeof config.grid[arr[0]] != 'undefined' ? (res[arr[0]] = arr[1]) : '';
			});

		return res;
	}

	/**
	 * 设置列宽度
	 */
	setSpanStyle() {
		let span = $(this).attr('span'),
			spanObject = null;

		if (span?.startsWith('{') && span?.endsWith('}')) {
			spanObject = this.getStringJSON(span);
		} else {
			spanObject = {
				xs: span,
			};
		}

		let result = ``;

		Object.keys(config.grid).forEach(key => {
			if (key === 'col') return;

			let span = spanObject[key];

			if (typeof spanObject[key] != 'undefined') {
				span > config.grid.col ? (span = config.grid.col) : '';

				let style = span?.includes('flex')
					? `flex: 1;`
					: !isNaN(parseInt(span))
					? `width: ${(parseInt(span) / config.grid.col) * 100}%;`
					: ``;

				let setWidth = () => `
                    :host {
                        display: ${span == 0 ? 'none' : 'block'};
                        ${style}
                    }
                `;

				let setMediaStyle = () => `
                    @media only screen and (min-width: ${
											config.grid[key] - 1
										}px) {
                        :host {
                            display: none;
                        }
                    }
                    @media only screen and (min-width: ${config.grid[key]}px) {
                        ${setWidth()}
                    }
                `;

				result += key === 'xs' ? setWidth() : setMediaStyle();
			}
		});

		return result;
	}

	/**
	 * 设置列位移
	 */
	setOffsetStyle() {
		let offset = $(this).attr('offset'),
			offsetObject = null;

		if (offset?.startsWith('{') && offset?.endsWith('}')) {
			offsetObject = this.getStringJSON(offset);
		}

		if (parseInt(offset) > 0) {
			offsetObject = {
				xs: parseInt(offset),
			};
		}

		let style = ``;

		for (let item in offsetObject) {
			let offset = offsetObject[item];
			offset > config.grid.col ? (offset = config.grid.col) : '';

			style += `
                @media only screen and (min-width: ${config.grid[item]}px) {
                    :host {
                        margin-left: ${(offset / config.grid.col) * 100}%;
                    }
                }
            `;
		}

		return style;
	}

	/**
	 * 设置横向对齐样式
	 */
	setJustifyStyle() {
		let justifyValue = $(this).attr('justify');
		if (!justifyValue) return ``;

		let styleValue = `${
			justifyValue === 'start' || justifyValue === 'end' ? 'flex-' : ''
		}${justifyValue}`;

		return `
            :host([justify=${justifyValue}]) {
                display: flex;
                flex-wrap: wrap;
                justify-content: ${styleValue};
            }
        `;
	}

	/**
	 * 设置垂直对齐样式
	 */
	setAlignStyle() {
		let alignValue = $(this).attr('align');
		if (!alignValue) return ``;

		let styleName = alignValue.includes('space')
			? 'align-content'
			: 'align-items';
		let styleValue = `${
			alignValue === 'start' || alignValue === 'end' ? 'flex-' : ''
		}${alignValue}`;

		return `
            :host([align=${alignValue}]) {
                display: flex;
                flex-wrap: wrap;
                ${styleName}: ${styleValue};
            }
            
            ${
							alignValue.includes('space')
								? `
                        :host([align=${alignValue}]) ::slotted(*) {
                            width: 100% !important;
                        }
                    `
								: ``
						}
        `;
	}
}
