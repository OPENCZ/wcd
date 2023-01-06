# Grid 网格

`1`行`24`列网格系统。

## 示例

### 基础使用

<output data-lang="示例">
<wc-row>
    <wc-row>
        <!-- 屏幕大于1200px时显示 -->
        <wc-col span="{lg: '200px'}">
            <div style="background: var(--color-theme); height: 40px;">111</div>
        </wc-col>
        <!-- 屏幕大于1200px时占18列，反之24列 -->
        <wc-col span="{xs: 24, lg: 'flex'}" layout="column" style="height: 400px">
            <div style="background: var(--color-info); height: 40px;"></div>
            <div style="background: var(--color-success); height: 40px; flex: 1;"></div>
            <div style="background: var(--color-info); height: 40px;"></div>
        </wc-col>
    </wc-row>
    <wc-row>
        <!-- 屏幕大于1200px时显示 -->
        <wc-col span="{xs: 24, lg: 0}">
            <div style="background: var(--color-success); height: 40px;">123</div>
        </wc-col>
    </wc-row>
</wc-row>
</output>
