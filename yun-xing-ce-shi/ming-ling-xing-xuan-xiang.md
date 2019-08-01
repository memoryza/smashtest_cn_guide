# 命令行选项

### 命令行参数 vs 配置文件

参数可以通过命令行\(例如: `smashtest test.smash --headless=false --max-parallel=7`\)传递或者配置文件设置。

配置文件必须在smashtest运行的根目录配置smashtest.json:

```
{
    "headless": false,
    "max-parallel": 7
}
```

> 注: 当他们同时存在时，命令行参数覆盖配置文件的参数。

### 参数列表

##### --debug=\[hash\]

只有运行的分支会生成hash，在调试模式\(不会生成报告结果\)下忽略 $ 、~、分组和频率（分支执行的优先级，这里按照顺序执行）

##### --groups=\[value\] or --groups="group1, group2,...."

只运行指定[组](/yu-yan/fen-zu-yu-pin-lv.md)的分支。

一些组的名称是自动设置的（例如打开浏览器的动作，open chrome， group=chrome）,你可以通过设置`--groups=chrome`，`--groups=firefox`，`--groups=safari` ，`--groups=ie` ，`--groups=edge`仅采用某个浏览器运行。

##### --g:\[name\]=\[value\]

在运行分支前设置全量[变量](/yu-yan/bian-liang.md)

##### --headless=\[true\|false\]

重写headless行为，无论浏览器是否运行在无头浏览器模式下\(默认是无头模式，调试下headless=false\)

##### --help or -?

显示帮助提示

##### --max-parallel=\[N\]

同时运行不要超过5个分支\(在测试报告的页面可以看到\)。

如果你正在使用 selenium grid（例如，--test-server），请设置足够高，以便最大限度利用可用插槽\(功能\).

如果功能不可用，测试将锁定打来的浏览器\(==！测试阶段不要经常强退，浏览器锁定后只能强杀进程\)。

![](/assets/max-parallel.png)

##### --max-screenshots=\[N\]

默认没有限制，尽量不要设置，分支运行结束后截图将被删除（没有运行效果图了）

##### --min-frequency=\[high\|med\|low\]

设置运行分支频率，默认值:med

##### --no-debug

如果文件中包含$、~ 则运行失败，有助于防止在CI中进行调试。

##### --output-errors=\[true\|false\]

是否输出所有错误到控制台，默认值true.\(=false错误依旧输出控制台\)

当您正在开发测试并期望一些测试失败时是有益的（与-s一起使用会更好）。也适用于运行速度快且不希望每次都切换到报告的单元测试。

##### --p:\[name\]=\[value\]

设置[持久变量](/yu-yan/bian-liang.md)

##### --random=\[true\|false\]

设置随机运行分支

##### --repl or -r

参见[repl](/repl.md)

##### --report-domain=\[domain or domain:port\]

配置测试报告运行的域名，报表试试刷新。

端口:指定smashtest测试在那个端口运行，默认9000

域名:表明smashtest测试在那个运行运行，默认localhost（当需要集成至ci流程里则配置外部域名）

> 本地测试例子  smashtest chapter2/group.smash --report-domain=my.local.net:9000
>
> 1、本地host 配置 127.0.0.1 my.local.net
>
> 2、node运行Smaple/chapter2/domain.js
>
> 3、访问 [http://my.local.net:3000/](http://my.local.net:3000/)

##### ![](/assets/report-domain.png)--report-server=\[true\|false\]

启动服务期间是否运行实时更新，默认值true（设置为false时ws依旧会建立但不会动态拉上图的数据，最终运行完刷新页面才能看到测试结果）

##### --screenshots=\[true\|false\]

是否每一步之前或者之后都要截图，默认true

##### --skip-passed=\[true\|false\|filename\], -s, -a

不要运行已经通过上次通过的测试，已经通过的测试会携带到新的报告

当你运行新的测试或者更新用例或者修复中断的测试而不想把这个测试集都运行一遍，这个设置非常有用

--skip-passed=true 等同于 -s

> 不运行上次通过的分支，数据可以在./smashtest/passed-data查看

--skip-passed=false 等同于 -a

> 运行所有分支

--skip-passed=\[filename\]

> 基于指定文件记录，不运行上次通过的分支

##### --step-data=\[all\|fail\|none\]

all:报错所有步骤数据, fail:失败步骤数据，none:不保存，默认是all\(包括屏幕截图，有助于减小报告的大小\)

##### --test-server=\[url\]

本地测试服务地址（例如：[http://localhost:4444/wd/hub）](http://localhost:4444/wd/hub）)

##### --version or -V

查看smashtest版本

##### 更多内存

如果需要跟多内存，需要设置nodejs变量 `NODE_OPTIONS`

例如：在macos:`export NODE_OPTIONS="--max_old_space_size=[max MB to use]" && smashtest [files]`

