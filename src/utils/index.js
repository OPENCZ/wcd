export let config = {
    isPXToVW: false,
    designWidth: 750,
    prefix: 'wc',
};

// 自定义组件前缀
export const CUSTOM_COMPONENT_PREFIX = 'wc';

export function setConfig(newConfig) {
    config = {
        ...config,
        ...newConfig,
    };
}

/**
 * 创建自定义元素
 */
export function createCustomElement(constructor) {
    let name = constructor.name.replace(/Component/, '').toLocaleLowerCase();

    name = `${config.prefix || 'wc'}-${name}`;

    !customElements.get(name) ? customElements.define(name, constructor) : '';
}

/**
 * 创建html元素
 */
export class CreateHTMLElement extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.innerHTML = this.render();
    }

    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
            this.dispatch('change');
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.dispatch('connect');
    }

    /**
     * 当自定义元素与文档DOM断开连接时被调用（关闭当前窗口不会被调用）
     */
    disconnectedCallback() {
        this.dispatch('disconnect');
    }

    /**
     * 当自定义元素被移动到新文档时被调用
     */
    adoptedCallback() {
        this.dispatch('adopt');
    }

    /**
     * 派发事件
     * @param type      事件类型
     * @param detail    数据详情
     */
    dispatch(type, detail = {}) {
        if (!type) return;

        this.dispatchEvent(
            new CustomEvent(type, {
                detail,
            }),
        );
    }

    render() {
        return `<slot></slot>`;
    }
}

/**
 * px转换vw
 * @returns {string}    处理后的样式值
 */
/* eslint-disable */
export function pxToVw(...args) {
    const designWidth = (config.designWidth || 750) / 100;
    let res = '';

    for (let i = 0; i < arguments.length; i++) {
        let item = arguments[i];
        let newItem = parseFloat(item);

        if (isNaN(newItem)) {
            res += item;
        } else if (config.isPXToVW) {
            res += `${(newItem / designWidth).toFixed(2)}vw`;
        } else {
            res += `${Math.round(newItem / 2)}px`;
        }

        res += ' ';
    }

    return res.trim();
}
/* eslint-enable */

/**
 * 工具类
 */
class $$ {
    constructor(options) {
        if (!options) return;

        this.options = options;

        let selector = [];

        if (typeof options === 'object') {
            // DOM
            if (options?.nodeType) {
                selector = [options];
            }

            // $对象
            if (options?.selector?.length && options?.selector[0]?.nodeType) {
                selector = [...options.selector];

                // DOM数组
            } else if (options?.length && options[0]?.nodeType) {
                selector = [...options];
            }
        }

        if (typeof options === 'string') {
            selector = [...document.querySelectorAll(options)];
        }

        this.selector = selector || [];
        this.length = this.selector.length;
    }

    /**
     * 事件绑定
     * @param type          事件类型
     * @param handler       事件处理把柄
     */
    on(type, handler) {
        typeof type === 'string' ? (type = type?.replace(/\s/g, '').split(',')) : '';

        this.each(type, item => this.addEvent(item, handler));

        return this;
    }

    /**
     * 添加事件
     * @param type          事件类型
     * @param handler       事件处理把柄
     */
    addEvent(type, handler) {
        this.each(node => {
            if (type === 'click' && 'ontouchstart' in document.documentElement) {
                node.addEventListener('touchstart', function () {
                    this.CLICKTOTOUCH = false;
                });

                node.addEventListener('touchmove', function () {
                    this.CLICKTOTOUCH = true;
                });

                node.addEventListener('touchend', function (ev) {
                    !this.CLICKTOTOUCH ? handler(ev) : '';
                });
            } else {
                node.addEventListener(type, function (ev) {
                    handler.call(this, ev);
                });
            }
        });

        return this;
    }

    /**
     * 查找子元素
     * @param selector      子元素选择器
     * @param isAll         是否查找所有子元素;默认true
     */
    find(selector, isAll = true) {
        if (!selector || !selector.length) return this;

        let array = selector.split(','),
            result = [];

        this.each(node => {
            this.each(array, item => {
                item = item.trim();

                if (item) {
                    let nodes;

                    if (isAll) {
                        nodes = node.querySelectorAll(item);
                    } else {
                        nodes = node.querySelector(item);
                        nodes = nodes ? [nodes] : [];
                    }

                    result.push(...nodes);
                }
            });
        });

        this.selector = result;
        this.length = result.length;

        return this;
    }

