# Select 选择框

点击/鼠标移入元素时，弹出窗气泡式的卡片浮层。

## 何时使用

- 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

## 组件元素

- `<wc-select/>`：选择框组件容器元素，其子级只能接收指定插槽元素。

## 示例

## 基础使用

<output data-lang="示例">
<wc-select 
    visible="true" 
    options='[{"name":"000","value":0},{"name":"111","value":1},{"name":"222","value":2},{"name":"333","value":3},{"name":"444","value":4},{"name":"555","value":5},{"name":"666","value":6},{"name":"777","value":7},{"name":"888","value":8},{"name":"999","value":9},{"name":"101010","value":10},{"name":"111111","value":11},{"name":"121212","value":12},{"name":"131313","value":13},{"name":"141414","value":14},{"name":"151515","value":15},{"name":"161616","value":16},{"name":"171717","value":17},{"name":"181818","value":18},{"name":"191919","value":19}]' 
    field-name="{label: 'name', value: 'value'}"
    placeholder="请选择"
>
</wc-select>
<wc-select 
    multiple="true" 
    options="[{name: 111, value: 1}, {name: 222, value: 2}, {name: 333, value: 3}, {name: 444, value: 4}, {name: 555, value: 5}, {name: 666, value: 6}]" 
    field-name="{label: 'name', value: 'value'}"
    placeholder="请选择"
>
</wc-select>
</output>

```html

```
