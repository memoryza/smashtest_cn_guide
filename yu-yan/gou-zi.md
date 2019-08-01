# 钩子（\*\*\*）

钩子是运行于步骤、分支或测试套件前后的代码块函数。

它们不用于测试或安装/卸载。它们用于内部事务，如报告、导入代码、JS函数声明、屏幕截图和日志记录。

只允许代码块，它们不能有子级或修饰符。报告中不列出钩子。如果钩子执行失败，它对应的步骤/分支将出错并失败。

> 注: 参见sample/chapter3/hook\*.smash
>
> 执行顺序是 Before Everything -&gt; Before Every Branch -&gt; Before Every Step &lt;-&gt; After Every Step -&gt; After Every Branch -&gt; After Everything
>
> 其中Before\|After  Everything 必须缩进是0，最顶级
>
> 其他的四个相同缩进时按照上边的执行顺序

### 类型

##### Before Every Branch

```
Parent step

    A
    B

    *** Before Every Branch {
        // this code runs before every branch that goes through the parent step
        // i.e.,
        // 1) this code, parent step, A
        // 2) this code, parent step, B
    }

*** Before Every Branch {
    // this code runs before every branch in existence
}
```

##### After Every Branch

```
Parent step

    *** After Every Branch {
        // this code runs after every branch that goes through the parent step (whether it passes or fails)
    }

*** After Every Branch {
    // this code runs after every branch in existence (whether it passes or fails)
}
```

##### Before Every Step

```
Parent step

    *** Before Every Step {
        // this code runs before every step of every branch that goes through the parent step
    }

*** Before Every Step {
    // this code runs before every step of every branch in existence
}
```

##### After Every Step

```
Parent step

    *** After Every Step {
        // this code runs after every step of every branch that goes through the parent step
    }

*** After Every Step {
    // this code runs after every step of every branch in existence
}
```

##### Before Everything

```
*** Before Everything {
    // this code runs before the whole test suite begins
    // only valid at 0 indents
}
```

##### After Everything

```
*** After Everything {
    // this code runs after the whole test suite ends
    // only valid at 0 indents
}
```

### 安装卸载逻辑出现在哪里？

安装代码应该进入实际测试。

拆卸代码应该使用与安装相同的逻辑，如在实际测试之前清除以前的状态。只有在必要的时候它才应该挂在钩子里。

```
- My test
    Setup
        Testing
            Teardown
 
* Setup
    Teardown   // to ensure clean state
        Init {
            // etc.
        }
 
* Testing
    // etc.
 
* Teardown
    // etc.
```



