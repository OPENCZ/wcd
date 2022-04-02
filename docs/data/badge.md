# Badge 微章

图标右上角的圆形徽标数字。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 组件元素

- `<wc-badge-dot/>`：圆点微章元素；
- `<wc-badge-count/>`：计数微章元素，适用于标记数量；
- `<wc-badge/>`：微章容器元素，可接收任何元素；当存在`<wc-badge-dot/>`、`<wc-badge-count/>`元素时，会定位于当前内容尺寸的右上角的位置显示。

## 示例

### 基础使用

<output data-lang="示例">
    <wc-badge>
        <span style="width: 50px; height: 50px; background: #f5f5f5"></span>
        <wc-badge-dot></wc-badge-dot>
    </wc-badge>
    <wc-badge class="margin-left-lg">
        <span style="width: 50px; height: 50px; background: #f5f5f5"></span>
        <wc-badge-count value="1"></wc-badge-count>
    </wc-badge>
    <wc-badge class="margin-right-lg margin-left-lg">
        <span style="width: 50px; height: 50px; background: #f5f5f5"></span>
        <wc-badge-count value="99"></wc-badge-count>
    </wc-badge>
    <wc-badge class="margin-right-lg margin-left-lg">
        <span style="width: 50px; height: 50px; background: #f5f5f5"></span>
        <wc-badge-count value="99+"></wc-badge-count>
    </wc-badge>
</output>

```html
<wc-badge>
    <span style="width: 50px; height: 50px; background: #f5f5f5"></span>
    <wc-badge-dot></wc-badge-dot>
</wc-badge>

<wc-badge>
    <span style="width: 50px; height: 50px; background: #f5f5f5"></span>
    <wc-badge-count value="1"></wc-badge-count>
</wc-badge>
```

### 自定义圆点微章色

设置`<wc-badge-dot/>`元素的`[color]`属性值，默认`var(--color-badge)`。

<output data-lang="示例">
    <div style="display: flex; align-items: center">
        <wc-badge-dot></wc-badge-dot>
        <wc-badge-dot color="var(--color-theme)"></wc-badge-dot>
        <wc-badge-dot color="var(--color-info)"></wc-badge-dot>
        <wc-badge-dot color="var(--color-success)"></wc-badge-dot>
        <wc-badge-dot color="var(--color-warning)"></wc-badge-dot>
        <wc-badge-dot color="var(--color-danger)"></wc-badge-dot>
    </div>
</output>

```html
<!--
    [color]     定义圆点微章色，可接收任意色、css变量，默认`var(--color-badge)`
-->
<wc-badge-dot color="var(--color-theme)"></wc-badge-dot>
```

### 自定义圆点微章尺寸

设置`<wc-badge-dot/>`元素的`[size]`属性值，默认`32`。

<output data-lang="示例">
    <div style="display: flex; align-items: center">
        <wc-badge-dot size="32"></wc-badge-dot>
        <wc-badge-dot size="38"></wc-badge-dot>
        <wc-badge-dot size="42"></wc-badge-dot>
        <wc-badge-dot size="48"></wc-badge-dot>
    </div>
</output>

```html
<!--
    [color]     定义圆点微章色，可接收任意色、css变量，默认`var(--color-badge)`
-->
<wc-badge-dot color="var(--color-theme)"></wc-badge-dot>
```

### 计数微章

设置`<wc-badge-count/>`元素的`[value]`属性值修改显示文本内容。

设置`<wc-badge-count/>`元素的`[color]`属性值可修改颜色，默认`var(--color-badge)`；

<output>
    <div class="margin-bottom-md" style="display: flex; align-items: center">
        <wc-badge-count value="1" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="2" color="var(--color-theme)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="3" color="var(--color-info)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="4" color="var(--color-success)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="5" color="var(--color-warning)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="6" color="var(--color-danger)"></wc-badge-count>
    </div>
    <div class="margin-bottom-md" style="display: flex; align-items: center">
        <wc-badge-count value="99" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99" color="var(--color-theme)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99" color="var(--color-info)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99" color="var(--color-success)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99" color="var(--color-warning)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99" color="var(--color-danger)"></wc-badge-count>
    </div>
    <div style="display: flex; align-items: center">
        <wc-badge-count value="99+" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99+" color="var(--color-theme)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99+" color="var(--color-info)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99+" color="var(--color-success)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99+" color="var(--color-warning)" class="margin-right-md"></wc-badge-count>
        <wc-badge-count value="99+" color="var(--color-danger)"></wc-badge-count>
    </div>
</output>

```html
<!--
    [value]     定义计数微章显示文本内容
    [color]     定义计数微章颜色，只默认`var(--color-badge)`
-->
<wc-badge-count value="1" class="margin-right-md"></wc-badge-count>
```

## 属性

### 圆点微章

属性名 | 描述 | 默认值 | 属性监听
--- | --- | --- | ---
`color` | 定义圆点微章色 | `var(--color-badge)` | `true`
`size` | 定义圆点微章尺寸 | `32` | `true`

### 计数微章

属性名 | 描述 | 默认值 | 属性监听
--- | --- | --- | ---
`value` | 定义计数微章显示文本内容 | - | `true`
`color` | 定义计数微章色 | `var(--color-badge)` | `true`

## CSS变量

| 变量名 | 描述 |
| --- | --- |
| `--color-badge` | 默认圆点微章、计数微章颜色变量 |

[CSS变量使用与注意事项](/css-variable)