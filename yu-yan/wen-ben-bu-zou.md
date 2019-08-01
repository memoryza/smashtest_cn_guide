# 文本步骤

```
- Tests with a logged-in user   // a textual step
    Log in as 'bob'
    Log in as 'mary'
        // etc.

- Tests with invalid users   // a textual step
    Log in as ''
    Log in as 'baduser'
        // etc.
```

文本步骤用于标记和组织。他们不执行任何逻辑。

在报告中是灰色的（以区别于可执行步骤）。

### 使用方式

* 可以是标题：用于分组和描述一组步骤紧跟 and/or 整个分支

  > 或者使用[函数](/yu-yan/han-shu.md)或者[命名步骤块](/yu-yan/bu-zou-kuai.md)去将多个步骤分组，他们会在报告中折叠展示
  >
  > 建议将 - 放在步骤之前\(这样看起来像 smash文件的标题\)

* 可以是要在报告中显示的注释

> 例如,描述描述app的状态或者测试时间（或者状态的起止）
>
> 建议放在这些步骤之后  
> 描述手动步骤

* 可用于“注释掉”可执行步骤（在这种情况下建议尽管使用-s或//）



