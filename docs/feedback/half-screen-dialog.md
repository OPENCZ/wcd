# HalfScreenDialog 半屏对话框

底部弹起的模态面板，包含与当前情境相关的多个选项。

基于 [Popup](/feedback/popup) 组件封装。

## 何时使用

- 半屏对话框从父窗体底部滑入，覆盖住部分父窗体内容。用户在半屏对话框内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务；
- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容；
- 需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象；
- 适用于H5场景。

## 组件元素

- `<wc-half-screen-dialog/>`：半屏对话框组件容器元素，其子级接收三个指定插槽元素：
    - `[slot="header"]`：组件头部插槽元素；
    - `[slot="body"]`：组件内容主体头部插槽元素；
    - `[slot="footer"]`：组件底部头部插槽元素。

## 示例

<output data-lang="示例">
    <button class="btn-half-screen-dialog">点击显示半屏对话框</button>
    <wc-half-screen-dialog border-radius="24">
        <div slot="header">Title</div>
        <div slot="body">
            <p style="padding: 20px;">half screen dialog content</p>
        </div>
        <button slot="footer" class="btn-half-screen-dialog-close">确认</button>
    </wc-half-screen-dialog>
</output>

<script>
    document.querySelector(".btn-half-screen-dialog").addEventListener("click", function() {
        document.querySelector("wc-half-screen-dialog").visible = true;
    });
    document.querySelector(".btn-half-screen-dialog-close").addEventListener("click", function() {
        document.querySelector("wc-half-screen-dialog").visible = false;
    });
</script>

```html
<!--
    半屏对话框组件
    [visible=true]                  定义该组件是否可见状态，接收`true`或`false`；默认`false`；当该值改变时可触发`changed`事件
    [mask-closable="true"]          定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false`；默认`true`
    [border-radius="24"]            定义该组件圆角样式；默认：`24`
-->
<wc-half-screen-dialog
    visible="false"
    mask-closable="true"
    border-radius="24"
>
    <!--  头部插槽元素  -->
    <div slot="header">Title</div>

    <!--  主体内容插槽元素  -->
    <div slot="body">
        <p style="padding: 20px">half screen dialog content</p>
    </div>

    <!--  底部插槽元素  -->
    <div slot="footer">
        <button>确认</button>
    </div>
</wc-half-screen-dialog>
```

## 属性

| 属性名 | 描述 | 默认值 | DOM 操作 | 属性监听回调 |
| --- | --- | --- | --- | --- |
| `visible` | 定义该组件是否可见状态，接收`true`或`false` | `false` | `true` | `true` |
| `mask-closable` | 定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false` | `true` | - | - |
| `border-radius` | 定义该组件圆角样式 | `24` | - | - |

### DOM 操作

`[visible]`属性值支持直接`DOM`操作，如：

```javascript
let wcHalfScreenDialogElement = document.querySelector("wc-half-screen-dialog");
wcHalfScreenDialogElement.visible = true;       // 设置是否可见状态
console.log(wcHalfScreenDialogElement.visible); // 获取是否可见状态
```

## Slot
插槽名 | 描述
--- | --- 
`header` |  自定义组件头部插槽元素
`body` |  自定义组件内容插槽元素
`footer` |  自定义组件尾部插槽元素
