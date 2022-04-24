# Radio 单选框

用于多个同`[name]`属性值组件中切换选中状态，且只选中当前。

## 何时使用

- 用于在多个备选项中选中单个状态；
- 和[`Switch`](/form/switch)的区别是，`Radio`所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 组件元素

- `<wc-radio/>`：单选框组件容器元素，其子级可接收文本。

## 示例

### 基础使用

<output data-lang="示例">
<div>
    <wc-radio name="radio-item-1">单选框一</wc-radio>
    <wc-radio name="radio-item-1">单选框一</wc-radio>
    <wc-radio name="radio-item-1">单选框一</wc-radio>
</div>
</output>

```html
<!--
    [name=xx]           定义该组件的名称；同属性值的所有组件中切换选中状态，且只选中当前
    [size=32]           定义该组件的尺寸，该值为数字类型；默认`32`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`;当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<wc-radio
  name="radio-item-1"
  value="xxx"
  size="32"
  checked="false"
  disabled="false"
>
  单选框
</wc-radio>
```

### 默认激活

设置`<wc-radio/>`元素的`[checked]`属性值为`true`

<output data-lang="示例">
    <ul class="clear-both">
        <li class="margin-right-md float-left">
            <wc-radio name="radio-item-2" checked="true">
                单选框一
            </wc-radio>
        </li>
        <li class="margin-right-md float-left">
            <wc-radio name="radio-item-2">
                单选框二
            </wc-radio>
        </li>
        <li class="margin-right-md float-left">
            <wc-radio name="radio-item-2">
                单选框三
            </wc-radio>
        </li>
    </ul>
</output>

```html
<!--
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<wc-radio name="radio-item-2" checked="true"> 单选框 </wc-radio>
```

### 禁用状态

设置`<wc-radio/>`元素的`[disabled]`属性值为`true`

<output data-lang="示例">
    <wc-radio name="radio-item-3" disabled="true">禁用状态</wc-radio>
    <wc-radio name="radio-item-3" disabled="true" checked="true">禁用状态</wc-radio>
</output>

```html
<!--
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<wc-radio disabled="true"> 禁用状态 </wc-radio>
```

### 尺寸

设置`<wc-radio/>`元素的`[size]`属性值，默认`32`

<output data-lang="示例">
    <wc-radio name="radio-item-4" size="40">40</wc-radio>
    <wc-radio name="radio-item-4" size="32">32</wc-radio>
    <wc-radio name="radio-item-4" size="28">28</wc-radio>
</output>

```html
<!--
    [size=32]    定义该组件的尺寸，该值为数字类型；默认`32`
-->
<wc-radio name="radio-item-4" size="32"></wc-radio>
```

### 自定义颜色

在`<wc-radio/>`组件上重置`css`变量

<output data-lang="示例">
    <style>
        wc-radio[value="radio-item-5"] {
            --color-border: #46c2ff;
            --color-disabled: #46c2ff;
            --color-theme: #46c2ff;
        }
        wc-radio[value="radio-item-6"] {
            --color-border: #09BB07;
            --color-disabled: #09BB07;
            --color-theme: #09BB07;
        }
        wc-radio[value="radio-item-7"] {
            --color-border: #f1c051;
            --color-disabled: #f1c051;
            --color-theme: #f1c051;
        }
        wc-radio[value="radio-item-8"] {
            --color-border: #e64340;
            --color-disabled: #e64340;
            --color-theme: #e64340;
        }
    </style>
    <wc-radio name="radio-item-5" value="radio-item-9" checked="true"></wc-radio>
    <wc-radio name="radio-item-5" value="radio-item-5"></wc-radio>
    <wc-radio name="radio-item-5" value="radio-item-6"></wc-radio>
    <wc-radio name="radio-item-5" value="radio-item-7"></wc-radio>
    <wc-radio name="radio-item-5" value="radio-item-8"></wc-radio>
</output>

```html
<wc-radio name="radio-item-5"></wc-radio>
```

```css
/*
    --color-border          默认边框颜色样式
    --color-theme           组件`[checked=true]`时边框与小圆点样式
    --color-disabled        组件`[disabled=true]`时边框与小圆点样式
    --color-disabled-bg     组件`[disabled=true]`时背景颜色样式
*/
wc-radio[name="radio-item-5"] {
  --color-border: #d9d9d9;
  --color-disabled: #ccc;
  --color-disabled-bg: #f5f5f5;
  --color-theme: #000;
}
```

## 属性

| 属性名 | 描述 | 默认值  | DOM 操作 | 属性监听回调 |
| --- | --- | --- | --- | --- |
| `size` | 定义该组件的尺寸，该值为数字类型 | `32` | - | - |
| `name` | 定义该组件的名称 | - | - | - |
| `value` | 定义该组件的值 | - | `true` | - |
| `checked` | 定义该组件是否选中状态；可接收`true`、`false` | `false` | `true` | `true` |
| `disabled` | 定义该组件是否禁用状态；可接收`true`、`false` | `false` | `true` | - |

### DOM 操作

`[value]`、`[checked]`、`[disabled]`这三个属性值支持直接`DOM`操作，如：

```javascript
let wcRadioElement = document.querySelector("wc-radio");
wcRadioElement.checked = true; // 设置选中状态
console.log(wcRadioElement.checked); // 获取选中状态

wcRadioElement.disabled = false; // 设置禁用状态
console.log(wcRadioElement.disabled); // 获取禁用状态

wcRadioElement.value = "radio-value"; // 设置value
console.log(wcRadioElement.value); // 获取value
```

### 属性监听回调

`[checked]`属性值发生变化时，将会触发`change`事件，并可在`event.detail`获取返回值

```javascript
document.querySelector("wc-radio").addEventListener("change", function (e) {
  console.log(e.detail.checked);
});
```

## CSS变量

| 变量名                | 描述                                    |
| --------------------- | --------------------------------------- |
| `--color-border`      | 默认边框颜色样式                        |
| `--color-theme`       | 组件`[checked=true]`时边框与小圆点样式  |
| `--color-disabled`    | 组件`[disabled=true]`时边框与小圆点样式 |
| `--color-disabled-bg` | 组件`[disabled=true]`时背景颜色样式     |

使用方法可参考[自定义颜色示例](/form/radio?id=自定义颜色)，或[CSS变量使用与注意事项](/css-variable)
