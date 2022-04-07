import {
	$,
	CreateHTMLElement,
	customElementsDefine,
	Touch,
	config,
} from '../../utils';
import './item';

/**
 * 微章组件
 */
@customElementsDefine
class CarouselComponent extends CreateHTMLElement {
	/**
	 * 监听属性
	 * @returns {string[]}      需要被监听的属性名
	 */
	static get observedAttributes() {
		return ['index', 'length'];
	}

	/**
	 * 当自定义元素的指定属性被增加、移除或更改时被调用
	 * @param name          属性名
	 * @param oldValue      更改前的属性值
	 * @param newValue      新的属性值
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue) {
			name === 'index' ? this.setActiveIndex(newValue) : '';
		}
	}

	/**
	 * 当自定义元素第一次被连接到文档DOM时被调用
	 */
	connectedCallback() {
		if (!($(this).attr('length') > 1)) {
			console.error(
				`<wc-carousel/>组件必需添加[length="number"]属性值，其值用来记录<wc-carousel-item/>元素长度和创建默认面板指示点外，还用来兼容某些特殊场景；例如：动态渲染数据等。`,
			);
		}

		this.activeIndex = Number($(this).attr('index')) || 0; // 默认激活索引

		this.threshold = $(this).attr('threshold') || 50; // 阀值
		this.isVertical = $(this).attr('vertical') === 'true'; // 是否垂直交互

		// 根据“isVertical”定义对应所需常用字段
		this.pageXOrY = this.isVertical ? 'pageY' : 'pageX';
		this.widthOrHeight = this.isVertical ? 'height' : 'width';
		this.leftOrTop = this.isVertical ? 'top' : 'left';

		this.carouselSliderElement = $(this.shadowRoot).find('.carousel-slider');

		this.setLoop();

		this.bindEvents();

		this.setActiveDot();

		this.autoPlay();

		setTimeout(() => {
			this.activeIndex > 0 ? this.setActiveIndex(this.activeIndex) : '';
		}, 500);

		if (!this.isLoop) return;

		setTimeout(() => {
			let pageValue = this.getActiveElementPosition(this.activeIndex);

			let touchend = {
				pageX: 0,
				pageY: 0,
			};

			touchend[this.pageXOrY] = pageValue;

			this.Touch.set({
				touchend,
			});

			$(this.carouselSliderElement).css(
				'transform',
				`translate3d(${touchend.pageX}px, ${touchend.pageY}px, 0)`,
				true,
			);

			this.loopTouchStart();
		}, 500);
	}

	/**
	 * 绑定事件
	 */
	bindEvents() {
		this.Touch = new Touch({
			el: this,
			onTouchStart() {
				clearInterval(this.autoPlayTimer);

				this.setLoop();

				$(this.carouselSliderElement).removeClass('transition');

				if (!this.isLoop) return;

				this.loopTouchStart();
			},
			onTouchMove(ev, data) {
				let pageValue = data.touchmove[this.pageXOrY];

				ev.preventDefault();
				ev.stopPropagation();

				$(this.carouselSliderElement).css(
					'transform',
					`translate3d(${this.isVertical ? 0 : pageValue}px, ${
						this.isVertical ? pageValue : 0
					}px, 0)`,
					true,
				);

				if (!this.isLoop) return;

				this.loopTouchMove(data.moveDistance[this.pageXOrY], pageValue);
			},
			onTouchEnd(ev, data) {
				let moveDistance = data.moveDistance[this.pageXOrY],
					newActiveIndex = this.activeIndex;

				if (!Math.abs(moveDistance)) return;

				if (Math.abs(moveDistance) > this.threshold) {
					moveDistance < 0 ? newActiveIndex++ : newActiveIndex--;
				}

				this.setActiveIndex(newActiveIndex);
			},
		});

		$(this.shadowRoot).on('click', ev => {
			let el = $(ev.target).parents('.carousel-dots-item');

			if (el.length) {
				ev.preventDefault();
				ev.stopPropagation();

				this.setActiveIndex($(el).attr('data-index'));
			}
		});

		$(this)
			.on('mouseover', () => clearInterval(this.autoPlayTimer))
			.on('mouseout', () => this.autoPlay());
	}

