# Text 文本

定义常用文本样式类，例如字体大小、对齐方式

## 示例

### 字体大小

#### h1~h6

<output data-lang="示例">
<h1 class="margin-bottom-md">h1字体大小与使用 .font-size-xl 样式类字体大小一致，只是多了字体加粗</h1>
<h2 class="margin-bottom-md">h2字体大小与使用 .font-size-lg 样式类字体大小一致，只是多了字体加粗</h2>
<h3 class="margin-bottom-md">h3字体大小与使用 .font-size-md 样式类字体大小一致，只是多了字体加粗</h3>
<h4 class="margin-bottom-md">h4字体大小与使用 .font-size-sm 样式类字体大小一致，只是多了字体加粗</h4>
<h5 class="margin-bottom-md">h5字体大小与使用 .font-size 样式类字体大小一致，只是多了字体加粗</h5>
<h6>h6字体大小与使用 .font-size-xs 样式类字体大小一致，只是多了字体加粗</h6>
</output>

#### 不同尺寸

尺寸分为：`xl`、`lg`、`md`、`sm`、默认、`xs`

<output data-lang="示例">
<p class="font-size-xl">.font-size-xl 超大号字体样式类，与h1字体大小一致</p>
<p class="font-size-lg">.font-size-lg 大号字体样式类，与h2字体大小一致</p>
<p class="font-size-md">.font-size-md 中号字体样式类，与h3字体大小一致</p>
<p class="font-size-sm">.font-size-sm 小号字体样式类，与h4字体大小一致</p>
<p class="font-size">
  .font-size 默认字体大小样式类（全局默认字体大小），与h5字体大小一致
</p>
<p class="font-size-xs">.font-size-xs 超小号字体样式类，与h6字体大小一致</p>
</output>

### 文本对齐

<output data-lang="示例">
<p class="text-align-left">.text-align-left 文本左对齐样式类</p>
<p class="text-align-center">.text-align-center 文本居中对齐样式类</p>
<p class="text-align-right">.text-align-right 文本右对齐样式类</p>
</output>

## 样式类

### 字体大小

| 样式类 | 描述 |
| --- | --- |
| `.font-size-xl` | 超大号字体样式类，与`h1`字体大小一致 |
| `.font-size-lg` | 大号字体样式类，与`h2`字体大小一致 |
| `.font-size-md` | 中号字体样式类，与`h3`字体大小一致 |
| `.font-size-sm` | 小号字体样式类，与`h4`字体大小一致 |
| `.font-size` | 默认字体大小样式类（全局默认字体大小），与`h5`字体大小一致 |
| `.font-size-xs` | 超小号字体样式类，与`h6`字体大小一致 |

### 文本对齐

| 样式类 | 描述 |
| --- | --- |
| `.text-align-left` | 文本左对齐样式类 |
| `.text-align-center` | 文本居中对齐样式类 |
| `.text-align-right` | 文本右对齐样式类 |

## CSS变量

| 样式类 | 描述 |
| --- | --- |
| `--font-size-xl` | 超大号字体样式类，与`h1`字体大小一致 |
| `--font-size-lg` | 大号字体样式类，与`h2`字体大小一致 |
| `--font-size-md` | 中号字体样式类，与`h3`字体大小一致 |
| `--font-size-sm` | 小号字体样式类，与`h4`字体大小一致 |
| `--font-size` | 默认字体大小样式类（全局默认字体大小），与`h5`字体大小一致 |
| `--font-size-xs` | 超小号字体样式类，与`h6`字体大小一致 |

[CSS变量使用与注意事项](/css-variable)