    /**
     * 获取DOM数组
     * @param i             DOM数组指定下标
     * @returns {*[]|*}     返回DOM数组或单个DOM
     */
    get(i) {
        if (typeof i !== 'undefined') {
            i %= this.selector.length;

            if (i < 0) {
                i = this.selector.length + i;
            }

            return this.selector[i];
        } else {
            return this.selector;
        }
    }

    /**
     * 指定选择器索引
     * @param i             DOM数组指定下标
     * @returns {*[]|*}     返回DOM数组或单个DOM
     */
    eq(i) {
        if (typeof i !== 'undefined') {
            i %= this.selector.length;

            if (i < 0) {
                i = this.selector.length + i;
            }

            this.selector = [this.selector[i]];
        }

        return this;
    }

    /**
     * 获取父节点
     */
    parent() {
        this.selector = this.each(node => node.parentNode, true);
        this.length = this.selector.length;

        return this;
    }

    /**
     * 获取多层父节点
     * @param selector          选择器
     * @param restOfSelector    其他选择器
     */
    /* eslint-disable */
    parents(selector, ...restOfSelector) {
        let result = [];

        arguments.forEach(arg => {
            this.each(node => {
                for (let i = 0; i < node.path.length; i++) {
                    let item = node.path[i];
                    if (item.nodeType >= 9) {
                        break;
                    }

                    if (
                        item.classList?.contains(arg) ||
                        `#${item.id}` === arg ||
                        item.tagName.toLocaleLowerCase() === arg
                    ) {
                        result.push(item);
                        break;
                    }
                }
            });
        });

        this.selector = result;
        this.length = result.length;
        return this;
    }
    /* eslint-enable */

    /**
     * 克隆节点
     * @param deep  是否深拷贝
     */
    clone(deep = true) {
        return this.each(node => node.cloneNode(deep));
    }

    /**
     * 获取索引值
     */
    index() {
        return this.each(item => {
            return Array.from(item.parentNode.children).indexOf(item);
        });
    }

    /**
     * 设置或获取样式
     * @param styleName     样式名，当只有该参数时，将返回该样式值
     * @param styleValue    样式值
     */
    css(styleName, styleValue = undefined) {
        if (typeof styleName === 'string' && typeof styleValue === 'undefined') {
            return this.getStyle(styleName);
        }

        let propsName = ['width', 'height', 'font-size', 'padding', 'margin', 'top', 'right', 'bottom', 'left'];

        let setStyle = (node, name, value) => {
            node.style[name] = propsName.includes(name) && typeof value == 'number' ? `${value}px` : value;
        };

        this.each(node => {
            if (!node) return;

            if (styleName.constructor.name == 'Object') {
                this.each(styleName, (key, val) => setStyle(node, key, val));
            } else if (styleName && styleValue) {
                setStyle(node, styleName, styleValue);
            }
        });

        return this;
    }

    /**
     * 获取样式
     * @param styleName     样式名
     */
    getStyle(styleName) {
        let result = this.each(item => {
            item.nodeType === 3 ? (item = item.parentNode) : '';

            let styleValue =
                typeof item.currentStyle !== 'undefined'
                    ? item.currentStyle[styleName]
                    : getComputedStyle(item, null)[styleName];

            return styleValue.indexOf('px') > -1 ? parseFloat(styleValue) : styleValue;
        });

        return result.length === 1 ? result[0] : result;
    }

    /**
     * 获取元素offset value
     */
    offset() {
        let result = this.each(item => {
            return {
                top: item.offsetTop,
                left: item.offsetLeft,
                width: item.offsetWidth,
                height: item.offsetHeight,
            };
        });

        return result.length === 1 ? result[0] : result;
    }

    /**
     * 添加DOM指定ClassName
     */
    /* eslint-disable */
    addClass(className, ...restOfClassName) {
        this.classHandler('add', arguments);
        return this;
    }

