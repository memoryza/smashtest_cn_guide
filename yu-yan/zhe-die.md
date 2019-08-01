# 折叠

### 折叠 \(+\)

```
* Select best item from dropdown +   // function calls here will be collapsed by default in the report
    Click 'dropdown'
        Scroll to 'best item'
            Click 'best item'

Some big operation with lots of steps +   // this function call will be collapsed by default in the report
```

如果+出现在报错的函数中或者函数当前正在运行，它将自动取消折叠。

建议使用+标记前提条件步骤，因为它们的详细信息不是测试的核心。

### 隐藏 \(+?\)

```
* Init +?   // function calls here will be hidden in the report
    Do some internal stuff

// this function call will be hidden in the report
Some internal thing somebody reading the report doesn't care about +?
```

如果+出现在报错的函数中，它将显示在报告中

