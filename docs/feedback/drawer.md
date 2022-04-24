# Drawer 抽屉

屏幕边缘滑出的浮层面板。

基于该组件二次封装的组件有：[HalfScreenDialog](/feedback/half-screen-dialog) 、[Toast](/feedback/toast)等组件。

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容；
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## 组件元素

- `<wc-drawer/>`：抽屉组件容器元素，其子级可以是任意元素。

## 示例

### 基础使用

定义组件的`[align]`属性设置组件对齐方式。

<output data-lang="示例">
    <button class="btn-drawer" data-align="top">top</button>
    <button class="btn-drawer" data-align="right">right</button>
    <button class="btn-drawer" data-align="center">center</button>
    <button class="btn-drawer" data-align="bottom">bottom</button>
    <button class="btn-drawer" data-align="left">left</button>
    <wc-drawer class="drawer-example" align="center">
        <div style="padding: 20px; background: white;">drawer content</div>
    </wc-drawer>
</output>

<script>
    document.querySelectorAll(".btn-drawer").forEach(item => {
        item.addEventListener("click", function (ev) {
            let drawer = document.querySelector(".drawer-example");
            drawer.align = this.getAttribute("data-align");
            drawer.setAttribute("offset", this.getAttribute("data-offset"));
            drawer.visible = true;
        })
    });
</script>

```html
<!--
    [visible="true"]            定义该组件显示位置，接收`true`或`false`；默认`false`；当该值改变时可触发`changed`事件
    [align="center"]            定义该组件内容显示位置，接收`top`、`right`、`center`、`bottom`、`left`
    [mask-closable="true"]      定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false`；默认`true`
    [offset="0"]                定义该组件距离边界的位移；例如：当[align=top]且[offset=100]时，组件距离顶部100的位置显示
-->
<wc-drawer
    visible="false"
    align="center"
    mask-closable="true"
    offset="0"
>
    <div style="padding: 20px; background: white;">drawer content</div>
</wc-drawer>
```

### 遮罩层关闭

设置组件的`[mask-closable="false"]`时，可禁用点击遮罩层关闭，默认点击遮罩层可关闭。

<output data-lang="示例">
    <button class="btn-drawer" data-align="center">点击遮罩层关闭</button>
</output>

```html
<!--
    [visible="true"]            定义该组件显示位置，接收`true`或`false`；默认`false`；当该值改变时可触发`changed`事件
    [align="center"]            定义该组件内容显示位置，接收`top`、`right`、`center`、`bottom`、`left`
    [mask-closable="true"]      定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false`；默认`true`
    [offset="0"]                定义该组件距离边界的位移；例如：当[align=top]且[offset=100]时，组件距离顶部100的位置显示
-->
<wc-drawer
    visible="false"
    align="center"
    mask-closable="true"
    offset="0"
>
    <div style="padding: 20px; background: white;">drawer content</div>
</wc-drawer>
```


### 位移

可能某些场景不需要全屏展示组件，可设置组件的`[offset]`位移显示位置。

<output data-lang="示例">
    <button class="btn-drawer" data-align="top" data-offset="100">距离顶部100</button>
    <button class="btn-drawer" data-align="right" data-offset="100">距离右边100</button>
    <button class="btn-drawer" data-align="bottom" data-offset="100">距离底部100</button>
    <button class="btn-drawer" data-align="left" data-offset="100">距离左边100</button>
</output>

```html
<!--
    [visible="true"]            定义该组件显示位置，接收`true`或`false`；默认`false`；当该值改变时可触发`changed`事件
    [align="center"]            定义该组件内容显示位置，接收`top`、`right`、`center`、`bottom`、`left`
    [mask-closable="true"]      定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false`；默认`true`
    [offset="100"]              定义该组件距离边界的位移；例如：当[align=top]且[offset=100]时，组件距离顶部100的位置显示
-->
<wc-drawer
    visible="false"
    align="center"
    mask-closable="true"
    offset="100"
>
    <div style="padding: 20px; background: white;">drawer content</div>
</wc-drawer>
```

## 属性

| 属性名 | 描述 | 默认值 | DOM 操作 | 属性监听回调 |
| --- | --- | --- | --- | --- |
| `visible` | 定义该组件是否可见，接收`true`或`false` | `false` | `true` | - |
| `align` | 定义该组件内容显示位置，接收`top`、`right`、`center`、`bottom`、`left` | - | `true` | - |
| `mask-closable` | 定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false` | `true` | - | - |
| `offset` | 定义该组件距离边界的位移；例如：当`[align=top]`且`[offset=100]`时，组件距离顶部100的位置显示 | - | - | - |

### DOM 操作

`[visible]`、`[align]`属性值支持直接`DOM`操作，如：

```javascript
let wcDrawerElement = document.querySelector("wc-drawer");
wcDrawerElement.visible = true;         // 设置该组件是否可见
console.log(wcDrawerElement.visible);   // 获取该组件是否可见

wcDrawerElement.align = "top";          // 设置该组件对齐方式
console.log(wcDrawerElement.align);     // 获取该组件对齐方式
```

## CSS变量

| 变量名 | 描述 |
| --- | --- |
| `--modal-z-index` | 层级样式变量 |
| `--color-mask-black` | 遮罩层颜色变量 |

使用方法可参考[自定义颜色示例](/navigation/breadcrumb?id=自定义颜色)，或[CSS变量使用与注意事项](/css-variable)