    /**
     * 判断DOM是否有指定ClassName
     * @return {boolean}    返回true为在当前DOM含有指定ClassName;反之为false
     */
    hasClass(className) {
        return this.classHandler('contains', arguments);
    }

    /**
     * 删除DOM指定ClassName
     */
    removeClass(className, ...restOfClassName) {
        this.classHandler('remove', arguments);
        return this;
    }

    /**
     * DOM添加或删除ClassName
     */
    toggleClass(className) {
        this.classHandler('toggle', arguments);
        return this;
    }
    /* eslint-enable */

    /**
     * 类名操作
     * @param key       操作类型
     * @param value     操作值
     * @return {$}
     */
    classHandler(key, value) {
        value = Array.from(value);

        let isContains = key === 'contains',
            result = isContains ? false : this;

        if (!value.length) return result;

        this.each(node => {
            if (!node || node.nodeType !== 1) return;

            let result2;

            if (isContains || key === 'toggle') {
                result2 = value.map(v => node.classList[key](v)).includes(true);
            } else {
                result2 = node.classList[key](...value);
            }

            if (isContains && result2) {
                result = true;
                return false;
            }
        });

        return result;
    }

    /**
     * DOM属性操作
     * @param attrName              将要操作的属性名
     * @param attrValue             将要赋值的属性值
     * @return {undefined|*|[]|$}  attrValue参数不存在时,返回attrName属性值
     */
    attr(attrName, attrValue) {
        if (typeof attrValue === 'undefined') {
            let result = [];

            this.each(node => result.push(node.getAttribute(attrName)));

            return !result.length ? undefined : result.length === 1 ? result[0] : result;
        } else {
            this.each(node => node.setAttribute(attrName, attrValue));
            return this;
        }
    }

    /**
     * 删除DOM指定属性名
     * @param attrName      将要操作的属性名
     */
    removeAttr(attrName) {
        typeof attrName === 'string' ? (attrName = attrName?.replace(/\s/g, '').split(',')) : '';

        this.each(node => {
            this.each(attrName, item => node.removeAttribute(item));
        });

        return this;
    }

    /**
     * DOM值操作
     * @param value              将要赋值的属性值
     * @return {undefined|*|[]|$}  attrValue参数不存在时,返回attrName属性值
     */
    val(value) {
        if (typeof value === 'undefined') {
            let result = this.each(node => {
                return node.value;
            });

            return !result.length ? undefined : result.length === 1 ? result[0] : result;
        } else {
            this.each(node => (node.value = value));
            return this;
        }
    }

    /**
     * DOM内联html操作
     * @param html          将要填充的html字符串
     * @return {*|[]|$}    html参数不存在时,将返回内联html参数字符串
     */
    html(html) {
        return this.htmlOrTextHandler('innerHTML', html);
    }

    /**
     * DOM内联text操作
     * @param text          将要填充的text字符串
     * @return {*|[]|$}    text参数不存在时,将返回内联text参数字符串
     */
    text(text) {
        return this.htmlOrTextHandler('innerText', text);
    }

    /**
     * DOM html或text操作
     * @param key                   操作对象名
     * @param value                 操作对象值
     * @return {undefined|*|[]|$}  设置值或获取值
     */
    htmlOrTextHandler(key, value) {
        if (typeof value === 'undefined') {
            let result = [];

            this.each(node => {
                let getValue = node[key];
                getValue !== null ? result.push(getValue) : '';
            });

            return !result.length ? undefined : result.length === 1 ? result[0] : result;
        } else {
            this.each(node => (node[key] = value));
            return this;
        }
    }

    /**
     * 删除DOM操作
     */
    remove() {
        this.each(node => {
            node && node.parentNode ? node.parentNode.removeChild(node) : '';
        });

        return this;
    }

