# CI/CD集成

### 测试服务

如果你想从服务器上运行测试，例如 selenium grid ，通过 `smashtest --test-server=[url]` 设置服务器地址。例如，[Selenium](https://selenium-python-zh.readthedocs.io/en/latest/api.html?highlight=grid)服务器默认运行在http://localhost:4444/wd/hub 上。

### 报告服务

报告默认输出到smashtest运行目录的 `./smashtest/report.html`，确认运行用户有访问`./smashtest`的权限。

确保运行期间报告页面可以接受即时更新， 设置运行smashtest的容器和用于socket访问的端口 `smashtest --report-domain=[domain:port]`

### Flakiness

当运行完smashtest，运行 `smashtest -s` \(或者  `smashtest --skip-passed=true`\)一次或者多次去运行失败的测试。

### 退出码

如果至少有一个分支失败，则`smashtest`进程退出，退出代码为1，否则为0。

### 非调试模式

如果文件中存在~、~~、$ 运行 smashtest --no-debug 会失败。这种情况下你会运行所有的测试（并且没有人提交他们的本地调试符）

