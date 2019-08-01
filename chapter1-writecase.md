# 写第一个测试用例

### 1.按照如下步骤去做

1. 新建一个"helloworld.smash"
2. 将以下内容输入文件：

   ```smash
   Open Chrome

       Navigate to 'google.com'

           Type 'hello world[enter]' into 'input[name=q]'.
   ```

3. 打开控制台，切换到当前目录

4. 运行smashtest hellworld.smash\(或者smashtest 运行所有.smash文件,注:运行完以后会在当前目录生成smashtest目录\)

5. 查看测试运行

6. 根据控制台输出的文件路径查看运行报告\(输出报告在当前目录下的smashtest文件夹中\)

![](/assets/runningreport.png)

### 2.刚才都做了什么

Smashtest继承了很多内置[步骤](https://smashtest.io/ui-testing/browser-steps)，其中一些是您刚刚使用的。

这些步骤想象成网站的评论，像评论中的回复缩进一样，一个步骤缩进跟在一个步骤后面。在例子中只有一个测试用例，我们叫它测试分支。

### 3.增加测试分支

```smash
Open Chrome

    Navigate to 'google.com'

        Type 'hello world[enter]' into 'input[name=q]'

        Type 'hello universe[enter]' into 'input[name=q]'
```

第5和第7行缩进相同，意味着它们都跟在第3行后面（即两个测试分支）

因此，smash文件有两个测试分支:

1. 打开chrome,导航到 google.com，输入将hello world输入到input框 回车
2. 打开chrome,导航到 google.com，输入将hello universe输入到input框 回车

两个测试分支串行运行，并将测试数据内部返回。