    /**
     * 循环操作
     * @param data                  循环数据或回调
     * @param callback              循环后回调
     * @return {[]}                 返回循环数据值
     */
    each(data, callback = () => {}) {
        if (typeof data === 'function') {
            callback = data;
            data = this.selector;
        }

        if (!data || !callback) return this;

        let result = [];

        function handler(self, item, index) {
            let currentResult = callback?.call(data[item], item, index);

            if (currentResult === false || !data) return 'break';

            typeof currentResult !== 'undefined' ? result.push(currentResult) : '';
        }

        let type = data.constructor.name.toLocaleLowerCase();
        if (type === 'object') {
            for (let item in data) {
                let isBreak = handler(data[item], item, data[item]);
                if (isBreak) break;
            }
        }

        if (type === 'array') {
            for (let i = 0, len = data.length; i < len; i++) {
                let isBreak = handler(data[i], data[i], i);
                if (isBreak) break;
            }
        }

        return result;
    }
}

/**
 * 二次封装工具类
 */
export function $(options) {
    return new $$(options);
}

/**
 * 加载图标svg
 */
export const loadingIconSvg = `
    <svg class="icon-loading" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M511.882596 287.998081h-0.361244a31.998984 31.998984 0 0 1-31.659415-31.977309v-0.361244c0-0.104761 0.115598-11.722364 0.115598-63.658399V96.000564a31.998984 31.998984 0 1 1 64.001581 0V192.001129c0 52.586273-0.111986 63.88237-0.119211 64.337537a32.002596 32.002596 0 0 1-31.977309 31.659415zM511.998194 959.99842a31.998984 31.998984 0 0 1-31.998984-31.998984v-96.379871c0-51.610915-0.111986-63.174332-0.115598-63.286318s0-0.242033 0-0.361243a31.998984 31.998984 0 0 1 63.997968-0.314283c0 0.455167 0.11921 11.711527 0.11921 64.034093v96.307622a31.998984 31.998984 0 0 1-32.002596 31.998984zM330.899406 363.021212a31.897836 31.897836 0 0 1-22.866739-9.612699c-0.075861-0.075861-8.207461-8.370021-44.931515-45.094076L195.198137 240.429485a31.998984 31.998984 0 0 1 45.256635-45.253022L308.336112 263.057803c37.182834 37.182834 45.090463 45.253022 45.41197 45.578141A31.998984 31.998984 0 0 1 330.899406 363.021212zM806.137421 838.11473a31.901448 31.901448 0 0 1-22.628318-9.374279L715.624151 760.859111c-36.724054-36.724054-45.018214-44.859267-45.097687-44.93874a31.998984 31.998984 0 0 1 44.77618-45.729864c0.32512 0.317895 8.395308 8.229136 45.578142 45.411969l67.88134 67.88134a31.998984 31.998984 0 0 1-22.624705 54.630914zM224.000113 838.11473a31.901448 31.901448 0 0 0 22.628317-9.374279l67.88134-67.88134c36.724054-36.724054 45.021826-44.859267 45.097688-44.93874a31.998984 31.998984 0 0 0-44.776181-45.729864c-0.32512 0.317895-8.395308 8.229136-45.578142 45.411969l-67.88134 67.884953a31.998984 31.998984 0 0 0 22.628318 54.627301zM255.948523 544.058589h-0.361244c-0.104761 0-11.722364-0.115598-63.658399-0.115598H95.942765a31.998984 31.998984 0 1 1 0-64.00158h95.996952c52.586273 0 63.88237 0.111986 64.337538 0.11921a31.998984 31.998984 0 0 1 31.659414 31.97731v0.361244a32.002596 32.002596 0 0 1-31.988146 31.659414zM767.939492 544.058589a32.002596 32.002596 0 0 1-31.995372-31.666639v-0.361244a31.998984 31.998984 0 0 1 31.659415-31.970085c0.455167 0 11.754876-0.11921 64.34115-0.11921h96.000564a31.998984 31.998984 0 0 1 0 64.00158H831.944685c-51.936034 0-63.553638 0.111986-63.665624 0.115598h-0.335957zM692.999446 363.0176a31.998984 31.998984 0 0 1-22.863126-54.381656c0.317895-0.32512 8.229136-8.395308 45.41197-45.578141l67.88134-67.884953A31.998984 31.998984 0 1 1 828.693489 240.429485l-67.892177 67.88134c-31.020013 31.023625-41.644196 41.759794-44.241539 44.393262l-0.697201 0.722488a31.908673 31.908673 0 0 1-22.863126 9.591025z"></path>
    </svg>
`;
