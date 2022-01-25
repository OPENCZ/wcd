# Spin 加载中

用于页面区块的加载、翻页加载更多数据的场景

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 示例

### 基础使用

设置`[type]`属性值为`mask`时，显示遮罩层加载样式；默认`[type=mask]`

<output data-lang="示例">
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <wc-switch
        class="margin-sm wc-switch-1"
        checked="true">
    </wc-switch>
    <span>显示</span>
</div>
<wc-spin loading="true">
    <table>
        <thead>
            <tr>
            <th>昵称</th>
            <th>性别</th>
            <th>身高</th>
            <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
</wc-spin>
</output>

<script>
    document.querySelectorAll("wc-switch").forEach(item => {
        item.addEventListener("change", function (ev) {
            ev.currentTarget.parentNode.nextElementSibling.setAttribute("loading", ev.detail.checked)
        })
    })
</script>

```html
<!--
    [loading="false"]                   是否加载状态；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                       显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
    [mask-icon-top="0"]                 当显示类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好
    [mask-bg="var(--color-mask-white)"] 当显示类型是`mask`时，可设置遮罩层背景样式；默认`var(--color-mask-white)`
    [mask-blur="6"]                     当显示类型是`mask`时，可设置遮罩层模糊样式；该值为数字类型；默认`6`
    [font-size="48"]                    设置默认Loading图标字体大小；该值为数字类型；默认`48`
    [color="var(--color-theme)"]        设置默认Loading图标颜色；默认`var(--color-theme)`
-->
<wc-spin
  loading="true"
  type="mask"
  mask-icon-top=""
  mask-bg="var(--color-mask-white)"
  mask-blur="6"
  font-size="48"
  color="var(--color-theme)"
>
</wc-spin>
```

### 加载更多

设置`[type]`属性值为`more`时，显示加载更多样式，默认`[type=mask]`；

该场景适用于滚动加载下一页数据时时候。

<output data-lang="示例">
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <wc-switch class="margin-sm wc-switch-2" checked="true">
    </wc-switch>
    <span>显示</span>
</div>
<wc-spin type="more" loading="true">
    <table>
        <thead>
            <tr>
            <th>昵称</th>
            <th>性别</th>
            <th>身高</th>
            <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
</wc-spin>
</output>

```html
<!--
    [loading="false"]                   是否加载状态；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="more"]                       显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
-->
<wc-spin loading="true" type="mask"> </wc-spin>
```

### 遮罩层

设置`[type]`属性值为`mask`时，显示遮罩层加载样式；默认`[type=mask]`

<output data-lang="示例">
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <wc-switch
        class="margin-sm wc-switch-3"
        checked="true">
    </wc-switch>
    <span>显示</span>
</div>
<wc-spin loading="true">
    <table>
        <thead>
            <tr>
            <th>昵称</th>
            <th>性别</th>
            <th>身高</th>
            <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
</wc-spin>
</output>
<script>
    document.querySelector(".wc-switch-3").addEventListener("change", function (ev) {
        ev.currentTarget.parentNode.nextElementSibling.setAttribute("loading", ev.detail.checked)
    })
</script>

```html
<!--
    [loading="false"]                   是否加载状态；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                       显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
-->
<wc-spin loading="true" type="mask"> </wc-spin>
```

### 遮罩层加载图标位置设置

当显示类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好，因此可以设置`[mask-icon-top="100"]`

<output data-lang="示例">
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <wc-switch class="margin-sm wc-switch-2" checked="true">
    </wc-switch>
    <span>显示</span>
</div>
<wc-spin type="mask" loading="true" mask-icon-top="100">
    <table>
        <thead>
            <tr>
            <th>昵称</th>
            <th>性别</th>
            <th>身高</th>
            <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
</wc-spin>
</output>

```html
<!--
    [loading="false"]               是否加载状态；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                   显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
    [mask-icon-top="0"]             当显示类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好
-->
<wc-spin loading="true" type="mask" mask-icon-top="100"> .... </wc-spin>
```

