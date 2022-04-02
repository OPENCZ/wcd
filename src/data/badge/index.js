import {config, CreateHTMLElement, customElementsDefine} from '../../utils';
import './dot';
import './count';

/**
 * 微章组件
 */
@customElementsDefine
class BadgeComponent extends CreateHTMLElement {
    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        return `
            <style>
                :host {
                    display: inline-flex;
                    position: relative;
                }
                
                ::slotted(${config.prefix}-badge-dot), ::slotted(${config.prefix}-badge-count) {
                    position: absolute;
                    top: 0;
                    right: 0;
                    transform: translate(50%, -50%);
                }
            </style>
            
            <div class="badge-wrapper">
                <slot></slot>
            </div>
        `;
    }
}
