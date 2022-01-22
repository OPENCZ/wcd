# Checkbox 复选框

用于多个同`[name]`属性值组件中切换选中状态，且只选中当前。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和[`Switch`](/form/switch)类似。区别在于切换[`Switch`](/form/switch)会直接触发状态改变，而`checkbox`一般用于状态标记，需要和提交操作配合；
- 当组件用于全选/反选场景时，可监听`change`事件返回的`ev.detail.isCheckedAll`、`ev.detail.checkedLists`字段，该字段可标识同组组件是否全选与选中列表数据。

## 示例

### 基础使用

<output data-lang="示例">
    <wc-checkbox name="checkbox-item-1" value="1">复选框一</wc-checkbox>
    <wc-checkbox name="checkbox-item-1" value="2">复选框一</wc-checkbox>
    <wc-checkbox name="checkbox-item-1" value="3">复选框一</wc-checkbox>
</output>
<script>
document.querySelectorAll("wc-checkbox").forEach(item => {
    item.addEventListener("change", function (ev) {
        console.log(ev.detail);
    })
})
</script>

```html
<!--
    [name=xx]           定义该组件的名称；同属性值的所有组件中切换选中状态，且只选中当前
    [size=32]           定义该组件的尺寸，该值为数字类型；默认`32`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`;当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<wc-checkbox
  name="checkbox-item-1"
  value="xxx"
  size="32"
  checked="false"
  disabled="false"
>
  复选框
</wc-checkbox>
```

### 默认激活
设置`<wc-checkbox/>`元素的`[checked]`属性值为`true`

<output data-lang="示例">
    <wc-checkbox class="margin-right-md" name="checkbox-item-2" checked="true">
        复选框一
    </wc-checkbox>
    <wc-checkbox class="margin-right-md" name="checkbox-item-2">
        复选框二
    </wc-checkbox>
    <wc-checkbox class="margin-right-md" name="checkbox-item-2">
        复选框三
    </wc-checkbox>
</output>

```html
<!--
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<wc-checkbox name="checkbox-item-2" checked="true"> 复选框 </wc-checkbox>
```

### 禁用状态

设置`<wc-checkbox/>`元素的`[disabled]`属性值为`true`

<output data-lang="示例">
    <wc-checkbox name="checkbox-item-3" disabled="true">禁用状态</wc-checkbox>
    <wc-checkbox name="checkbox-item-3" disabled="true" checked="true">禁用状态</wc-checkbox>
</output>

```html
<!--
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<wc-checkbox disabled="true"> 禁用状态 </wc-checkbox>
```

### 尺寸

设置`<wc-checkbox/>`元素的`[size]`属性值，默认`32`

<output data-lang="示例">
    <wc-checkbox name="checkbox-item-4" size="40">40</wc-checkbox>
    <wc-checkbox name="checkbox-item-4" size="32">32</wc-checkbox>
    <wc-checkbox name="checkbox-item-4" size="28">28</wc-checkbox>
</output>

```html
<!--
    [size=32]    定义该组件的尺寸，该值为数字类型；默认`32`
-->
<wc-checkbox name="checkbox-item-4" size="32"></wc-checkbox>
```

### 自定义颜色

在`<wc-checkbox/>`组件上重置`css`变量

<output data-lang="示例">
    <style>
        wc-checkbox[value="checkbox-item-5"] {
            --color-border: #46c2ff;
            --color-disabled: #46c2ff;
            --color-theme: #46c2ff;
        }
        wc-checkbox[value="checkbox-item-6"] {
            --color-border: #09BB07;
            --color-disabled: #09BB07;
            --color-theme: #09BB07;
        }
        wc-checkbox[value="checkbox-item-7"] {
            --color-border: #f1c051;
            --color-disabled: #f1c051;
            --color-theme: #f1c051;
        }
        wc-checkbox[value="checkbox-item-8"] {
            --color-border: #e64340;
            --color-disabled: #e64340;
            --color-theme: #e64340;
        }
    </style>
    <wc-checkbox name="checkbox-item-5" value="checkbox-item-9" checked="true"></wc-checkbox>
    <wc-checkbox name="checkbox-item-5" value="checkbox-item-5"></wc-checkbox>
    <wc-checkbox name="checkbox-item-5" value="checkbox-item-6"></wc-checkbox>
    <wc-checkbox name="checkbox-item-5" value="checkbox-item-7"></wc-checkbox>
    <wc-checkbox name="checkbox-item-5" value="checkbox-item-8"></wc-checkbox>
</output>

```html
<wc-checkbox name="checkbox-item-5"></wc-checkbox>
```

```css
/*
    --color-border          默认边框颜色样式
    --color-theme           组件`[checked=true]`时边框与小圆点样式
    --color-disabled        组件`[disabled=true]`时边框与小圆点样式
    --color-disabled-bg     组件`[disabled=true]`时背景颜色样式
*/
wc-checkbox[name="checkbox-item-5"] {
  --color-border: #d9d9d9;
  --color-disabled: #ccc;
  --color-disabled-bg: #f5f5f5;
  --color-theme: #000;
}
```

## 属性

| 属性名     | 描述                                          | 默认值  | DOM 操作 | 属性监听回调 |
| ---------- | --------------------------------------------- | ------- | -------- | ------------ |
| `size`     | 定义该组件的尺寸，该值为数字类型              | `48`    | -        | -            |
| `name`     | 定义该组件的名称                              | -       | -        | -            |
| `value`    | 定义该组件的值                                | -       | `true`   | -            |
| `checked`  | 定义该组件是否选中状态；可接收`true`、`false` | `false` | `true`   | `true`       |
| `disabled` | 定义该组件是否禁用状态；可接收`true`、`false` | `false` | `true`   | -            |

### DOM 操作

`[value]`、`[checked]`、`[disabled]`这三个属性值支持直接`DOM`操作，如：

```javascript
let wccheckboxElement = document.querySelector("wc-checkbox");
wccheckboxElement.checked = true; // 设置选中状态
console.log(wccheckboxElement.checked); // 获取选中状态

wccheckboxElement.disabled = false; // 设置禁用状态
console.log(wccheckboxElement.disabled); // 获取禁用状态

wccheckboxElement.value = "checkbox-value"; // 设置value
console.log(wccheckboxElement.value); // 获取value
```

### 属性监听回调

`[checked]`属性值发生变化时，将会触发`change`事件，并可在`event.detail`获取返回值

```javascript
document.querySelector("wc-checkbox").addEventListener("change", function (e) {
  // {
  //     name: "xxx",                 组件[name]属性值
  //     value: "xxx",                组件[value]属性值
  //     checked: true,               组件[checked]属性值
  //     disabled: false,             组件[disabled]属性值
  //     isCheckedAll: false,         同[name]属性值的组件是否全部选中，适用于全选/反选场景
  //     checkedLists: false,         同[name]属性值的所有选中状态组件的数据
  // }
  console.log(e.detail);
});
```

## CSS变量

| 变量名                | 描述                                    |
| --------------------- | --------------------------------------- |
| `--color-border`      | 默认边框颜色样式                        |
| `--color-theme`       | 组件`[checked=true]`时边框与小圆点样式  |
| `--color-disabled`    | 组件`[disabled=true]`时边框与小圆点样式 |
| `--color-disabled-bg` | 组件`[disabled=true]`时背景颜色样式     |

使用方法可参考[自定义颜色示例](/form/checkbox?id=自定义颜色)，或[CSS变量使用与注意事项](/css-variable)