### 设置遮罩层背景色

设置`[mask-bg]`属性值可重置默认样式，默认`var(--color-mask-white)`

<output data-lang="示例">
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <wc-switch class="margin-sm wc-switch-2" checked="true">
    </wc-switch>
    <span>显示</span>
</div>
<wc-spin type="mask" loading="true" mask-icon-top="100">
    <table>
        <thead>
            <tr>
            <th>昵称</th>
            <th>性别</th>
            <th>身高</th>
            <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
</wc-spin>
</output>

```html
<!--
    [loading="false"]               是否加载状态；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                   显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
    [mask-icon-top="0"]             当显示类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好
-->
<wc-spin loading="true" type="mask" mask-icon-top="100"> .... </wc-spin>
```

### 自定义遮罩层

定义`[slot="mask"]`属性的插槽元素

<output data-lang="示例">
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <wc-switch
        class="margin-sm wc-switch-4"
        name="switch-item"
        value="xxx"
        size="48"
        checked="true"></wc-switch>
    <span>显示</span>
</div>
<wc-spin loading="true" type="mask" color="var(--color-theme)">
    <table>
        <thead>
            <tr>
                <th>昵称</th>
                <th>性别</th>
                <th>身高</th>
                <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
    <div slot="mask">自定义遮罩层</div>
</wc-spin>
</output>

```html
<!--
    [loading="false"]               是否加载状态；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                   显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
-->
<wc-spin loading="true" type="mask">
  <!--  自定义遮罩层加载插槽  -->
  <div slot="mask">加载中...</div>
</wc-spin>
```

### 自定义加载更多

定义`[slot="more"]`属性的插槽元素

<output data-lang="示例">
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <wc-switch
        class="margin-sm wc-switch-4"
        name="switch-item"
        value="xxx"
        size="48"
        checked="true"></wc-switch>
    <span>显示</span>
</div>
<wc-spin loading="true" type="more">
    <table>
        <thead>
            <tr>
                <th>昵称</th>
                <th>性别</th>
                <th>身高</th>
                <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
    <div slot="more">自定义加载更多</div>
</wc-spin>
</output>

```html
<!--
    [loading="false"]               是否加载状态；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                   显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
-->
<wc-spin loading="true" type="more">
  <!--  自定义加载更多加载插槽  -->
  <div slot="more">加载中...</div>
</wc-spin>
```

## 属性

| 属性名 | 描述 | 默认值 | DOM 操作 | 属性监听回调 |
| --- | --- | --- | --- | --- |
| `loading` | 是否加载状态，接收`true`或`false` | `false` | `true` | - |
| `type` | 显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask` | `mask` | - | - |
| `mask-icon-top` | 当显示类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好 | - | - | - |
| `mask-bg` | 当显示类型是`mask`时，可设置遮罩层背景样式  | `var(--color-mask-white)` | -  | - |
| `mask-blur` | 当显示类型是`mask`时，可设置遮罩层模糊样式 | `6` | - | - |
| `font-size` | 设置默认 Loading 图标字体大小 | `48` | - | - |
| `color` | 设置默认 Loading 图标颜色 | `var(--color-theme)` | - | - |

### DOM 操作

`[loading]`属性值支持直接`DOM`操作，如：

```javascript
let wcSpinElement = document.querySelector("wc-spin");
wcSpinElement.loading = true; // 设置加载状态
console.log(wcSpinElement.loading); // 获取加载状态
```

## slot

| 插槽名 | 描述 |
| --- | --- |
| `mask` | 自定义遮罩层加载插槽   |
| `more` | 自定义加载更多加载插槽 |

```html
<wc-spin>
  <!--  自定义遮罩层加载插槽  -->
  <div slot="mask">mask</div>

  <!--  自定义加载更多加载插槽  -->
  <div slot="more">more</div>
</wc-spin>
```
