# Carousel 走马灯

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容；
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现；
- 常用于一组图片或卡片轮播。

## 组件元素

- `<wc-carousel/>`：走马灯组件容器元素，子元素只能是`<wc-carousel-item/>`；
- `<wc-carousel-item/>`：走马灯组件子项元素，其子级可以是任意元素。

## 示例

### 基础使用

组件必需添加`[length="number"]`属性值，其值用来记录`<wc-carousel-item/>`元素长度和创建默认面板指示点外，还用来兼容某些特殊场景；例如：动态渲染数据等。

<output data-lang="示例">
<wc-carousel length="3" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;" style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
</output>

```html
<!--
    [length]    @TODO 用来记录<wc-carousel-item/>元素长度，且该属性值必填
-->
<wc-carousel length="3">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
```

### 横向循环自动轮播

设置组件的`[loop=true]`属性值时，可循环轮播，建议`<wc-carousel-item/>`元素长度不少于`3`；

设置组件的`[autoplay=true]`属性值时，可自动轮播。

<output data-lang="示例">
<wc-carousel length="3" autoplay="true" loop="true" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
</output>

```html
<wc-carousel length="3" loop="true">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
```

### 竖向轮播

设置组件的`[vertical=true]`属性值时，为竖向轮播交互样式，且需要设置容器固定高度。

<output data-lang="示例">
<wc-carousel length="3" loop="true" vertical="true" style="max-width: 500px; height: 200px; margin: auto">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
</output>

```html
<wc-carousel length="3" loop="true" vertical="true" style="max-width: 500px; height: 200px; margin: auto">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
```

### 竖向循环轮播

设置组件的`[vertical=true]`、`[loop="true"]`、`[autoplay=true]`属性值。

<output data-lang="示例">
<wc-carousel length="3" autoplay="true" loop="true" vertical="true" style="max-width: 500px; height: 200px; margin: auto">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
</output>

```html
<wc-carousel length="3" autoplay="true" loop="true" vertical="true" style="max-width: 500px; height: 200px; margin: auto">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
```

### 滑动到指定索引

设置组件的`[index]`属性值，可自定义修改当前显示的`<wc-carousel-item/>`。

<output data-lang="示例">
<wc-carousel length="3" index="1" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
</output>

```html
<wc-carousel length="3" index="1" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
```

### 边距

设置组件的`[margin="15"]`属性值，可定义`<wc-carousel-item/>`之间的间隙宽度，适用`<wc-carousel-item/>`非`100%`宽度样式时的组件。

<output data-lang="示例">
<wc-carousel length="3" margin="15" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white; width: 80%;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white; width: 80%;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white; width: 80%;"></wc-carousel-item>
</wc-carousel>
</output>

```html
<wc-carousel length="3" margin="15" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white; width: 80%;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white; width: 80%;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white; width: 80%;"></wc-carousel-item>
</wc-carousel>
```

### 边距横向循环轮播

<output data-lang="示例">
<wc-carousel length="3" autoplay="true" loop="true" margin="15" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white; width: 80%;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white; width: 80%;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white; width: 80%;"></wc-carousel-item>
</wc-carousel>
</output>

```html
<wc-carousel length="3" autoplay="true" margin="15" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white; width: 80%;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white; width: 80%;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white; width: 80%;"></wc-carousel-item>
</wc-carousel>
```

### 面板指示点

设置组件的`[dots="false"]`属性值时，将不再自动创建默认样式

<output data-lang="示例">
<wc-carousel length="3" dots="false" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
</output>

```html
<wc-carousel length="3" dots="false" style="max-width: 500px; margin: auto;">
    <wc-carousel-item style="height: 200px; background: var(--color-info); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-success); color: white;"></wc-carousel-item>
    <wc-carousel-item style="height: 200px; background: var(--color-warning); color: white;"></wc-carousel-item>
</wc-carousel>
```

## 属性

| 属性名 | 描述 | 默认值 | DOM 操作 | 属性监听回调 |
| --- | --- | --- | --- | --- |
| `index` | 定义该组件当前索引值 | `0` | `true` | `true` |
| `length` | 定义该组件子项长度和创建默认面板指示点外，还用来兼容某些特殊场景；例如：动态渲染数据等 | - | `true` | - |
| `vertical` | 定义该组件是否竖向轮播 | `false` | - | - |
| `dots` | 定义该组件是否是否创建默认面板指示点 | `true` | - | - |
| `loop` | 定义该组件是否循环轮播，建议长度长度大于`3` | - | - | - |
| `autoplay` | 定义该组件是否自动轮播，只有`[loop=true]`时生效  | `false` | - | - |
| `threshold` | 定义该组件滑动切换下一面板阀值 | `50` | - | - |
| `margin` | 定义该组件子项之间的间隙，适合用子项宽度小于`100%`时  | `0` | - | - |

### DOM 操作

`[visible]`属性值支持直接`DOM`操作，如：

```javascript
let wcCarouselElement = document.querySelector("wc-carousel");
wcCarouselElement.index = 1;            // 定义该组件当前索引值
console.log(wcCarouselElement.index);   // 获取该组件当前索引值

wcCarouselElement.length = 1;            // 定义该组件子项长度和创建默认面板指示点外，还用来兼容某些特殊场景；例如：动态渲染数据等
console.log(wcCarouselElement.length);   // 获取子项长度
```

### 属性监听回调

`[index]`属性值发生变化时，将会触发`beforeChange`、`change`事件，并可在`event.detail`获取返回值。

```javascript
// 绑定变化前的事件监听
document.querySelector("wc-carousel").addEventListener("beforeChange", function (e) {
    /*
        currentIndex:   未发生改变时的索引
        newIndex:       改变后的新索引
     */
    console.log(e.detail);
});

// 绑定变化后的事件监听
document.querySelector("wc-carousel").addEventListener("change", function (e) {
    /*
        currentIndex:   改变后的的索引
        oldIndex:       改变前的索引
     */
    console.log(e.detail);
});
```