# Grid 网格

`1`行`24`列网格系统。

## 示例

### 基础使用

设置`<wc-col/>`元素的`[span]`属性值可修改网格占位列数，接收`1` ~ `24`或`flex`。

例如：当`[span="12"]`属性时，元素占位`12`个列的宽度。

<output data-lang="示例">
<wc-row>
    <wc-col span="24">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="12">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="12">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="8">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="8">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="8">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="6">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-danger); height: 40px;"></div>
    </wc-col>
</wc-row>
</output>

```html
<wc-row>
    <wc-col span="24">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="12">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="12">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="8">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="8">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="8">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="6">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-danger); height: 40px;"></div>
    </wc-col>
</wc-row>
```

### 自适应列

设置`<wc-col/>`元素的`[span="flex"]`属性值，该元素自适应网格占位列数。

<output data-lang="示例">
<wc-row>
    <wc-col span="flex">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="flex">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="12">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="8">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="flex">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="8">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="flex">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="flex">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-danger); height: 40px;"></div>
    </wc-col>
</wc-row>
</output>

```html
<wc-row>
    <wc-col span="flex">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="flex">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="12">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="8">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="flex">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="8">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="flex">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="flex">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
    <wc-col span="6">
        <div style="background: var(--color-danger); height: 40px;"></div>
    </wc-col>
</wc-row>
```

### 列偏移

设置`<wc-col/>`元素的`[offset]`属性值可修改网格偏移列数，接收`1` ~ `24`。

例如：当`[offset="12"]`属性时，元素向右侧偏移了`12`个列的宽度。

<output data-lang="示例">
<wc-row>
    <wc-col span="12" offset="12">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="8">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="8" offset="8">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="6" offset="6">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="6" offset="6">
        <div style="background: var(--color-danger); height: 40px;"></div>
    </wc-col>
</wc-row>
</output>

```html
<wc-row>
    <wc-col span="12" offset="12">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="8">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="8" offset="8">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>

<wc-row class="margin-top-md">
    <wc-col span="6" offset="6">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="6" offset="6">
        <div style="background: var(--color-danger); height: 40px;"></div>
    </wc-col>
</wc-row>
```

### 横向对齐方式

设置`<wc-row/>`元素的`[justify]`属性值，可定义子项横向对齐方式；可接收值有：`flex-start`、`center`、`flex-end`、`space-between`、`space-around`。

对应CSS样式的中`justify-content`。

<output data-lang="示例">
<p>[justify="flex-start"]：</p>
<wc-row justify="flex-start" class="margin-bottom-lg" style="height: 40px; background: #f5f5f5;">
    <wc-col span="12">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
</wc-row>
<p>[justify="center"]：</p>
<wc-row justify="center" class="margin-bottom-lg" style="height: 40px; background: #f5f5f5;">
    <wc-col span="12">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
</wc-row>
<p>[justify="flex-end"]：</p>
<wc-row justify="flex-end" class="margin-bottom-lg" style="height: 40px; background: #f5f5f5;">
    <wc-col span="12">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>
<p>[justify="space-between"]：</p>
<wc-row justify="space-between" class="margin-bottom-lg" style="height: 40px; background: #f5f5f5;">
    <wc-col span="8">
        <div style="background: var(--color-danger); height: 40px;"></div>
    </wc-col>  
    <wc-col span="8">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
</wc-row>
<p>[justify="space-around"]：</p>
<wc-row justify="space-around" class="margin-bottom-md" style="height: 40px; background: #f5f5f5;">
    <wc-col span="8">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>  
    <wc-col span="8">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>
</output>

```html
<!--
    [justify]     定义子项横向对齐方式，可接收：`flex-start`、`center`、`flex-end`、`space-between`、`space-around`
-->
<wc-row align="flex-start">
    <wc-col span="24">...</wc-col>
</wc-row>
```

### 竖向对齐方式

设置`<wc-row/>`元素的`[align]`属性值，可定义子项竖向对齐方式；可接收值有：`flex-start`、`center`、`flex-end`、`space-between`、`space-around`。

对应CSS样式的中`align-item`、`align-content`。

<output data-lang="示例">
<p>[align="flex-start"]：</p>
<wc-row align="flex-start" class="margin-bottom-lg" style="height: 80px; background: #f5f5f5;">
    <wc-col span="24">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
</wc-row>
<p>[align="center"]：</p>
<wc-row align="center" class="margin-bottom-lg" style="height: 80px; background: #f5f5f5;">
    <wc-col span="24">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
</wc-row>
<p>[align="flex-end"]：</p>
<wc-row align="flex-end" class="margin-bottom-lg" style="height: 80px; background: #f5f5f5;">
    <wc-col span="24">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>
<p>[align="space-between"]：</p>
<wc-row align="space-between" class="margin-bottom-lg" style="height: 120px; background: #f5f5f5;">
    <wc-col span="24">
        <div style="background: var(--color-danger); height: 40px;"></div>
    </wc-col>  
    <wc-col span="24">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
</wc-row>
<p>[align="space-around"]：</p>
<wc-row align="space-around" class="margin-bottom-md" style="height: 120px; background: #f5f5f5;">
    <wc-col span="24">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>  
    <wc-col span="24">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>
</output>

```html
<!--
    [align]     定义子项竖向对齐方式，可接收：`flex-start`、`center`、`flex-end`、`space-between`、`space-around`
-->
<wc-row align="flex-start">
    <wc-col span="24">...</wc-col>
</wc-row>
```

