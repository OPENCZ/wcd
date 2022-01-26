# Dialog 对话框

模态对话框。

基于 [Drawer](/feedback/drawer) 组件封装。

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作；
- 另外当需要一个简洁的确认框询问用户时，可以使用 `new Dialog(options)` 封装方法。

## 示例

### 组件版

<output data-lang="示例">
    <button class="btn-dialog">点击显示</button>
    <wc-dialog class="dialog-example-1" border-radius="24">
        <div slot="header">Title</div>
        <div slot="body">dialog content</div>
        <div slot="footer">
            <button>取消</button>
            <button>确认</button>
        </div>
    </wc-dialog>
</output>

<script>
    document.querySelectorAll(".btn-dialog").forEach(item => {
        item.addEventListener("click", function (ev) {
            ev.currentTarget.nextElementSibling.visible = true
        })
    });
    document.querySelectorAll(".dialog-example-1 button").forEach(item => {
        item.addEventListener("click", function (ev) {
            document.querySelector('.dialog-example-1').visible = false
        })
    });
    document.querySelector(".btn-dialog-component").addEventListener("click", function (ev) {
        new Dialog({
            title: "title",
            content: "content",
            borderRadius: 24,
            maskClosable: true,
            buttons: ["取消", "确认"],
            onClick(index, close) {
                close();
            },
        })
    });
</script>

```html
<!--
    对话框组件
    [visible=true]                  定义该组件是否可见状态，接收`true`或`false`；默认`false`；当该值改变时可触发`changed`事件
    [mask-closable="true"]          定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false`；默认`true`
    [border-radius="24"]            定义该组件圆角样式；默认：`24`
-->
<wc-dialog
    visible="false"
    mask-closable="true"
    border-radius="24"
>
    <!--  头部插槽元素  -->
    <div slot="header">弹窗标题</div>

    <!--  主体内容插槽元素  -->
    <div slot="body">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>

    <!--  底部插槽元素  -->
    <div slot="footer">
        <button>辅助操作</button>
        <button>主操作</button>
    </div>
</wc-dialog>
```

### 语法糖

使用`javascript`封装组件，调用`new Dialog(options)`方法简单使用；

如需更好的扩展，可以上示例组件自定义。

<output data-lang="示例">
    <button class="btn-dialog-component">点击显示</button>
</output>

```javascript
/**
 * 对话框
 * @param options.title         标题
 * @param options.content       内容
 * @param options.borderRadius  圆角样式
 * @param options.maskClosable  遮罩层是否可点击关闭，默认true
 * @param options.buttons       自定义操作按钮文案，当未定义时，默认文案是“我知道了”
 * @param options.onClick       当操作按钮点击时回调；接口两个参数，参数一（index）：操作按钮索引值，参数二（close）：关闭对话框方法
 */
new Dialog({
    title: "title",
    content: "content",
    borderRadius: 24,
    maskClosable: true,
    buttons: ["取消", "确认"],
    onClick(index, close) {
        close();
    },
})
```

## 属性

| 属性名 | 描述 | 默认值 | DOM 操作 | 属性监听回调 |
| --- | --- | --- | --- | --- |
| `visible` | 定义该组件是否可见，接收`true`或`false` | `false` | `true` | - |
| `mask-closable` | 定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false` | `true` | - | - |
| `border-radius` | 定义该组件圆角样式 | `24` | - | - |

### DOM 操作

`[visible]`属性值支持直接`DOM`操作，如：

```javascript
let wcDialogElement = document.querySelector("wc-dialog");
wcDialogElement.visible = true;         // 设置该组件是否可见
console.log(wcDialogElement.visible);   // 获取该组件是否可见
```

## Slot

| 插槽名 | 描述 |
| --- | --- |
| `header` | 自定义组件头部插槽元素 |
| `body` | 自定义组件内容插槽元素 |
| `footer` | 自定义组件尾部插槽元素 |

## 语法糖API

`new Dialog(options)`配置参数

| 参数名 | 描述 | 默认值 | 数据类型 |
| --- | --- | --- | --- |
| `options.title` | 对话框标题 | - | `String` |
| `options.content` | 对话框内容 | - | `String` |
| `options.borderRadius` | 对话框圆角样式 | - | `Number` |
| `options.maskClosable` | 遮罩层是否可点击关闭 | `true` | `Boolean` |
| `options.buttons` | 自定义操作按钮文案 | 我知道了 | `Array` |
| `options.onClick` | 当操作按钮点击时回调；接口两个参数，参数一：操作按钮索引值，参数二：关闭对话框方法 | - | `Function` |

