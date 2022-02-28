# Button 按钮

按钮用于开始一个即时操作。

## 示例

### 基础使用

<output data-lang="示例">
    <wc-button type="">默认按钮</wc-button>
</output>

```html
<wc-button>默认按钮</wc-button>
```

### 类型

定义常用类型按钮，设置`<wc-button/>`元素的`[type]`属性值，可选值：`theme`、`info`、`success`、`warning`、`disabled`、`link`、`text`。

<output data-lang="示例">
    <wc-button type="theme">主题色按钮</wc-button>
    <wc-button type="info">信息状态按钮</wc-button>
    <wc-button type="success">成功状态按钮</wc-button>
    <wc-button type="warning">警告状态按钮</wc-button>
    <wc-button type="danger">危险状态按钮</wc-button>
    <wc-button type="disabled">禁用状态按钮</wc-button>
    <wc-button type="link">链接状态按钮</wc-button>
    <wc-button type="text">文本按钮</wc-button>
</output>

```html
<wc-button>默认按钮</wc-button>
<wc-button type="theme">主题色按钮</wc-button>
<wc-button type="info">信息状态按钮</wc-button>
<wc-button type="success">成功状态按钮</wc-button>
<wc-button type="warning">警告状态按钮</wc-button>
<wc-button type="danger">危险状态按钮</wc-button>
<wc-button type="disabled">禁用状态按钮</wc-button>
<wc-button type="link">链接状态按钮</wc-button>
<wc-button type="text">文本按钮</wc-button>
```

### 幽灵按钮

设置`<wc-button/>`元素的`[ghost]`属性值为`true`。

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

<output data-lang="示例">
    <wc-button ghost="true" type="">默认按钮</wc-button>
    <wc-button ghost="true" type="theme">主题色按钮</wc-button>
    <wc-button ghost="true" type="info">信息状态按钮</wc-button>
    <wc-button ghost="true" type="success">成功状态按钮</wc-button>
    <wc-button ghost="true" type="warning">警告状态按钮</wc-button>
    <wc-button ghost="true" type="danger">危险状态按钮</wc-button>
    <wc-button ghost="true" type="disabled">禁用状态按钮</wc-button>
</output>

```html
<wc-button ghost="true">默认按钮</wc-button>
<wc-button ghost="true" type="theme">主题色按钮</wc-button>
<wc-button ghost="true" type="info">信息状态按钮</wc-button>
<wc-button ghost="true" type="success">成功状态按钮</wc-button>
<wc-button ghost="true" type="warning">警告状态按钮</wc-button>
<wc-button ghost="true" type="danger">危险状态按钮</wc-button>
<wc-button ghost="true" type="disabled">禁用状态按钮</wc-button>
```

### 尺寸

设置`<wc-button/>`元素的`[size]`属性值，可选值有：`lg`、`sm`。

<output data-lang="示例">
    <wc-button size="lg">大尺寸按钮</wc-button>
    <wc-button>默认尺寸按钮</wc-button>
    <wc-button size="sm">小尺寸按钮</wc-button>
</output>

```html
<wc-button size="lg">大尺寸按钮</wc-button>
<wc-button>默认尺寸按钮</wc-button>
<wc-button size="sm">小尺寸按钮</wc-button>
```

### 加载中

设置`<wc-button/>`元素的`[loading]`属性值为`true`。

<output data-lang="示例">
    <wc-button loading="true">加载中</wc-button>
</output>

```html
<wc-button loading="true">加载中</wc-button>
```

## 属性

| 属性名 | 描述 |
| --- | --- |
| `type` | 定义该组件的类型；可选值：`theme`、`info`、`success`、`warning`、`disabled`、`link`、`text` |
| `ghost` | 定义该组件是否为幽灵按钮（背景色透明），可选值：`true`|
| `size` | 定义该组件的尺寸，可选值：`lg`、`sm` |
| `loading` | 定义该组件是否为加载状态，可选值：`true`|

## CSS变量

| 变量名 | 描述 |
| --- | --- |
| `--color-border` | 组件边框色变量 |

### Type

| 变量名 | 描述 |
| --- | --- |
| `--color-theme` | 组件设置`[type=theme]`属性时边框色/背景色变量 |
| `--color-info` | 组件设置`[type=info]`属性时边框色/背景色变量 |
| `--color-success` | 组件设置`[type=success]`属性时边框色/背景色变量 |
| `--color-warning` | 组件设置`[type=warning]`属性时边框色/背景色变量 |
| `--color-danger` | 组件设置`[type=danger]`属性时边框色/背景色变量 |
| `--color-disabled` | 组件设置`[type=disabled]`属性时边框色/背景色变量 |
| `--color-link` | 组件设置`[type=link]`属性时边框色/背景色变量 |
| `--color-disabled` | 组件设置`[type=disabled]`属性时边框色/背景色变量 |

### Size

| 变量名 | 描述 |
| --- | --- |
| `--height-lg` | 组件设置`[size=lg]`属性时大尺寸高度变量 |
| `--height-md` | 组件默认尺寸高度变量 |
| `--height-sm` | 组件设置`[size=sm]`属性时小尺寸高度变量 |
| `--margin-padding-lg` | 组件默认尺寸、大尺寸时，内边距变量 |
| `--margin-padding-md` | 组件小尺寸时，内边距变量 |
| `--font-size-sm` | 组件大尺寸时，字体尺寸变量 |
| `--font-size-xs` | 组件小尺寸时，字体尺寸变量 |

### Loading

| 变量名 | 描述 |
| --- | --- |
| `--button-loading-mask` | 组件设置`[loading=true]`属性时，加载遮罩变量 |
| `--button-loading-size` | 组件设置`[loading=true]`属性时，加载`svg`图标尺寸变量 |

[CSS变量使用与注意事项](/css-variable)
