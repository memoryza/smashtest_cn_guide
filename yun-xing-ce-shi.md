# 运行测试

### 命令行

```
smashtest [files] [options]
```

**files**: 一个.smash结尾的文件名

**options**: 请[参见](/yun-xing-ce-shi/ming-ling-xing-xuan-xiang.md)

当用smastest执行当前目录的所有\*.smash文件运行会将所有的文件链接到一个文件中，缩进为0的内容所有文件都可以访问（例如 函数声明），但不会运行子目录中的.smash文件。

![](/assets/run-all-test.png)

### 分支排序

分支按[频率](/yu-yan/fen-zu-yu-pin-lv.md)从高到底的顺序运行.

否则，分支将按照随机方式运行，原因:

1. 你可能运行大量测试，但可以随时停止并且在不同函数功能获取好的样本；
2. 在给定时间内使用多种浏览器和设备，最大化的利用grid的能力（例如 [selenium grid](https://wizardforcel.gitbooks.io/selenium-doc/official-site/selenium-grid.html)）

> 注： --random=false 关闭随机

### 无头浏览器

UI测试默认会运行无头浏览器，除非你进行调试（这种情况下浏览器可见，默认情况下chrome启动无头会闪一下），其他浏览器不支持无头浏览器，因此一直显示。

> 通过--headless=true\|false 控制