### 响应式列

`<wc-col/>`元素的`[span]`属性值可接收对象，如：`[span="{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}"]`。

- `xs`：当屏幕像素`>=0px`时生效，其值可接收`1` ~ `24`；
- `sm`：当屏幕像素`>=768px`时生效，其值可接收`1` ~ `24`，反之隐藏；
- `md`：当屏幕像素`>=992px`时生效，其值可接收`1` ~ `24`，反之隐藏；
- `lg`：当屏幕像素`>=1200px`时生效，其值可接收`1` ~ `24`，反之隐藏；
- `xl`：当屏幕像素`>=1920px`时生效，其值可接收`1` ~ `24`，反之隐藏。

优先级：`xl` > `lg` > `md` > `sm` > `xs`。

<output data-lang="示例">
<wc-row>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-theme); height: 40px;"></div>   
    </wc-col>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-info); height: 40px;"></div>   
    </wc-col>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-success); height: 40px;"></div>   
    </wc-col>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-warning); height: 40px;"></div>   
    </wc-col>
</wc-row>
</output>

```html
<!--
    响应式列
    <wc-col/>元素的[span]属性值可接收对象，如：[span="{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}"]：
    `xs`：当屏幕像素`>=0px`时生效，其值可接收`1` ~ `24`；
    `sm`：当屏幕像素`>=768px`时生效，其值可接收`1` ~ `24`，反之隐藏；
    `md`：当屏幕像素`>=992px`时生效，其值可接收`1` ~ `24`，反之隐藏；
    `lg`：当屏幕像素`>=1200px`时生效，其值可接收`1` ~ `24`，反之隐藏；
    `xl`：当屏幕像素`>=1920px`时生效，其值可接收`1` ~ `24`，反之隐藏。
    
    优先级：`xl` > `lg` > `md` > `sm` > `xs`。
-->
<wc-row>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-theme); height: 40px;"></div>
    </wc-col>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-success); height: 40px;"></div>
    </wc-col>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
</wc-row>
```

### 响应式列偏移

`<wc-col/>`元素的`[offset]`属性值可接收对象，如：`[offset="{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}"]`。

- `xs`：当屏幕像素`>=0px`时生效，其值可接收`1` ~ `24`；
- `sm`：当屏幕像素`>=768px`时生效，其值可接收`1` ~ `24`，反之隐藏；
- `md`：当屏幕像素`>=992px`时生效，其值可接收`1` ~ `24`，反之隐藏；
- `lg`：当屏幕像素`>=1200px`时生效，其值可接收`1` ~ `24`，反之隐藏；
- `xl`：当屏幕像素`>=1920px`时生效，其值可接收`1` ~ `24`，反之隐藏。

优先级：`xl` > `lg` > `md` > `sm` > `xs`。

<output data-lang="示例">
<wc-row>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}" offset="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-info); height: 40px;"></div>   
    </wc-col>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}" offset="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-warning); height: 40px;"></div>   
    </wc-col>
</wc-row>
</output>

```html
<!--
    响应式列位移
    <wc-col/>元素的[offset]属性值可接收对象，如：[offset="{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}"]：
    `xs`：当屏幕像素`>=0px`时生效，其值可接收`1` ~ `24`；
    `sm`：当屏幕像素`>=768px`时生效，其值可接收`1` ~ `24`，反之隐藏；
    `md`：当屏幕像素`>=992px`时生效，其值可接收`1` ~ `24`，反之隐藏；
    `lg`：当屏幕像素`>=1200px`时生效，其值可接收`1` ~ `24`，反之隐藏；
    `xl`：当屏幕像素`>=1920px`时生效，其值可接收`1` ~ `24`，反之隐藏。
    
    优先级：`xl` > `lg` > `md` > `sm` > `xs`。
-->
<wc-row>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}" offset="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-info); height: 40px;"></div>
    </wc-col>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}" offset="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-warning); height: 40px;"></div>
    </wc-col>
    <wc-col span="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}" offset="{xs: 24, sm: 12, md: 12, lg: 8, xl: 6}">
        <div style="background: var(--color-theme); height: 40px;"></div>
    </wc-col>
</wc-row>
```

## 属性

### Row

`<wc-row/>`可接收属性：

| 属性名 | 描述 |
| --- | --- |
| `align` | 定义该组件子项竖向垂直对齐方式可接收值有：`flex-start`、`center`、`flex-end`、`space-between`、`space-around`。 |
| `justify` | 定义该组件子项横向垂直对齐方式可接收值有：`flex-start`、`center`、`flex-end`、`space-between`、`space-around`。 |

### Col

`<wc-col/>`可接收属性：

| 属性名 | 描述 |
| --- | --- |
| `span` | 定义网格占位列数，可接收`1` ~ `24`、`flex`、`{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}` |
| `offset` | 定义网格位移列数，可接收`1` ~ `24`、`{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}` |

- `xs`：当屏幕像素`>=0px`时生效，其值可接收`1` ~ `24`；
- `sm`：当屏幕像素`>=768px`时生效，其值可接收`1` ~ `24`，反之隐藏；
- `md`：当屏幕像素`>=992px`时生效，其值可接收`1` ~ `24`，反之隐藏；
- `lg`：当屏幕像素`>=1200px`时生效，其值可接收`1` ~ `24`，反之隐藏；
- `xl`：当屏幕像素`>=1920px`时生效，其值可接收`1` ~ `24`，反之隐藏。

优先级：`xl` > `lg` > `md` > `sm` > `xs`。