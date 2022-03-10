# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 示例

### 基础使用

设置组件`[type]`属性值定义`input`类型，同原生`input`标签的`[type]`属性。

设置组件`[placeholder]`属性值定义`input`类型，同原生`input`标签的`[placeholder]`属性。

<output data-lang="示例">
    <wc-input name="xxx" placeholder="请输入内容" type="text" clear="true"></wc-input>
</output>

```html
<!--
    [type]      设置组件输入框类型，同原生`input`标签的`[type]`属性
-->
<wc-input name="xxx" placeholder="请输入内容" type="text" label="xxxx"></wc-input>
```

### 标签占位符

设置组件`[label]`属性时，将替代`[placeholder]`占位内容显示，优先级比`[placeholder]`高。

<output data-lang="示例">
    <wc-input name="xxx" label="用户名" type="text" clear="true"></wc-input>
</output>

```html
<!--
    [label=xxx]      设置组件标签占位符，优先级比[placeholder]高
-->
<wc-input name="xxx" type="text" label="用户名"></wc-input>
```

### 默认值

设置组件的`[default-value]`属性时，可设置组件默认值。

<output data-lang="示例">
     <wc-input name="xxx" placeholder="请输入内容" default-value="该说点什么好呢？"></wc-input>
</output>

```html
<!--  
    [default-value=xxx] 设置组件默认值
-->
<wc-input name="xxx" placeholder="请输入内容" default-value="该说点什么好呢？"></wc-input>
```

### 清空值

设置组件的`[clear]`属性值为`true`时，点击清除图标按钮可清除`value`，该图标按钮将在`value`有值时显示，反之默认隐藏。

<output data-lang="示例">
     <wc-input name="xxx" placeholder="请输入内容" default-value="该说点什么好呢？" clear="true"></wc-input>
</output>

```html
<!--  
    [clear=true]    点击清除图标按钮可清除`value`，该图标按钮将在`value`有值时显示，反之默认隐藏
-->
<wc-input name="xxx" placeholder="请输入内容" default-value="该说点什么好呢？" clear="true"></wc-input>
```

### 查看密码

设置组件的`[view]`属性值为`true`时，点击预览图标按钮可查看组件的`value`，反之默认隐藏；该属性值只有在`[type=password]`时生效。

<output data-lang="示例">
     <wc-input name="xxx" type="password" placeholder="请输入密码" view="true"></wc-input>
</output>

```html
<!--  
    [view=true]     点击预览图标按钮可查看组件的`value`，反之默认隐藏；该属性值只有在`[type=password]`时生效。
-->
<wc-input name="xxx" type="password" placeholder="[clear=true]" view="true"></wc-input>
```

### 尺寸

设置组件的`[size]`属性值，可修改组件尺寸，可接收值有：`lg`、`sm`；不设置时为默认尺寸。

<output data-lang="示例">
    <div>
        <wc-input name="xxx" type="text" placeholder="大尺寸" size="lg"></wc-input>
    </div>
    <div class="margin-top-md margin-bottom-md">
        <wc-input name="xxx" type="text" placeholder="默认尺寸"></wc-input>
    </div>
    <div>
        <wc-input name="xxx" type="text" placeholder="小尺寸" size="sm"></wc-input>
    </div>
</output>

```html
<!--  
    [size=xxx]     设置组件尺寸，可接收值有：`lg`、`sm`；不设置时为默认尺寸
-->
<wc-input name="xxx" type="password" placeholder="[clear=true]" view="true"></wc-input>
```

### 对齐方式

设置组件的`[align]`属性值时，可设置`input`对齐方式，可接收值：`center`、`right`；默认左对齐。

<output data-lang="示例">
    <div class="margin-bottom-md">
        <wc-input name="xxx" type="text" placeholder="默认左对齐"></wc-input>
    </div>
    <div class="margin-bottom-md">
        <wc-input name="xxx" type="text" placeholder="居中对齐" align="center"></wc-input>
    </div>
    <div>
        <wc-input name="xxx" type="text" placeholder="右对齐" align="right"></wc-input>
    </div>
</output>

```html
<!--
    [align=xxx]     设置`input`对齐方式，可接收值：`center`、`right`；默认左对齐。
-->
<wc-input name="xxx" type="text" placeholder="默认左对齐"></wc-input>
```

### 最小值和最大值

设置组件的`[type=number]`属性时，可设置`[min=xx]`和`[max=xx]`属性限制最小值与最大值，将在`change`、`blur`事件触发时判断。

<output data-lang="示例">
    <wc-input name="xxx" type="number" placeholder="限制最小最大值" min="0" max="10"></wc-input>
</output>

```html
<!--
    [min=xxx]   当组件`[type=number]`属性时，输入框可输入最小值，将在`change`、`blur`事件触发时判断
    [max=xxx]   当组件`[type=number]`属性时，输入框可输入最大值，将在`change`、`blur`事件触发时判断
-->
<wc-input name="xxx" type="text" placeholder="限制最小最大值" length="10" count="true"></wc-input>
```

### 最大长度

设置组件的`[length]`属性值时，可限制输入最多字符长度。

当组件的`[length]`属性值存在时，可设置组件`[count]`属性值为`true`，是否显示数字计数器。

<output data-lang="示例">
    <wc-input name="xxx" type="text" placeholder="最多可输入10字符" length="10" count="true" clear="true"></wc-input>
</output>

```html
<!--
    [length=xxx]    限制最多可输入字符长度
    [count=true]    当组件的`[length]`属性值存在时，是否显示数字计数器
-->
<wc-input name="xxx" type="text" placeholder="最多可输入10字符" length="10" count="true"></wc-input>
```

### 边框

设置组件的`[border]`属性值，可接收值有：`none`、`top`、`right`、`bottom`、`left`；默认`1px`边框样式。

