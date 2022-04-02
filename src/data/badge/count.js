import {$, pxToVw, CreateHTMLElement, customElementsDefine} from '../../utils';

/**
 * 微章组件
 */
@customElementsDefine
class BadgeCountComponent extends CreateHTMLElement {
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['value', 'color'];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        let badgeCount = $(this.shadowRoot).find('.badge-count');

        // 计数
        if (name === 'value') {
            $(badgeCount).find('span').text(newValue);

            newValue.length > 2 ? $(badgeCount).addClass('multi') : $(badgeCount).removeClass('multi');
        }

        // 背景色
        if (name === 'color') {
            $(badgeCount).css('background', newValue);
        }
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let value = $(this).attr('value');

        return `
            <style>
                .badge-count {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: ${pxToVw(32)};
                    height: ${pxToVw(32)};
                    color: white;
                    font-weight: 400;
                    font-size: ${pxToVw(24)};
                    white-space: nowrap;
                    text-align: center;
                    background: ${$(this).attr('color') || `var(--color-badge)`};
                    border-radius: ${pxToVw(20)};
                }
                
                .badge-count.multi {
                    padding: ${pxToVw(0, 10)};
                }
                
                .badge-count span {
                    display: block;
                    transform: scale(.8);
                }
            </style>

            <div class="badge-count ${value.length > 2 ? 'multi' : ''}">
                <span>${value}</span>
            </div>
        `;
    }
}
