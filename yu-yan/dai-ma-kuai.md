# 代码块

### 类型

```
* Function name {
    // this is a code block
    // you can do anything js or nodejs supports

    // only lines between the "{" and "}" lines are part of the code block

}   // must end at the same indent level as the starting line
```

```
Step name {
    // this step is implemented in here
    // kind of like a one-time function call
}
```

### 修饰符

```
// Modifiers can come before the name, or after the name but before the "{"
.. + * Function name $ ! {
}

.. + Step name $ ! {
}
```

### Await

```
// Code blocks are async, meaning you can use the 'await' keyword
Verify success {
    await $('#success');
}
```

> 不要忘记await
>
> 异步函数调用之前总是有[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)关键词。如果在一个步骤中错误没有被捕获，或者事情看起来不稳定，可能是因为你忘记了await。

### Prev

```
// Pass a value from one code block to the next via 'return' and 'prev'
Step one {
    return "hello";
}
    Step two {
        expect(prev).to.equal("hello");   // chai and assert are available by default
    }
```

```
Step one {
    return "hello";
}

    Some intermediate step

        Step two {
            expect(prev).to.equal("hello");
        }
```

### 变量

```
Settings vars {
    l('var1', 'new value');   // local variable (any value will work, not just strings)
    g('var2', 'new value');   // global variable
    p('var3', 'new value');   // persistent variable
}

    Getting vars {
        let v = var1;        // works if variable name is a single word with no special chars
        let v = l('var1');   // local variable
        let v = g('var2');   // global variable
        let v = p('var3');   // persistent variable
    }
```

> 使用l\(\)/g\(\)/p\(\)设置变量
>
> 不要用variable='value'设置变量，因为这不会持续超过代码块的末尾。
>
> 使用let注意事项
>
> 不要使用“let”来声明与现有变量同名的新变量，否则会出现运行时错误（重复声明）。您可以使用“var”声明。

### 超时

默认情况下，步骤没有超时，因为每个步骤的适当超时变化很大。

每个步骤在其代码块中处理好自己的超时。

> 确保每个异步函数内部设置好恰当的超时

### 报错

##### 常规错误

```
Failing step {
    throw new Error("oops");   // this step and branch will fail and end immediately
}
```

##### Error.continue

```
Failing step {
    let e = new Error("verify failed, but let's try the next verify anyway");
    e.continue = true;   // this error will fail the step and branch,
    throw e;             // but the branch will continue running
}
```

##### Error.fatal

```
Failing step {
    let e = new Error("something really bad");
    e.fatal = true;   // this error will end the whole test suite execution immediately
    throw e;
}
```

##### 堆栈

堆栈会包含报错的上下文、在文件文件中的行号

```
at CodeBlock_for_[NAME OF CODE BLOCK FUNCTION] (eval at ...), <anonymous>:[LINE NUMBER]:[COL NUMBER]
```

在自己的JS文件中实现复杂函数以生成更传统的堆栈

```
// test.smash
// ----------
Step {
    const yf = i('yf', './yourfile.js');
    yf.something();
}
```

```
// yourfile.js
// ----------
function something() {
    // etc.
}
module.exports.something = something;
```