	/**
	 * 循环轮播触摸开始
	 */
	loopTouchStart() {
		this.getPosition();

		if (!this.activeIndex) {
			$(this.carouselItemsElement)
				.eq(-1)
				.css(this.leftOrTop, this.beforeFirstElementPosition);
		}

		if (this.activeIndex === this.carouselItemsElement.length - 1) {
			$(this.carouselItemsElement)
				.eq(0)
				.css(this.leftOrTop, this.afterLastElementPosition);
		}
	}

	/**
	 * 循环轮播触摸运动
	 * @param moveDistance      运动距离
	 * @param pageValue         运动值
	 */
	loopTouchMove(moveDistance, pageValue) {
		let isToRightOrBottom = moveDistance > this.threshold;
		let isToLeftOrTop = moveDistance < -this.threshold;
		let activeElementOffset = $(this.carouselItemsElement)
			.css(this.leftOrTop, 0)
			.eq(this.activeIndex)
			.offset();

		if (
			!this.activeIndex &&
			isToRightOrBottom &&
			this.carouselItemsElement.length > 3
		) {
			$(this.carouselItemsElement)
				.eq(-2)
				.css(this.leftOrTop, this.beforeFirstElementPosition);
		}

		if (
			(this.activeIndex === 1 && isToRightOrBottom) ||
			(!this.activeIndex &&
				activeElementOffset[this.leftOrTop] + this.marginValue < pageValue)
		) {
			$(this.carouselItemsElement)
				.eq(-1)
				.css(this.leftOrTop, this.beforeFirstElementPosition);
		}

		if (
			this.activeIndex === this.carouselItemsElement.length - 2 &&
			isToLeftOrTop
		) {
			$(this.carouselItemsElement)
				.eq(0)
				.css(this.leftOrTop, this.afterLastElementPosition);
		}

		if (
			this.activeIndex === this.carouselItemsElement.length - 1 &&
			isToLeftOrTop
		) {
			$(this.carouselItemsElement)
				.eq(1)
				.css(this.leftOrTop, this.afterLastElementPosition);
		}
	}

