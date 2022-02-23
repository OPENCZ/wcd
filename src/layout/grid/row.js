import {$, customElementsDefine, CreateHTMLElement, config} from '../../utils';

/**
 * 网格->行组件
 */
@customElementsDefine
class RowComponent extends CreateHTMLElement {
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['align', 'justify'];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            let style = $(this.shadow).find('style');

            // 设置横向对齐样式
            if (name === 'justify') {
                $(style).eq(2).html(this.setJustifyStyle());
            }

            // 设置垂直对齐样式
            if (name === 'align') {
                $(style).eq(1).html(this.setAlignStyle());
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
                    display: flex;
                    flex-wrap: wrap;
                }
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
     * 设置横向对齐样式
     */
    setJustifyStyle() {
        let justifyValue = $(this).attr('justify');
        if (!justifyValue) return ``;

        let styleValue = `${justifyValue === 'start' || justifyValue === 'end' ? 'flex-' : ''}${justifyValue}`;

        return `
            :host([justify=${justifyValue}]) {
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

        let styleName = alignValue.includes('space') ? 'align-content' : 'align-items';
        let styleValue = `${alignValue === 'start' || alignValue === 'end' ? 'flex-' : ''}${alignValue}`;

        return `
            :host([align=${alignValue}]) {
                ${styleName}: ${styleValue};
            }
            
            ${
                alignValue.includes('space')
                    ? `
                        :host([align=${alignValue}]) ${config.prefix}-col {
                            width: 100% !important;
                        }
                    `
                    : ``
            }
        `;
    }
}
