import {$, CreateHTMLElement, config, customElementsDefine} from '../../utils';
import './item';
import './group';
import './submenu';

/**
 * 侧边栏组件
 */
@customElementsDefine
class MenuComponent extends CreateHTMLElement {
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['render'];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        this.setPaddingLeft();
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.setPaddingLeft();
    }

    setPaddingLeft(el = this, level = 1) {
        $(el)
            .children()
            .each(item => {
                let tagNameArr = [`${config.prefix}-submenu`, `${config.prefix}-menu-group`];

                if (tagNameArr.includes(item.tagName.toLocaleLowerCase())) {
                    return this.setPaddingLeft(item, level + 1);
                }

                let newLevel = level;
                let slot = $(item).attr('slot');
                let parentNodeTagName = item.parentNode.tagName.toLocaleLowerCase();

                tagNameArr.includes(parentNodeTagName) && slot ? newLevel-- : '';

                $(item)
                    .css(slot === 'icon' ? 'margin-left' : 'padding-left', `${newLevel * 24}px`)
                    .attr('data-menu-level', level);
            });
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        return `
            <style>
                :host {
                    display: block;
                    width: 300px;
                }
            </style>
            
            <slot></slot>
        `;
    }
}
