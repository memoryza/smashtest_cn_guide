# 步骤块

### 简单的步骤块

```
Log in as 'joe'     // this group of 3 steps is a step block
Log in as 'bob'
Log in as 'mary'
                    // one empty line under a step block is mandatory
    Do test stuff

    // produces branches:
    // 1) log in as joe, do test stuff
    // 2) log in as bob, do test stuff
    // 3) log in as mary, do test stuff
```

垂直2个或者更多个相同缩进的步骤，他们之间没有空行。如果有子级则必须有空行

### 多级步骤块

##### 匿名块

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
```

##### 自定义分支名称

```
open chrome
    nav to 'searchengine.com'

        enter search terms [   // same as the first example, but names the step block
            type 'hello world[enter]' into 'search box'

            type 'hello world' into 'search box'
                click 'search'
        ]

            verify search results
```

用大括号报告多个步骤

命名的步骤块看起来像函数调用，保持块步骤整洁

始终将修饰符放到`[`前面

### 代码块

```
// these 3 steps form a step block, even though they have code blocks
Click one {
    (await $('#one')).click();
}
Click two {
    (await $('#two')).click();
}
Click three {
    (await $('#three')).click();
}

    Verify action was completed
```

### Sequential

```
..
Open Chrome
Nav to 'site.com'
Click '.button'

// is the same as

Open Chrome
    Nav to 'site.com'
        Click '.button'
```