	/**
	 * 循环轮播触摸结束
	 * @param touchend          触摸结束数据变量
	 * @param newActiveIndex    新激活索引
	 */
	loopTouchEnd(touchend, newActiveIndex) {
		this.dispatch('beforeChange', {
			currentIndex: this.activeIndex,
			newIndex: newActiveIndex,
		});

		$(this).attr('index', newActiveIndex);

		this.setActiveDot(newActiveIndex);

		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.dispatch('change', {
				oldIndex: this.activeIndex,
				currentIndex: newActiveIndex,
			});

			this.autoPlay();

			this.activeIndex = newActiveIndex;

			if (!this.isLoop) {
				return this.Touch.set({
					touchend,
					lock: false,
				});
			}

			$(this.carouselItemsElement).css(this.leftOrTop, '0');

			this.activeIndex == -1
				? (this.activeIndex = this.carouselItemsElement.length - 1)
				: '';

			this.activeIndex == this.carouselItemsElement.length
				? (this.activeIndex = 0)
				: '';

			if (
				!this.activeIndex ||
				this.activeIndex == this.carouselItemsElement.length - 1
			) {
				touchend[this.pageXOrY] = this.getActiveElementPosition(
					this.activeIndex,
				);
			}

			if (!this.activeIndex) {
				$(this.carouselItemsElement)
					.eq(-1)
					.css(this.leftOrTop, this.beforeFirstElementPosition);
			}

			if (this.activeIndex == this.carouselItemsElement.length - 1) {
				$(this.carouselItemsElement)
					.eq(0)
					.css(this.leftOrTop, this.afterLastElementPosition);
			}

			$(this.carouselSliderElement)
				.removeClass('transition')
				.css(
					'transform',
					`translate3d(${touchend.pageX}px, ${touchend.pageY}px, 0)`,
					true,
				);

			this.Touch.set({
				touchend,
				lock: false,
			});
		}, 300);
	}

	/**
	 * 判断是否循环轮播
	 */
	setLoop() {
		this.carouselItemsElement = $(this).find(`${config.prefix}-carousel-item`);

		this.isLoop =
			$(this).attr('loop') === 'true' && this.carouselItemsElement.length > 1;

		this.marginValue =
			$(this.carouselItemsElement)
				.eq(0)
				.css(`margin-${this.isVertical ? 'bottom' : 'right'}`) || 0;
	}

	/**
	 * 设置轮播索引
	 */
	setActiveIndex(newActiveIndex) {
		if (this.Touch?.get()?.lock) return;

		let touchend = {
			pageX: 0,
			pageY: 0,
		};

		this.Touch?.set({
			lock: true,
		});

		if (!this.carouselItemsElement) {
			this.setLoop();
		}

		let carouselItemsLength = this.carouselItemsElement?.length - 1;

		// 循环轮播
		if (this.isLoop) {
			newActiveIndex %= carouselItemsLength + 1;

			let DOMHandler = this.getLoopDOMHandler(
				newActiveIndex,
				carouselItemsLength,
			);

			if (typeof DOMHandler?.index != 'undefined') {
				$(this.carouselItemsElement)
					.eq(DOMHandler.index)
					.css(this.leftOrTop, DOMHandler.position || '0');
			}

			// 非循环轮播
		} else {
			newActiveIndex < 0 ? (newActiveIndex = 0) : '';
			newActiveIndex >= carouselItemsLength
				? (newActiveIndex = carouselItemsLength)
				: '';
		}

		touchend[this.pageXOrY] = this.getActiveElementPosition(newActiveIndex);

		// 非循环轮播设置最大最小值
		if (!this.isLoop) {
			let lastElementOffset = $(this.carouselItemsElement).eq(-1).offset(),
				maxPageValue = -(
					lastElementOffset[this.leftOrTop] -
					$(this).offset()[this.widthOrHeight] +
					lastElementOffset[this.widthOrHeight]
				);

			// 最大值
			touchend[this.pageXOrY] <= maxPageValue && maxPageValue != 0
				? (touchend[this.pageXOrY] = maxPageValue)
				: '';

			// 最小值
			touchend[this.pageXOrY] > 0 ? (touchend[this.pageXOrY] = 0) : '';
		}

		$(this.carouselSliderElement)
			.addClass('transition')
			.css(
				'transform',
				`translate3d(${touchend.pageX}px, ${touchend.pageY}px, 0)`,
				true,
			);

		this.loopTouchEnd(touchend, newActiveIndex);
	}

	/**
	 * 设置激活小圆点
	 */
	setActiveDot(newActiveIndex) {
		$(this.shadowRoot)
			.find('.carousel-dots-item')
			.removeClass('active')
			.eq(
				typeof newActiveIndex == 'undefined'
					? this.activeIndex
					: newActiveIndex,
			)
			.addClass('active');
	}

	/**
	 * 获取循环dom操作数据
	 * @param newActiveIndex       下个激活索引
	 * @param carouselItemsLength   子项长度
	 */
	getLoopDOMHandler(newActiveIndex, carouselItemsLength) {
		let DOMHandler;

		// 当前第一张，切换到最后一张时，倒数第二张定位在最前面
		if (!this.activeIndex && newActiveIndex == carouselItemsLength) {
			DOMHandler = {
				index: -2,
				position: this.beforeFirstElementPosition,
			};
		}

		// 当前最后一张，切换到第一张时，第二张定位在最后面
		if (this.activeIndex == carouselItemsLength && !newActiveIndex) {
			DOMHandler = {
				index: 1,
				position: this.afterLastElementPosition,
			};
		}

		// 当前第三张，切换到第一张时，最后一张定位在最前面 || 切换到倒数第二张时，最后一张不定位
		if (
			(this.activeIndex == 2 && !newActiveIndex && carouselItemsLength > 3) ||
			(!newActiveIndex &&
				this.activeIndex > newActiveIndex &&
				this.activeIndex != carouselItemsLength)
		) {
			DOMHandler = {
				index: -1,
				position: this.beforeFirstElementPosition,
			};
		}

		// 切换到倒数第二张时，最后一张不定位
		if (newActiveIndex == carouselItemsLength - 1) {
			DOMHandler = {
				index: -1,
				position: 0,
			};
		}

		// 当前不是第一张，切换到第二张时，第一张不定位
		if (this.activeIndex && newActiveIndex == 1) {
			DOMHandler = {
				index: 0,
				position: 0,
			};
		}

		// 当前不是第一张，切换到最后一张时，第一张定位在最后面
		if (this.activeIndex && newActiveIndex == carouselItemsLength) {
			DOMHandler = {
				index: 0,
				position: this.afterLastElementPosition,
			};
		}

		return DOMHandler;
	}

	/**
	 * 获取元素定位位置
	 */
	getPosition() {
		let lastElementOffset = $(this.carouselItemsElement).eq(-1).offset(),
			afterLastElementPosition =
				lastElementOffset[this.widthOrHeight] +
				lastElementOffset[this.leftOrTop] +
				this.marginValue,
			beforeFirstElementPosition =
				-(
					lastElementOffset[this.widthOrHeight] +
					lastElementOffset[this.leftOrTop]
				) - this.marginValue;

		this.afterLastElementPosition =
			afterLastElementPosition || this.afterLastElementPosition;

		this.beforeFirstElementPosition =
			beforeFirstElementPosition || this.beforeFirstElementPosition;
	}

	/**
	 * 获取激活元素居中位置
	 * @param activeIndex       激活索引
	 * @return                  返回计算后的位置距离
	 */
	getActiveElementPosition(activeIndex) {
		let activeElementOffset = $(this.carouselItemsElement)
			.eq(activeIndex)
			.offset();

		if (
			$(this).offset()[this.widthOrHeight] -
				activeElementOffset[this.widthOrHeight] ===
			1
		) {
			activeElementOffset[this.widthOrHeight] =
				$(this).offset()[this.widthOrHeight];
		}

		return (
			-activeElementOffset[this.leftOrTop] +
			($(this).offset()[this.widthOrHeight] -
				activeElementOffset[this.widthOrHeight]) /
				2
		);
	}

	/**
	 * 自动轮播
	 */
	autoPlay() {
		let isAutoPlay = $(this).attr('autoplay') === 'true';

		if (!(this.isLoop && isAutoPlay) || !isAutoPlay) return;

		clearInterval(this.autoPlayTimer);

		this.autoPlayTimer = setInterval(() => {
			let newActiveIndex = this.activeIndex + 1;

			newActiveIndex %= this.carouselItemsElement.length;

			$(this).attr('index', newActiveIndex);
		}, $(this).attr('interval') || 5000);
	}

	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
                :host {
                    position: relative;
                }
                
                ::slotted(${config.prefix}-carousel-item) {
                    margin-${this.isVertical ? 'bottom' : 'right'}: ${
			$(this).attr('margin') || 0
		}px !important;
                }
                
                :host([vertical=true]) .carousel-slider {
                    display: block;
                    width: 100%;
                }
                
                .carousel-slider {
                    display: flex;
                    min-width: 100%;
                }
                
                .carousel-slider.transition {
                    transition: 300ms;
                }
                
                .carousel-dots-box {
                    position: absolute;
                    right: 0;
                    bottom: 20px;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                
                .carousel-dots-box div {
                    display: flex;
                }
                
                :host([vertical=true]) .carousel-dots-box {
                    top: 0;
                    right: 20px;
                    left: auto;
                    width: 3px;
                    height: 100%;
                    flex-wrap: wrap;
                }
                
                :host([vertical=true]) .carousel-dots-box div {
                    display: block;
                }
                
                .carousel-dots-box .carousel-dots-item {
                    display: block;
                    width: 16px;
                    height: 3px;
                    cursor: pointer;
                    background: white;
                    margin: 0 5px;
                    opacity: .3;
                    transition: 300ms;
                }
                
                :host([vertical=true]) .carousel-dots-box .carousel-dots-item {
                    width: 3px;
                    height: 16px;
                    margin: 10px 0;
                }
                
                .carousel-dots-box .carousel-dots-item.active {
                    width: 22px;
                    opacity: 1;
                }
                
                :host([vertical=true]) .carousel-dots-box .carousel-dots-item.active {
                    height: 22px;
                }
            </style>
                
            <div class="carousel-slider">
                <slot></slot>
            </div>
                
            ${
							$(this).attr('dots') !== 'false'
								? `
                        <div class="carousel-dots-box">
                            <div>${this.createDots()}</div>
                        </div>
                    `
								: ``
						}
        `;
	}

	createDots() {
		let span = ``;

		for (let i = 0; i < $(this).attr('length'); i++) {
			span += `<span class="carousel-dots-item ${
				this.activeIndex == i ? 'active' : ''
			}" data-index="${i}"></span>`;
		}

		return span;
	}
}