<output data-lang="示例">
    <div class="margin-bottom-md">
        <wc-input name="xxx" placeholder="默认边框"></wc-input>
    </div>
    <div class="margin-bottom-md">
        <wc-input name="xxx" placeholder="[border=none]" border="none"></wc-input>
    </div>
    <div class="margin-bottom-md">
        <wc-input name="xxx" placeholder="[border=top]" border="top"></wc-input>
    </div>
    <div class="margin-bottom-md">
        <wc-input name="xxx" placeholder="[border=right]" border="right"></wc-input>
    </div>
    <div class="margin-bottom-md">
        <wc-input name="xxx" placeholder="[border=bottom]" border="bottom"></wc-input>
    </div>
    <div>
        <wc-input name="xxx" placeholder="[border=left]" border="left"></wc-input>
    </div>
</output>

```html
<!--  
    [border=xxx]    组件框样式样式，可选值：`none`、`top`、`right`、`bottom`、`left`；默认`1px`边框样式
-->
<wc-input name="xxx" placeholder="请输入金额" border="bottom"></wc-input>
```

### 自动获取焦点

设置组件的`[autofocus]`属性值为`true`时，组件自动获取焦点。

<output data-lang="示例">
    <wc-input name="xxx" type="text" placeholder="请输入内容" autofocus="true"></wc-input>
</output>

```html
<!--
    [autofocus=true]     组件自动获取焦点
-->
<wc-input name="xxx" type="text" placeholder="请输入内容" autofocus="true"></wc-input>
```

### 禁用状态

设置组件的`[disabled]`属性值为`true`时，组件为禁用状态。

<output data-lang="示例">
    <wc-input name="xxx" type="text" placeholder="禁用状态" default-value="禁用状态" disabled="true"></wc-input>
</output>

```html
<!--
    [disabled=true]     组件为禁用状态
-->
<wc-input name="xxx" type="text" placeholder="请输入内容" disabled="true"></wc-input>
```

### 块级

设置组件的`[block]`属性值为`true`时，组件为宽度`100%`的块级样式。

<output data-lang="示例">
     <wc-input name="xxx" type="text" placeholder="请输入内容" block="true"></wc-input>
</output>

```html
<!--  
    [block=true]     组件为宽度`100%`的块级样式
-->
<wc-input name="xxx" type="text" placeholder="请输入内容" block="true"></wc-input>
```

### 前缀和后缀

添加前缀插槽元素（`[slot="prefix"]`）和后缀插槽元素（`[slot="suffix"]`）。

<output data-lang="示例">
    <wc-input name="xxx" placeholder="请输入金额" type="number" clear="true" align="center">
        <span slot="prefix">¥</span>
        <span slot="suffix">RMB</span>
    </wc-input>
</output>

```html
<wc-input name="xxx" placeholder="请输入金额" type="number" clear="true" align="center">
    <!-- 前缀插槽元素  -->
    <span slot="prefix">¥</span>

    <!-- 后缀插槽元素  -->
    <span slot="suffix">RMB</span>
</wc-input>
```

## 属性

| 属性名 | 描述 |
| --- | --- |
| `type` | 设置组件输入框类型，同原生`input`标签的`[type]`属性 |
| `placeholder` | 设置组件输入框展位内容，同原生`input`标签的`[placeholder]`属性 |
| `label` | 设置组件标签占位符，优先级比`[placeholder]`高 |
| `default-value` | 设置组件默认值 |
| `clear` | 设置组件是否可点击清除图标按钮清除`value`，该图标按钮将在`value`有值时显示，反之默认隐藏，可选值：`true` |
| `view` | 设置组件点击预览图标按钮可查看组件的`value`，反之默认隐藏；该属性值只有在`[type=password]`时生效，可选值：`true` |
| `block` | 设置组件是否为宽度`100%`的块级样式，可选值：`true` |
| `autofocus` | 设置组件是否自动获取焦点，可选值：`true` |
| `size` | 设置组件尺寸，可选值：`lg`、`sm`；不设置时为默认尺寸 |
| `align` | 设置`input`对齐方式，可接收值：`center`、`right`；默认左对齐 |
| `length` | 設置組件限制最多可输入字符长度 |
| `count` | 当组件`[length]`属性时，是否显示数字计数器，可选值：`true` |
| `min` | 当组件`[type=number]`属性时，输入框可输入最小值，将在`change`、`blur`事件触发时判断 |
| `max` | 当组件`[type=number]`属性时，输入框可输入最大值，将在`change`、`blur`事件触发时判断 |
| `border` | 设置组件的边框样式，可选值：`none`、`top`、`right`、`bottom`、`left`；默认`1px`边框样式 |

## slot

| 插槽名 | 描述 |
| --- | --- |
| `prefix` | 前缀插槽元素 |
| `suffix` | 后缀插槽元素 |

## CSS变量

| 变量名 | 描述 |
| --- | --- |
| `--color-border` | 组件边框色变量 |
| `--color-gray-light` | 组件最大长度计数器、占位符、清除字体图标、查看密码字体图标颜色变量 |

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

[CSS变量使用与注意事项](/css-variable)

## 事件

| 事件名 | 描述 |
| --- | --- |
| `change` | 组件`value`改变时出发 |
| `input` | 组件输入时出发 |
| `foucs` | 组件获取焦点时出发 |
| `blur` | 组件失去焦点时出发 |

在事件回调中，可通过`ev.detail`获取返回对象集
```javascript
document.querySelector('wc-input').addEventListener('change', function (ev) {
    console.log(ev.detail)
    // {
    //     value: 'xxxx',
    //     type: 'xxxx',
    //     disabled: 'xxxx',
    //     name: 'xxxx',
    // }
})
```
