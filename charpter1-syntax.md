# 基础语法

> 注: 递进的步骤一定空4个空格, 部分例子根据实际情况调整在sample/chapter1/\*.smash

### 分支

```
Open Chrome                  // 两个分支都被执行

    Navigate to 'site.com'   // 两个分支都被执行

        Click 'one'          // 分支1
        Click 'two'          // 分支2

        // 执行效果:
        // 1) 打开chrome, 导航到站点, 点击 'one'
        // 2)打开chrome, 导航到站点, 点击 'two'
```

### 步骤块

```
Open Chrome   // 这5个步骤为一组称为“步骤块”（相同缩进，中间没有空行）
Open Firefox
Open Safari
Open Edge
Open IE
                             // 步骤块下必须有一个空行
    Navigate to 'site.com'   // 执行5个独立的分支
```

### 多分支

```
Open Chrome

    Navigate to 'google.com'

        Do a search    // 分支1

    Navigate to 'pets.com'

        Buy cat food   // 分支2

        Buy dog food   // 分支3
```

### 文本步骤

> 注: 单独一个起一个分支执行文本步骤

```
This step is a function call    // it executes an action

- This step is a textual step   // 这只是一段文字来组织你的测试

Look, I can put the "-" modifier at the end too! -

Navigate to 'site.com'
    - Logged-in tests
        // etc.

    - Logged-out tests
        // etc.
```

### 代码块

```
Open Chrome

    Navigate to 'site.com'

        Click the logo {
            // this is a code block
            // you can do anything js or nodejs supports

            (await $('#logo')).click();
            browser.driver;   // webdriverjs's WebDriver object

        }   // must end at the same indent level as the starting line
```

### 函数

```
Open Chrome
    Navigate to 'site.com'
        Click 'element'   // all 3 steps are function calls to built-in ("packaged") functions

* Log In   // this is a function declaration
    Click 'log in box'
        Type 'username' into 'username box'
            Click 'ok'

Open Chrome
    Navigate to 'site.com'
        Log In   // this is a function call (it will execute the 3 login steps)
            Log Out   // another function call
                log  out   // steps are case insensitive

* Log Out {
    // this is a code block
    (await $('.logout-button')).click();
}
```

### 变量

```
{username} = 'superman'    // this sets the global variable 'superman'
{username} is 'superman'   // same as above
{username} is "superman"   // same as above
{username} is [superman]   // same as above

    Type '{username} is a handsome guy' into '.textbox'
```

### 多级步骤块

```
open chrome
    nav to 'searchengine.com'

        [
            type 'hello world[enter]' into 'search box'

            type 'hello world' into 'search box'
                click 'search'
        ]

            verify search results   // called after each leaf in the bracketed branches

            // produces branches:
            // 1) open, nav, type w/ enter, verify
            // 2) open, nav, type, click, verify

open chrome
    nav to 'searchengine.com'

        enter search terms [   // same as the first example, but names the step block
            type 'hello world[enter]' into 'search box'

            type 'hello world' into 'search box'
                click 'search'
        ]

            verify search results
```

### 元素查找器

    Open Chrome

        Navigate to 'https://www.site.com'

            On homepage {

                // describe props, which are things on the page and/or the state of those things
                props({
                    'message box': `.textbox, enabled`,   // inside the `` is an ElementFinder,
                                                          // a special syntax for finding elements
                    'login button': `#login`,

                    'search results': `
                        #list
                            .result, 'one'
                            .result, 'two'
                    `,

                    'groovy': `'contains this groovy text'`,

                    'retro button': `selector '.button', groovy`
                };

            }

                Type 'hello world' into 'message box'   // using a prop makes it easier to read and refactor



