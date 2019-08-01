# Smashtest介绍

> ###### Smashtest是一种快速描述和部署测试用例的语言。

它以树形结构写测试用例，极大的加速你的自动化测试用例速度;树代表我们在测试时的想法。它们允许我们列出从任何给定点分支的所有排列。

```
        npm i -g smashtest
```

##### ![](/assets/features.png)

##### 截图效果

| ![](/assets/ss1.jpg) | ![](/assets/ss2.jpg) |
| ---: | :--- |
|  |  |

##### **测试用例**

> 注: 以缩进为4个空格作为每行的约束

```smash
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

上述语句执行时case效果![](/assets/represents.png)具体底层代码逻辑![](/assets/withrepresents.png)

![](/assets/withrepresents.png)

