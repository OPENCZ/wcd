# Switch 开关

用于操作开或关两种状态之间的切换

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和[`checkbox`](/form/checkbox)的区别是，切换`Switch`会直接触发状态改变，而[`checkbox`](/form/checkbox)一般用于状态标记，需要和提交操作配合。

## 示例

### 基础使用

<output data-lang="示例">
    <wc-switch
        name="switch-item-1"
        value="xxx"
        size="48"
        checked="false"
        disabled="false">
    </wc-switch>
</output>

```html
<!--
    [name=xx]           定义该组件的名称
    [size=48]           定义该组件的尺寸，该值为数字类型；默认`48`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`;当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`
-->
<wc-switch
  name="switch-item-1"
  value="xxx"
  size="48"
  checked="false"
  disabled="false"
>
</wc-switch>
```

### 默认激活

设置`<wc-switch/>`元素的`[checked]`属性值为`true`

<output data-lang="示例">
    <wc-switch checked="true"></wc-switch>
</output>

```html
<!--
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<wc-switch checked="true"></wc-switch>
```

### 禁用状态

设置`<wc-switch/>`元素的`[disabled]`属性值为`true`

<output data-lang="示例">
    <wc-switch disabled="true"></wc-switch>
    <wc-switch disabled="true" checked="true"></wc-switch>
</output>

```html
<!--
    [disabled=false]    定义该组件是否禁用状态
-->
<wc-switch disabled="true"></wc-switch>
```

### 尺寸

设置`<wc-switch/>`元素的`[size]`属性值，默认`48`

<output data-lang="示例">
    <wc-switch size="48"></wc-switch>
    <wc-switch size="36"></wc-switch>
    <wc-switch size="30"></wc-switch>
</output>

```html
<!--
    [size=48]    定义该组件的尺寸
-->
<wc-switch size="48"></wc-switch>
```

### 自定义颜色

在`<wc-switch/>`组件上重置`css`变量

<output data-lang="示例">
    <style>
        wc-switch[value="switch-item-5"] {
            --color-border: #46c2ff;
            --color-disabled: #46c2ff;
            --color-theme: #46c2ff;
        }
        wc-switch[value="switch-item-6"] {
            --color-border: #09BB07;
            --color-disabled: #09BB07;
            --color-theme: #09BB07;
        }
        wc-switch[value="switch-item-7"] {
            --color-border: #f1c051;
            --color-disabled: #f1c051;
            --color-theme: #f1c051;
        }
        wc-switch[value="switch-item-8"] {
            --color-border: #e64340;
            --color-disabled: #e64340;
            --color-theme: #e64340;
        }
    </style>
    <wc-switch name="switch-item-5" value="switch-item-9" checked="true"></wc-switch>
    <wc-switch name="switch-item-5" value="switch-item-5"></wc-switch>
    <wc-switch name="switch-item-5" value="switch-item-6"></wc-switch>
    <wc-switch name="switch-item-5" value="switch-item-7"></wc-switch>
    <wc-switch name="switch-item-5" value="switch-item-8"></wc-switch>
</output>

```html
<wc-switch name="switch-item-5"></wc-switch>
```

```css
/*
    --color-border          默认边框颜色样式
    --color-theme           组件`[checked=true]`时边框与小圆点样式
    --color-disabled        组件`[disabled=true]`时边框与小圆点样式
    --color-disabled-bg     组件`[disabled=true]`时背景颜色样式
*/
wc-switch[name="switch-item-5"] {
  --color-border: #d9d9d9;
  --color-disabled: #ccc;
  --color-disabled-bg: #f5f5f5;
  --color-theme: #000;
}
```

## 属性

| 属性名 | 描述 | 默认值  | DOM 操作 | 属性监听回调 |
| --- | --- | --- | --- | --- |
| `size` | 定义该组件的尺寸，该值为数字类型 | `48` | - | - |
| `name` | 定义该组件的名称 | - | - | - |
| `value` | 定义该组件的值 | - | `true` | - |
| `checked` | 定义该组件是否选中状态；可接收`true`、`false` | `false` | `true` | `true` |
| `disabled` | 定义该组件是否禁用状态；可接收`true`、`false` | `false` | `true` | - |

### DOM 操作

`[value]`、`[checked]`、`[disabled]`这三个属性值支持直接`DOM`操作，如：

```javascript
let wcSwitchElement = document.querySelector("wc-switch");
wcSwitchElement.checked = true; // 设置选中状态
console.log(wcSwitchElement.checked); // 获取选中状态

wcSwitchElement.disabled = false; // 设置禁用状态
console.log(wcSwitchElement.disabled); // 获取禁用状态

wcSwitchElement.value = "switch-value"; // 设置value
console.log(wcSwitchElement.value); // 获取value
```

## 属性监听回调

`[checked]`属性值发生变化时，将会触发`change`事件，并可在`event.detail`获取`[checked]`值

```javascript
document.querySelector("wc-switch").addEventListener("change", function (e) {
  console.log(e.detail.checked);
});
```
