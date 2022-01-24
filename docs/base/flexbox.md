# Flexbox 弹性盒模型

定义常用弹性盒模型对齐方式样式类，例如：水平对齐方式、居中对齐方式等样式类

## 示例

### 横轴对齐（水平对齐）

<output data-lang="示例">
<div class="border padding-md margin-bottom-md justify-content-flex-start">
  <div>.justify-content-flex-start 子项横轴起点对齐（水平左对齐）样式类</div>
</div>

<div class="border padding-md margin-bottom-md justify-content-center">
  <div>.justify-content-center 子项横轴中心对齐（水平居中对齐）样式类</div>
</div>

<div class="border padding-md margin-bottom-md justify-content-flex-end">
  <div>.justify-content-flex-end 子项横轴终点对齐（水平右对齐）样式类</div>
</div>

<div class="border padding-md margin-bottom-md justify-content-space-between">
  <div>.justify-content-space-between</div>
  <div>子项横轴两端对齐（水平两端对齐）样式类</div>
</div>

<div class="border padding-md justify-content-space-around">
  <div>.justify-content-space-around</div>
  <div>子项横轴分散对齐（水平分散对齐）样式类</div>
</div>
</output>

### 多子项竖轴对齐（垂直对齐）

子项默认宽度百分百，且自动换行

<output data-lang="示例">
<div
  class="border padding-md margin-bottom-md align-content-flex-start"
  style="height: 100px;"
>
  <div>.align-content-flex-start</div>
  <div>多子项竖轴起点对齐（垂直顶部对齐）样式类</div>
</div>

<div
  class="border padding-md margin-bottom-md align-content-center"
  style="height: 100px;"
>
  <div>.align-content-center</div>
  <div>多子项竖轴中心对齐（垂直居中对齐）样式类</div>
</div>

<div
  class="border padding-md margin-bottom-md align-content-flex-end"
  style="height: 100px;"
>
  <div>.align-content-flex-end</div>
  <div>多子项竖轴终点对齐（垂直底部对齐）样式类</div>
</div>

<div
  class="border padding-md margin-bottom-md align-content-space-between"
  style="height: 100px;"
>
  <div>.align-content-space-between</div>
  <div>多子项竖轴两端对齐（垂直两端对齐）样式类</div>
</div>

<div
  class="border padding-md align-content-space-around"
  style="height: 100px;"
>
  <div>.align-content-space-around</div>
  <div>多子项竖轴分散对齐（垂直分散对齐）样式类</div>
</div>
</output>

### 单子项竖轴对齐（垂直对齐）

<output data-lang="示例">
<div
  class="border padding-md margin-bottom-md align-items-flex-start"
  style="height: 100px;"
>
  <div>.align-items-flex-start 子项竖轴起点对齐（垂直顶部对齐）样式类</div>
</div>

<div
  class="border padding-md margin-bottom-md align-items-center"
  style="height: 100px;"
>
  <div>.align-items-center 子项竖轴中心对齐（垂直居中对齐）样式类</div>
</div>

<div
  class="border padding-md margin-bottom-md align-items-flex-end"
  style="height: 100px;"
>
  <div>.align-items-flex-end 子项竖轴终点对齐（垂直底部对齐）样式类</div>
</div>
</output>

## 样式类

### 横轴对齐（水平对齐）

| 样式类 | 描述 |
| --- | --- |
| `.justify-content-flex-start` | 子项横轴起点对齐（水平左对齐）样式类 |
| `.justify-content-center` | 子项横轴中心对齐（水平居中对齐）样式类 |
| `.justify-content-flex-end` | 子项横轴终点对齐（水平右对齐）样式类 |
| `.justify-content-space-between` | 子项横轴两端对齐（水平两端对齐）样式类 |
| `.justify-content-space-around` | 子项横轴分散对齐（水平分散对齐）样式类 |

### 横轴对齐（水平对齐）

| 样式类 | 描述 |
| --- | --- |
| `.align-content-flex-start` | 多子项竖轴起点对齐（垂直顶部对齐）样式类 |
| `.align-content-center` | 多子项竖轴中心对齐（垂直居中对齐）样式类 |
| `.align-content-flex-end` | 多子项竖轴终点对齐（垂直底部对齐）样式类 |
| `.align-content-space-between` | 多子项竖轴两端对齐（垂直两端对齐）样式类 |
| `.align-content-space-around ` | 多子项竖轴分散对齐（垂直分散对齐）样式类 |

### 单子项竖轴对齐（垂直对齐）

| 样式类 | 描述 |
| --- | --- |
| `.align-items-flex-start` | 子项竖轴起点对齐（垂直顶部对齐）样式类 |
| `.align-items-center` | 子项竖轴中心对齐（垂直居中对齐）样式类 |
| `.align-items-flex-end` | 子项竖轴终点对齐（垂直底部对齐）样式类 |
