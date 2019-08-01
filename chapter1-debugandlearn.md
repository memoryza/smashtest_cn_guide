# 调试与学习

### 尝试调试技能

```
Open Chrome
 
    Navigate to 'google.com'
 
        ~ Type 'hello world[enter]' into 'input[name=q]'
 
        Type 'hello universe[enter]' into 'input[name=q]'
```

在需要调试的分支加入~,这个分支会被隔离运行在无头浏览器模式下，并暂停到~之前的执行行，可以在控制控制台中操作执行步骤.

此模式称为repl。它对学习和调试非常有用。

### 开发技能

使用~实际上是一种推荐的测试开发技术：

1. 写一个步骤
2. 在它的末端放一个~

3. 运行smashtest，它将浏览器运行到该行

4. 提出所有可以从该点分支的排列（使用浏览器作为引导）

5. 用~缩进的步骤将被列出来

6. 重复用在console中调试



