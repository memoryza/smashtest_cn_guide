# REPL

### 什么是REPL？

REPL标准的“读值-求值-输出的循环”，它是从命令行获取输入驱动smashtest的方式

```
$ smashtest -r
────────────────────────────────────────────────────────────────────────────────────────────
Smashtest 1.0.12 BETA

enter step to run it, enter or x = exit

> open chrome

Start:     open chrome
End:       open chrome     passed (1.085 s)

Start:     Use browser     [/usr/local/lib/node_modules/smashtest/packages/browser.smash:22]
End:       Use browser     passed (0 s)

Start:     Init     [/usr/local/lib/node_modules/smashtest/packages/browser.smash:64]
End:       Init     passed (0 s)

enter step to run it, enter or x = exit

> nav to 'site.com' ▊
```

可以通过`smashtest -r`或者 `smashtest --repl`或者 通过[debug](/yu-yan/diao-shi.md) 文件尝试

### 命令列表

输入一个步骤来运行它

> * 可以是一行步骤
> * 可以是多行代码块组成的步骤
> * 只输入一个{开始是一个匿名代码块的步骤
> * 不允许使用函数声明、挂钩或步骤块
> * 当浏览器打开时，一个快捷的步骤是\[&lt;elementfinder here&gt;&gt;\]。它将打印在浏览器控制台中找到的元素以及在您键入的控制台中找到的元素数。

* Ctrl + C = 退出

* Enter key = 运行下一步或者退出

* s = 跳过下一步

* p = 返回上一步
* r = 继续运行
* x = 退出
* .break= sometimes you get stuck, this gets you out
* .clear = 跳出并清理本地上下文
* .editor = 进入编辑器模式（ctrl+d 退出并执行，ctrl+c退出）
* .exit = 退出
* .help = 打印帮助信息
* .load= 从一个文件中加载js到当前REPL 会话中
* .save= 保存当前REPL会话中的所有命令到一个文件



