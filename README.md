> 本仓库基于[smashtest](https://github.com/smashtestio/smashtest)学习和翻译，其中增加了学习过程中写了一些例子在 sample下

# Smashtest介绍

> ###### Smashtest是一种快速描述和部署测试用例的语言。

它以树形结构写测试用例，极大的加速你的自动化测试用例速度;树代表我们在测试时的想法。它们允许我们列出从任何给定点分支的所有排列。

* 多浏览器和设备支持
* 支持UI和API测试
* 并行运行测试用例
* 步骤可读性强
* 友好的在线文档
* 支持本地运行和集成至CI/CD

### 例子

```
Open Chrome
Open Firefox
Open Safari

    Navigate to 'site.com'

        Click 'Sign In'

            Type {username:} into 'username box'

                {username} is 'joe'
                {username} is 'bob'
                {username} is 'mary'

                    Verify success

                {username} is 'baduser'

                    Verify error
```

### 运行情况

```
Test Case 1                        Test Case 2                        Test Case 3
-----------                        -----------                        -----------
Open Chrome                        Open Firefox                       Open Safari
Navigate to 'site.com'             Navigate to 'site.com'             Navigate to 'site.com'
Click ['Sign In']                  Click ['Sign In']                  Click ['Sign In']
Type 'joe' into [username box]     Type 'joe' into [username box]     Type 'joe' into [username box]
Verify success                     Verify success                     Verify success


Test Case 4                        Test Case 5                        Test Case 6
-----------                        -----------                        -----------
Open Chrome                        Open Firefox                       Open Safari
Navigate to 'site.com'             Navigate to 'site.com'             Navigate to 'site.com'
Click ['Sign In']                  Click ['Sign In']                  Click ['Sign In']
Type 'bob' into [username box]     Type 'bob' into [username box]     Type 'bob' into [username box]
Verify success                     Verify success                     Verify success


Test Case 7                        Test Case 8                        Test Case 9
-----------                        -----------                        -----------
Open Chrome                        Open Firefox                       Open Safari
Navigate to 'site.com'             Navigate to 'site.com'             Navigate to 'site.com'
Click ['Sign In']                  Click ['Sign In']                  Click ['Sign In']
Type 'mary' into [username box]    Type 'mary' into [username box]    Type 'mary' into [username box]
Verify success                     Verify success                     Verify success


Test Case 10                       Test Case 11                       Test Case 12
------------                       ------------                       ------------
Open Chrome                        Open Firefox                       Open Safari
Navigate to 'site.com'             Navigate to 'site.com'             Navigate to 'site.com'
Click ['Sign In']                  Click ['Sign In']                  Click ['Sign In']
Type 'baduser' into [username box] Type 'baduser' into [username box] Type 'baduser' into [username box]
Verify error                       Verify error                       Verify error
```

### 运行代码

```
Test Case 1
-----------
let driver = await new Builder().forBrowser('chrome').build();
await driver.get('http://site.com');
let signInButton = await driver.findElement(By.id('#sign-in'));
await signInButton.click();
await driver.wait(until.elementLocated(By.id('#username-box')), 10000);
let usernameBox = await driver.findElement(By.id('#username-box'));
await usernameBox.sendKeys('joe');
await driver.wait(until.elementLocated(By.id('#success-element')), 10000);


Test Case 2
-----------
let driver = await new Builder().forBrowser('firefox').build();
await driver.get('http://site.com');
let signInButton = await driver.findElement(By.id('#sign-in'));
await signInButton.click();
await driver.wait(until.elementLocated(By.id('#username-box')), 10000);
let usernameBox = await driver.findElement(By.id('#username-box'));
await usernameBox.sendKeys('joe');
await driver.wait(until.elementLocated(By.id('#success-element')), 10000);


etc.
```

### 安装

```
        npm i -g smashtest
```

### 文档

* [介绍](introduce.md)
* [开始](chapter1-setup.md)
  * [写第一个用例](chapter1-writecase.md)
  * [调试与学习](chapter1-debugandlearn.md)
  * [基础语言语法](charpter1-syntax.md)
* [运行测试](yun-xing-ce-shi.md)
  * [命令行选项](yun-xing-ce-shi/ming-ling-xing-xuan-xiang.md)
  * [选择性测试运行](yun-xing-ce-shi/xuan-ze-xing-ce-shi-yun-xing.md)
  * [CI/CD集成](yun-xing-ce-shi/cicdji-cheng.md)
* [运行报告](yun-xing-bao-gao.md)
* [语言](yu-yan.md)
  * [步骤块](yu-yan/bu-zou-kuai.md)
  * [文本步骤](yu-yan/wen-ben-bu-zou.md)
  * [函数](yu-yan/han-shu.md)
  * [变量](yu-yan/bian-liang.md)
  * [代码块](yu-yan/dai-ma-kuai.md)
  * [代码引用](yu-yan/dai-ma-yin-yong.md)
  * [顺序执行](yu-yan/shun-xu-zhi-xing.md)
  * [串行](yu-yan/chuan-xing.md)
  * [注释](yu-yan/zhu-shi.md)
  * [分组与频率](yu-yan/fen-zu-yu-pin-lv.md)
  * [条件测试](yu-yan/tiao-jian-ce-shi.md)
  * [跳过](yu-yan/tiao-guo.md)
  * [折叠](yu-yan/zhe-die.md)
  * [唯一](yu-yan/wei-yi.md)
  * [调试](yu-yan/diao-shi.md)
  * [钩子](yu-yan/gou-zi.md)
* [用户界面测试](uice-shi.md)
  * [浏览器和设备](uice-shi/liu-lan-qi-he-she-bei.md)
  * [浏览器步骤](uice-shi/liu-lan-qi-bu-zou.md)
  * [验证步骤](uice-shi/yan-zheng-bu-zou.md)
  * [网络设置和流量](uice-shi/wang-luo-he-liu-liang.md)
  * [模拟时间和地理位置](uice-shi/mo-ni-shi-jian-he-di-li-wei-zhi.md)
  * [模拟API](uice-shi/mo-niapi.md)
  * [元素查找器](uice-shi/yuan-su-cha-zhao-qi.md)
  * [默认元素查找器属性](uice-shi/mo-ren-yuan-su-cha-zhao-qi-shu-xing.md)
  * [截屏](uice-shi/jie-ping.md)
  * [代码引用](uice-shi/dai-ma-yin-yong.md)
* [API测试](apice-shi.md)
  * [请求](apice-shi/qing-qiu.md)
  * [响应与校验](apice-shi/xiang-ying-yu-xiao-yan.md)
* [REPL](repl.md)
* [安装包](an-zhuang-bao.md)
* [联系我们](lian-xi-wo-men.md)

### 用法

```
smashtest [.smash files to run] [options]
```

```
smashtest -? 列出帮助选项
```

![Total visitor](https://visitor-count-badge.herokuapp.com/total.svg?repo_id=memoryza.smashtest.cn.guide)
![Visitors in today](https://visitor-count-badge.herokuapp.com/today.svg?repo_id=memoryza.smashtest.cn.guide)


