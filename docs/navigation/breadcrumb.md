# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 组件元素

- `<wc-breadcrumb/>`：面包屑组件容器元素，子级只可接收`<wc-breadcrumb-item/>`元素；
- `<wc-breadcrumb-item/>`：面包屑子项元素，子级可接收任意元素。

## 示例

### 基础使用

<output data-lang="示例">
<wc-breadcrumb separator="/">
    <wc-breadcrumb-item>
        <a href="">用户中心</a>
    </wc-breadcrumb-item>
    <wc-breadcrumb-item>
        <a href="">个人资料</a>
    </wc-breadcrumb-item>
    <wc-breadcrumb-item>
        <a href="">修改昵称</a>
    </wc-breadcrumb-item>
</wc-breadcrumb>
</output>

```html
<!--
    [separator=xxx]           定义该组件子项分隔符；默认：“/”
-->
<wc-breadcrumb separator="/">
  <wc-breadcrumb-item>
    <a href="">用户中心</a>
  </wc-breadcrumb-item>
  <wc-breadcrumb-item>
    <a href="">个人资料</a>
  </wc-breadcrumb-item>
  <wc-breadcrumb-item>
    <a href="">修改昵称</a>
  </wc-breadcrumb-item>
</wc-breadcrumb>
```

### 自定义分隔符

<output data-lang="示例">
<wc-breadcrumb separator=">">
    <wc-breadcrumb-item>
        <a href="">用户中心</a>
    </wc-breadcrumb-item>
    <wc-breadcrumb-item>
        <a href="">个人资料</a>
    </wc-breadcrumb-item>
    <wc-breadcrumb-item>
        <a href="">修改昵称</a>
    </wc-breadcrumb-item>
</wc-breadcrumb>
</output>

设置组件的`[separator]`属性值

```html
<!--
    [separator=xxx]           定义该组件子项分隔符；默认：“/”
-->
<wc-breadcrumb separator=">">
  <wc-breadcrumb-item>
    <a href="">用户中心</a>
  </wc-breadcrumb-item>
  <wc-breadcrumb-item>
    <a href="">个人资料</a>
  </wc-breadcrumb-item>
  <wc-breadcrumb-item>
    <a href="">修改昵称</a>
  </wc-breadcrumb-item>
</wc-breadcrumb>
```

### 自定义颜色

在`<wc-breadcrumb/>`组件上重置`css`变量

<output data-lang="示例">
<style>
    wc-breadcrumb.color {
        --color-black: #000;
        --color-gray-light: #1890ff;
    }
</style>
<wc-breadcrumb class="color" separator=">">
    <wc-breadcrumb-item>
        <a href="">用户中心</a>
    </wc-breadcrumb-item>
    <wc-breadcrumb-item>
        <a href="">个人资料</a>
    </wc-breadcrumb-item>
    <wc-breadcrumb-item>
        <a href="">修改昵称</a>
    </wc-breadcrumb-item>
</wc-breadcrumb>
</output>

设置组件的`[separator]`属性值

```html
<!--
    [separator=xxx]           定义该组件子项分隔符；默认：“/”
-->
<wc-breadcrumb class="color" separator=">">
  <wc-breadcrumb-item>
    <a href="">用户中心</a>
  </wc-breadcrumb-item>
  <wc-breadcrumb-item>
    <a href="">个人资料</a>
  </wc-breadcrumb-item>
  <wc-breadcrumb-item>
    <a href="">修改昵称</a>
  </wc-breadcrumb-item>
</wc-breadcrumb>
```

```css
/*
    --color-gray-light  面包屑子项默认颜色变量
    --color-black       面包屑子项最后一级颜色变量
*/
wc-breadcrumb.color {
  --color-black: #000;
  --color-gray-light: #1890ff;
}
```

## 属性

| 属性值 | 描述 |
| --- | --- |
| `separator` | 在`<wc-breadcrumb/>`元素上定义的属性值，设置`<wc-breadcrumb-item/>`之间的分隔符，默认`/` |

## CSS变量

| 变量名 | 描述 |
| --- | --- |
| `--color-black` | `<wc-breadcrumb-item/>`最后一级颜色变量 |
| `--color-gray-light` | `<wc-breadcrumb-item/>`默认颜色变量 |

使用方法可参考[自定义颜色示例](/navigation/breadcrumb?id=自定义颜色)，或[CSS变量使用与注意事项](/css-variable)
