# 调试

### 调试符\(~\)

```
Navigate to 'google.com'
    ~ Click 'button'   // isolate this branch, run in REPL, and pause right before this step
    Click 'other thing'
```

```
Navigate to 'google.com'
    Click 'button' ~   // isolate this branch, run in REPL, and pause right after this step
    Click 'other thing'
```

调试分支遇到失败后将会暂停

如果用~调试多分支，请选择第一个分支

不生成报告，保留以前通过的分支（运行附加参数 -s）列表。

### 快速调试符（~~）

```
Navigate to 'google.com'
    ~~ Click 'button'   // only run this branch, but no pausing and don't run in REPL
    Click 'other thing'
```

跟~一样，不生成任何报告，并且保留以前通过的分支列表。

