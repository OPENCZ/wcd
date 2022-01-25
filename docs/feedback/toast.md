# Toast 轻提示

基于[Drawer](/feedback/drawer) 组件封装。

## 何时使用
- 在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景；
- 用于主动操作反馈提示，在提示后，将延时隐藏。

## 示例

### 简阶版

使用默认样式，无需配置，简单使用。

<output data-lang="示例">
<button class="btn-toast1">快来点击我吧～</button>
</output>

<script>
    document.querySelector(".btn-toast1").addEventListener("click", function() {
        new Toast("Toast Content", function (ev) {
            alert("关闭后回调")
        })
    });
    document.querySelector(".btn-toast2").addEventListener("click", function() {
        new Toast({
            align: "center",
            delay: 2500,
            icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white"><path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696C170.208 511.872 149.952 512 137.536 524.608c-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224 0.096 0.096 0.128 0.224 0.224 0.32 2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224l449.184-478.208C901.44 330.592 900.768 310.336 887.904 298.208z"></path></svg>',
            content: "请求成功",
            borderRadius: 8,
            afterClose() {
                alert("关闭后回调")
            },
        })
    })
</script>

```javascript
new Toast("Toast Content", function () {
    alert("关闭后回调")
})
```

### 高阶版

通过配置项自定义配置。

<output data-lang="示例">
<button class="btn-toast2">快来点击我吧～</button>
</output>

```javascript
/**
 * 消息提示框
 * @param {string} options.align        定义该组件对齐方式；可选值有：`top`、`bottom`、`center`；默认`center`
 * @param {string} options.icon         组件icon显示内容；可接收`html`字符串
 * @param {string} options.content      组件显示内容；可接收`html`字符串
 * @param {number} options.delay        定义该组件多少毫秒后隐藏；默认`2500`
 * @param {number} options.borderRadius 定义该组件内容圆角样式；默认`8`
 * @param {function} options.afterClose 定义该组件在关闭后回调
 */
new Toast({
    align: "center",
    delay: 2500,
    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white"><path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696C170.208 511.872 149.952 512 137.536 524.608c-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224 0.096 0.096 0.128 0.224 0.224 0.32 2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224l449.184-478.208C901.44 330.592 900.768 310.336 887.904 298.208z"></path></svg>',
    content: "请求成功",
    borderRadius: 8,
    afterClose() {
        alert("关闭后回调")
    },
})
```

## 参数
### 简阶版
`new Toast(content, afterClose)`可接收两个参数：

参数名 | 描述 | 属性值类型
--- | --- | ---
`content` |  定义该组件显示内容；可接收`html`字符串 | `String`
`afterClose` | 定义该组件在关闭后回调 | `Function`

### 高阶版
`new Toast(options)`可接收一个参数，该参数为一个对象：

属性名 | 描述 | 属性值类型
--- | --- | ---
`options.align` | 定义该组件对齐方式；可选值有：`top`、`bottom`、`center`；默认`center` | `String`
`options.icon` |  定义该组件icon显示内容；可接收`html`字符串 | `String`
`options.content` |  定义该组件显示内容；可接收`html`字符串 | `String`
`options.delay` | 定义该组件多少毫秒后隐藏；默认`2500` | `Number`
`options.borderRadius` | 定义该组件内容圆角样式；默认`8` | `Number`
`options.afterClose` | 定义该组件在关闭后回调 | `Function`
