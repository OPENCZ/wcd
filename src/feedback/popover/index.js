import {
	$,
	config,
	CreateHTMLElement,
	customElementsDefine,
	pxToVw,
} from '../../utils';

/**
 * 抽屉
 * @docs    请查阅README.md文档
 */
@customElementsDefine
class PopoverComponent extends CreateHTMLElement {
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
		if (oldValue === newValue) return;

		newValue === 'true' ? this.show() : this.hide();
	}

	/**
	 * 当自定义元素第一次被连接到文档DOM时被调用
	 */
	connectedCallback() {
		this.bindEvent();
	}

	/**
	 * 显示
	 */
	show() {
		if ($(this).attr('disabled') === 'true') return;

		this.visible = true;

		let wrapper = $(this.shadowRoot)
			.find(`.popover-wrapper`)
			.removeClass('hide')
			.addClass('visible');

		setTimeout(() => {
			$(wrapper).addClass('show');
		}, 50);
	}

	/**
	 * 隐藏
	 * @param cb    隐藏后回调
	 */
	hide(cb) {
		this.visible = false;

		let wrapper = $(this.shadowRoot).find(`.popover-wrapper`).addClass('hide');

		setTimeout(() => {
			$(wrapper).removeClass('visible', 'hide', 'show');
		}, 300);
	}

	/**
	 * 触发事件绑定
	 */
	bindEvent() {
		switch ($(this).attr('trigger')) {
			case 'focus':
				this.triggerFocus();
				break;
			case 'hover':
				this.triggerMouse();
				break;
			default:
				$(this).attr('trigger', 'click');
				this.triggerClick();
		}
	}

	/**
	 * 当点击时
	 */
	triggerClick() {
		$(this)
			.find('[slot=placeholder]', false)
			.on('click', ev => {
				ev.stopPropagation();
				this.visible ? this.hide() : this.show();
			});
	}

	/**
	 * 当元素聚焦时
	 */
	triggerFocus() {
		$(this)
			.find(`[slot="placeholder"]`)
			.on('focus', ev => {
				ev.stopPropagation();
				this.show();
			})
			.on('blur', () => this.hide());
	}

	/**
	 * 当鼠标移入时
	 */
	triggerMouse() {
		let self = this;

		let checkFather = ev => {
			let parent = ev.relatedTarget;

			while (parent && parent != this) {
				parent = parent.parentNode;
			}

			return parent == this;
		};

		$(this)
			.on('mouseover', ev => {
				if (checkFather(ev)) return;

				self.show();
			})
			.on('mouseout', ev => {
				if (checkFather(ev)) return;

				self.hide();
			});
	}

	/**
	 * 派发事件
	 * @param type      事件类型
	 */
	dispatch(type) {
		this.dispatchEvent(
			new CustomEvent(type, {
				detail: {
					visible: $(this).attr('visible') === 'true',
				},
			}),
		);
	}

	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            ${this.createStyle()}
            
            <slot name="placeholder"></slot>

            <div class="popover-wrapper">
                <div class="popover-box">
                    <slot name="content"></slot>
                </div>
                
                <svg class="triangle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M0 1023.90899996l512.029-511.913L1024 1023.90899996 0 1023.90899996z"></path></svg>
            </div>
        `;
	}

	createStyle() {
		let color = $(this).attr('color') || 'white',
			triangleOffset = 32,
			triangleSize = 24;

		return `
            <style>
                :host {
                	display: inline-flex;
                    position: relative;
                }
                
                :host .popover-wrapper {
					top: 100%;
					left: 0;
                }
                
                /* 顶部居左、顶部居中、顶部居右对齐 */
                :host([placement=topLeft]) .popover-wrapper, 
                :host([placement=top]) .popover-wrapper, 
                :host([placement=topRight]) .popover-wrapper {
                    top: auto;
                    bottom: 100%;
                }
                
                :host([placement=topLeft][triangle=true]) .popover-wrapper,
                :host([placement=top][triangle=true]) .popover-wrapper, 
                :host([placement=topRight][triangle=true]) .popover-wrapper {
                    padding: ${pxToVw(0, 0, triangleSize)};
                }
                
                /* 顶部居左、顶部居中、顶部居右对齐时，三角形图标居底定位 */
                :host([placement=topLeft]) .popover-wrapper .triangle, 
                :host([placement=top]) .popover-wrapper .triangle, 
                :host([placement=topRight]) .popover-wrapper .triangle {
                    top: auto;
                    bottom: 0;
                    transform: rotate(180deg);
                }
                
                /* 顶部居中、底部居中对齐 */
                :host([placement=top]) .popover-wrapper, 
                :host([placement=bottom]) .popover-wrapper {
                    left: 50%;
                    transform: translateX(-50%);
                }
                
                /* 顶部居中、底部居中对齐时，三角形图标居中定位 */
                :host([placement=top]) .popover-wrapper .triangle, 
                :host([placement=bottom]) .popover-wrapper .triangle {
                    left: 50%;
                    margin-left: -4px;
                }
                
                /* 顶部居左、顶部居右对齐 */
                :host([placement=topRight]) .popover-wrapper, 
                :host([placement=bottomRight]) .popover-wrapper {
                    right: 0;
                    left: auto;
                }
                
                /* 顶部居左、顶部居右对齐时，三角形图标居右定位 */
                :host([placement=topRight]) .popover-wrapper .triangle, 
                :host([placement=bottomRight]) .popover-wrapper .triangle {
                    left: auto;
                    right: ${pxToVw(triangleOffset)};
                }
                
                /* 左边居上、左边居中、左边居下对齐 */
                :host([placement=leftTop]) .popover-wrapper, 
                :host([placement=left]) .popover-wrapper, 
                :host([placement=leftBottom]) .popover-wrapper {
                    right: 100%;
                    left: auto;
                }
                
                :host([placement=leftTop][triangle=true]) .popover-wrapper, 
                :host([placement=left][triangle=true]) .popover-wrapper,
                :host([placement=leftBottom][triangle=true]) .popover-wrapper {
                    padding: ${pxToVw(0, triangleSize, 0, 0)};
                }
                
                /* 左边居上、左边居中、左边居下对齐时，三角图标显示居顶定位 */
                :host([placement=leftTop]) .popover-wrapper .triangle, 
                :host([placement=left]) .popover-wrapper .triangle, 
                :host([placement=leftBottom]) .popover-wrapper .triangle {
                    right: 0;
                    left: auto;
                    transform: rotate(90deg);
                }
                
                /* 左边居上、右边居上对齐 */
                :host([placement=leftTop]) .popover-wrapper, 
                :host([placement=rightTop]) .popover-wrapper {
                    top: 0; 
                }
               
                /* 左边居上、右边居上对齐时，三角形图标居顶定位 */
                :host([placement=leftTop]) .popover-wrapper .triangle, 
                :host([placement=rightTop]) .popover-wrapper .triangle {
                    top: auto;
                    bottom: ${pxToVw(triangleOffset)};
                }
                
                /* 左边居中、右边居中对齐 */
                :host([placement=left]) .popover-wrapper, 
                :host([placement=right]) .popover-wrapper {
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                /* 左边居中、右边居中时，三角形图标居中定位 */
                :host([placement=left]) .popover-wrapper .triangle, 
                :host([placement=right]) .popover-wrapper .triangle {
                    top: 50%;
                    margin-top: ${pxToVw(-triangleSize / 2)};
                }
                
                /* 左边居底、右边居底对齐 */
                :host([placement=leftBottom]) .popover-wrapper, 
                :host([placement=rightBottom]) .popover-wrapper {
                    top: auto;
                    bottom: 0;
                }
                
                /* 右边居上、右边居中、右边居下对齐 */
                :host([placement=rightTop]) .popover-wrapper, 
                :host([placement=right]) .popover-wrapper, 
                :host([placement=rightBottom]) .popover-wrapper {
                    left: 100%;
                }
                
                :host([placement=rightTop][triangle=true]) .popover-wrapper, 
                :host([placement=right][triangle=true]) .popover-wrapper, 
                :host([placement=rightBottom][triangle=true]) .popover-wrapper {
                    padding: ${pxToVw(0, 0, 0, triangleSize)};
                }
                
                /* 右边居上、右边居中、右边居下对齐时，三角形图标居左定位 */
                :host([placement=rightTop]) .popover-wrapper .triangle, 
                :host([placement=right]) .popover-wrapper .triangle, 
                :host([placement=rightBottom]) .popover-wrapper .triangle {
                    left:0;
                    transform: rotate(-90deg);
                }
               
                /* 左边居下、右边居下对齐时，三角形图标居底定位 */
                :host([placement=leftBottom]) .popover-wrapper .triangle, 
                :host([placement=rightBottom]) .popover-wrapper .triangle {
                    top: ${pxToVw(triangleOffset)};
                    bottom: auto;
                }
                
                .popover-wrapper {
                    display: none;
                    position: absolute;
                    top: 100%;
                    z-index: 10;
                    min-width: 100%;
                    opacity: 0;   
                    transition: .3s opacity;
                }
                
                :host([triangle=true]) .popover-wrapper {
                    padding: ${pxToVw(triangleSize, 0, 0)};
                }
                
                .popover-wrapper.visible {
                    display: block;
                }
                
                .popover-wrapper.show {
                    opacity: 1;
                }
                
                .popover-wrapper.hide {
                    opacity: 0;
                }
                
                .popover-wrapper ::slotted([slot=content]) {
                    display: block !important;
                }
                
                .popover-wrapper .triangle {
                    position: absolute;
                    top: 0;
                    left: ${pxToVw(triangleOffset)};
                    display: none;
                    width: ${pxToVw(triangleSize)};
                    height: ${pxToVw(triangleSize)};
                    fill: ${color};
                }
                
                :host([triangle=true]) .popover-wrapper .triangle {
                    display: block;
                }
                
                .popover-box {
                    min-width: ${pxToVw(60)};
                    min-height: ${pxToVw(64)};
                    border-radius: ${pxToVw(
											$(this).attr('border-radius') || 0,
										)};
                    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05);
                    background: ${color};
                }
            </style>
        `;
	}
}

try {
	window.onload = function () {
		$(document).on('click', ev => {
			let popoverTagName = `${config.prefix}-popover`;
			let popover = $(ev.target).parents(popoverTagName).get(0);

			$(`${popoverTagName}[visible=true][trigger=click]`).each(function () {
				let trigger = $(this).attr('trigger');

				if (!popover.length || (popover && popover != this)) {
					this.visible = false;
				}
			});
		});
	};
} catch (e) {}
