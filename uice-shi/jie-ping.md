# 截屏

在包含 `open [browser]`步骤的分支中的每个步骤前后都会自动截图。通过单击一个步骤，可以在报告中可以看到。

尽管屏幕截图有利于调试失败，但它会占用大量的磁盘空间，并减慢测试的执行速度。使用以下标志限制屏幕截图：

### --screenshots=\[true\|false\]

设置false可以禁止截屏

### --max-screenshots=\[N\]

截取不超过N张图

截图会正藏执行并随后删除 `--step-data`不计入N

### [--step-data=\[all/fail/none\]](/yun-xing-ce-shi/ming-ling-xing-xuan-xiang.md)

设置fail会保留所有失败分支的截图

设置none不保留截图



