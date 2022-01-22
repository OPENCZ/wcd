# Table 表格

重置默认表格样式，添加 Hover 样式、条纹样式。

## 示例

### 默认样式

<output data-lang="示例">
<table>
    <caption>学生登记</caption>
    <thead>
        <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>小明</td>
            <td>男</td>
            <td>19岁</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小红</td>
            <td>女</td>
            <td>19岁</td>
        </tr>
        <tr>
            <td>3</td>
            <td>小蓝</td>
            <td>女</td>
            <td>18岁</td>
        </tr>
        <tr>
            <td>4</td>
            <td>小黑</td>
            <td>男</td>
            <td>20岁</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>合计</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tfoot>
</table>
</output>

```html
<table>
  <caption>
    学生登记
  </caption>
  <thead>
    <tr>
      <th>#</th>
      <th>姓名</th>
      <th>性别</th>
      <th>年龄</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>小明</td>
      <td>男</td>
      <td>19岁</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>合计</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tfoot>
</table>
```

### 条纹

在`<table/>`标签上添加`.table-striped`样式类。

<output data-lang="示例">
<table class="table-striped">
    <caption>学生登记</caption>
    <thead>
        <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>小明</td>
            <td>男</td>
            <td>19岁</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小红</td>
            <td>女</td>
            <td>19岁</td>
        </tr>
        <tr>
            <td>3</td>
            <td>小蓝</td>
            <td>女</td>
            <td>18岁</td>
        </tr>
        <tr>
            <td>4</td>
            <td>小黑</td>
            <td>男</td>
            <td>20岁</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>合计</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tfoot>
</table>
</output>

```
<table class="table-striped">
    <caption>学生登记</caption>
    <thead>
        <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>小明</td>
            <td>男</td>
            <td>19岁</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>合计</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tfoot>
</table>
```

### Hover

在`<table/>`标签上添加`.table-hover`样式类。

<output data-lang="示例">
<table class="table-hover">
    <caption>学生登记</caption>
    <thead>
        <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>小明</td>
            <td>男</td>
            <td>19岁</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小红</td>
            <td>女</td>
            <td>19岁</td>
        </tr>
        <tr>
            <td>3</td>
            <td>小蓝</td>
            <td>女</td>
            <td>18岁</td>
        </tr>
        <tr>
            <td>4</td>
            <td>小黑</td>
            <td>男</td>
            <td>20岁</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>合计</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tfoot>
</table>
</output>

```
<table class="table-hover">
    <caption>学生登记</caption>
    <thead>
        <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>小明</td>
            <td>男</td>
            <td>19岁</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>合计</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tfoot>
</table>
```

## 样式类

在`table`元素上追加以下样式类

| 样式类           | 描述                         |
| ---------------- | ---------------------------- |
| `.table-hover`   | 表格主体鼠标移入时高亮样式类 |
| `.table-striped` | 表格主体条纹样式类           |

## CSS变量

| 变量名                  | 描述                       |
| ----------------------- | -------------------------- |
| `--color-table-header`  | 表头标签背景色样式         |
| `--color-table-striped` | 表格主体条纹背景色样式     |
| `--color-table-hover`   | 表格主体鼠标移入时高亮样式 |

[CSS变量使用与注意事项](/css-variable)
