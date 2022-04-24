# Popover 弹出框

点击/鼠标移入元素时，弹出气泡式的卡片浮层。

## 何时使用

- 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

## 组件元素

- `<wc-popover/>`：弹出框组件容器元素，其子级只能接收指定插槽元素：
    - `[slot="content"]`：组件内容插槽元素；
  - `[slot="placeholder"]`：触发组件内容显示的占位插槽元素。

## 示例

## 基础使用

<output data-lang="示例">
<wc-popover>
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    <button slot="placeholder">click</button>
</wc-popover>
</output>

```html
<wc-popover>
    <!--  组件内容插槽元素  -->
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    
    <!--  触发组件内容显示的占位插槽元素  -->
    <button slot="placeholder">click</button>
</wc-popover>
```

## 默认显示

设置组件的`[visible]`属性值为`true`时，默认显示组件内容。

<output data-lang="示例">
<wc-popover visible="true">
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    <button slot="placeholder">click</button>
</wc-popover>
</output>

```html
<!--
    [visible="true"]   定义组件内容是否显示，可选值有：`true`，默认`false`。
-->
<wc-popover visible="true">
    <!--  组件内容插槽元素  -->
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    
    <!--  触发组件内容显示的占位插槽元素  -->
    <button slot="placeholder">click</button>
</wc-popover>
```

## 触发方式

设置组件的`[trigger]`属性值，可选值有：`click`(鼠标点击时)、`hover`(鼠标移入时)、`focus`(获取焦点时)，默认`click`。

<output data-lang="示例">
<wc-popover>
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    <button slot="placeholder">click</button>
</wc-popover>
<wc-popover trigger="hover">
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    <button slot="placeholder">hover</button>
</wc-popover>
<wc-popover trigger="focus">
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    <input type="text" placeholder="focus时显示弹出框" slot="placeholder">
</wc-popover>
</output>

```html
<!--
    [trigger="click"]   定义组件触发方式，可选值有：`click`(鼠标点击时)、`hover`(鼠标移入时)、`focus`(获取焦点时)，默认`click`。
-->
<wc-popover trigger="click">
    <!--  组件内容插槽元素  -->
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    
    <!--  触发组件内容显示的占位插槽元素  -->
    <button slot="placeholder">click</button>
</wc-popover>
```

## 箭头指引

设置组件的`[triangle]`属性值为`true`时，显示箭头指引。

<output data-lang="示例">
<wc-popover triangle="true">
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    <button slot="placeholder">click</button>
</wc-popover>
</output>

```html
<!--
    [triangle="true"]     定义组件是否显示箭头指引,默认不显示;可接收`true`时显示.
-->
<wc-popover triangle="true">
    <!--  组件内容插槽元素  -->
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    
    <!--  触发组件内容显示的占位插槽元素  -->
    <button slot="placeholder">click</button>
</wc-popover>
```

## 位置

设置组件的`[placement]`属性值可修改组件内容元素显示位置，可选值：`topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom`，默认`bottomLeft`。

<output data-lang="示例">
<wc-row>
    <wc-col style="width: 100px;">
        <wc-popover triangle="true"  trigger="hover" placement="leftTop">
                <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
                <button slot="placeholder" style="width: 100px;">leftTop</button>
            </wc-popover>
            <wc-popover triangle="true"  trigger="hover" placement="left" class="margin-top-md margin-bottom-md">
                <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
                <button slot="placeholder" style="width: 100px;">left</button>
            </wc-popover>
            <wc-popover triangle="true"  trigger="hover" placement="leftBottom">
                <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
                <button slot="placeholder" style="width: 100px;">leftBottom</button>
            </wc-popover>
    </wc-col>
    <wc-col class="margin-right-md margin-left-md">
        <div>
            <wc-popover triangle="true"  trigger="hover" placement="topLeft">
                <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
                <button slot="placeholder" style="width: 100px;">topLeft</button>
            </wc-popover>
            <wc-popover triangle="true"  trigger="hover" placement="top" class="margin-right-md margin-left-md">
                <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
                <button slot="placeholder" style="width: 100px;">top</button>
            </wc-popover>
            <wc-popover triangle="true"  trigger="hover" placement="topRight">
                <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
                <button slot="placeholder" style="width: 100px;">topRight</button>
            </wc-popover>
        </div>
        <div style="margin-top: 60px">
            <wc-popover triangle="true"  trigger="hover" placement="bottomLeft">
                <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
                <button slot="placeholder" style="width: 100px;">bottomLeft</button>
            </wc-popover>
            <wc-popover triangle="true"  trigger="hover" placement="bottom" class="margin-right-md margin-left-md">
                <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
                <button slot="placeholder" style="width: 100px;">bottom</button>
            </wc-popover>
            <wc-popover triangle="true"  trigger="hover" placement="bottomRight">
                <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
                <button slot="placeholder" style="width: 100px;">bottomRight</button>
            </wc-popover>
        </div>
    </wc-col>
    <wc-col style="width: 100px;">
        <wc-popover triangle="true"  trigger="hover" placement="rightTop">
            <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
            <button slot="placeholder" style="width: 100px;">rightTop</button>
        </wc-popover>
        <wc-popover triangle="true"  trigger="hover" placement="right" class="margin-top-md margin-bottom-md">
            <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
            <button slot="placeholder" style="width: 100px;">right</button>
        </wc-popover>
        <wc-popover triangle="true"  trigger="hover" placement="rightBottom">
            <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
            <button slot="placeholder" style="width: 100px;">rightBottom</button>
        </wc-popover>
    </wc-col>
</wc-row>
</output>

```html
<!--
    [placement="xxx"]     定义组件内容元素显示位置；可选值：`topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom`。
-->
<wc-popover placement="bottomLeft">
    <!--  组件内容插槽元素  -->
    <div slot="content" style="white-space: nowrap; padding: 6px 8px;">Popover 弹出框</div>
    
    <!--  触发组件内容显示的占位插槽元素  -->
    <button slot="placeholder">click</button>
</wc-popover>
```

## 属性

| 属性名 | 描述 | 默认值 | DOM 操作 | 属性监听回调 |
| --- | --- | --- | --- | --- |
| `visible` | 定义该组件是否可见状态，接收`true`或`false` | `false` | `true` | `true` |
| `trigger` | 定义组件触发方式，可选值有：`click`(鼠标点击时)、`hover`(鼠标移入时)、`focus`(获取焦点时)，默认`click` | `click` | - | - |
| `triangle` | 定义组件是否显示箭头指引,默认不显示;可接收`true`时显示 | `false` | - | - |
| `placement` | 定义组件内容元素显示位置；可选值：`topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom` | `bottomLeft` | - | - |

### DOM 操作

`[visible]`属性值支持直接`DOM`操作，如：

```javascript
let wcPopoverElement = document.querySelector("wc-popover");
wcPopoverElement.visible = true;       // 设置是否可见状态
console.log(wcPopoverElement.visible); // 获取是否可见状态
```

## Slot
插槽名 | 描述
--- | --- 
`content` |  组件内容插槽元素
`placeholder` |  触发组件内容显示的占位插槽元素
