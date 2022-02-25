# Button 复选框

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
