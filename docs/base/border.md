# Border 边框

定义常用边框样式类，例如：`1px`、圆角、椭圆、圆形等边框样式类

## 示例

### 1PX 边框

定义默认、上、右、下、左`1px`边框样式类

#### 通用场景

该样式类的边框色与`input`、`button`、`textarea`、`select`等元素的边框色一致

<output data-lang="示例">
    <div
      class="border align-items-center justify-content-center"
      style="height: 40px;"
    >
      .border 1px边框样式类
    </div>
    
    <div class="border-top" style="height: 40px;margin: 10px 0;">
      .border-top 1px顶部边框样式类
    </div>
    
    <div
      class="border-right justify-content-flex-end align-content-center"
      style="height: 40px;"
    >
      .border-right 1px右边边框样式类
    </div>
    
    <div
      class="border-bottom align-content-flex-end"
      style="margin: 10px 0;height: 40px;"
    >
      .border-bottom 1px底部边框样式类
    </div>
    
    <div class="border-left align-content-center" style="height: 40px;">
      .border-left 1px左边边框样式类
    </div>
</output>

### 浅色边框

该样式类的边框色比上述的要浅很多，一般常用于列表分割等场景

<output data-lang="示例">
<div
  class="border-light align-items-center justify-content-center"
  style="height: 40px;"
>
  .border 1px边框样式类
</div>

<div class="border-top-light" style="height: 40px;margin: 10px 0;">
  .border-top 1px顶部边框样式类
</div>

<div
  class="border-right-light justify-content-flex-end align-content-center"
  style="height: 40px;"
>
  .border-right 1px右边边框样式类
</div>

<div
  class="border-bottom-light align-content-flex-end"
  style="margin: 10px 0;height: 40px;"
>
  .border-bottom 1px底部边框样式类
</div>

<div class="border-left-light align-content-center" style="height: 40px;">
  .border-left 1px左边边框样式类
</div>
</output>

### 圆角

<output data-lang="示例">
<div class="align-items-center">
  圆角(.border-radius)：<span class="border-radius" style="width: 40px; height: 40px; background: #eee;"></span>
</div>
<div class="align-items-center margin-top-md">
  椭圆(.border-oval)：<span class="border-oval margin-right-md margin-left-md" style="width: 100px; height: 40px; background: #eee;"></span>
</div>
<div class="align-items-center margin-top-md">
  圆(.border-round)：<div class="border-round" style="width: 40px; height: 40px; background: #eee;"></div>
</div>
</output>

## 样式类
### 1px边框

| 样式类 | 描述 |
| --- | --- |
| `.border` | `1px`边框样式类 |
| `.border-top` | `1px`顶部边框样式类 |
| `.border-right` | `1px`右边边框样式类 |
| `.border-bottom` | `1px`底部边框样式类 |
| `.border-left` | `1px`左边边框样式类 |

### 1px浅色边框

| 样式类 | 描述 |
| --- | --- |
| `.border-light` | `1px`边框样式类 |
| `.border-top-light` | `1px`顶部边框样式类 |
| `.border--light` | `1px`右边边框样式类 |
| `.border-bottom-light` | `1px`底部边框样式类 |
| `.border-left-light` | `1px`左边边框样式类 |

### 圆角

| 样式类 | 描述 |
| --- | --- |
| `.border-radius` | 圆角边框样式类 |
| `.border-oval` | 椭圆边框样式类 |
| `.border-round` | 圆形边框样式类 |

## CSS变量

| 样式类 | 描述 |
| --- | --- |
| `--border-1px-width` | `1px`边框宽度变量设置 |
| `--color-border` | `1px`边框颜色变量设置 |
| `--color-border-light` | `1px`浅色边框颜色变量设置 |
| `--border-radius` | 圆角边框变量设置 |

[CSS变量使用与注意事项](/css-variable)
