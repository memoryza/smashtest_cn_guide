# 变量

### 使用

```
// In a function call
Buy tickets for {num adults} adults and {{num children}} children

// In a string literal
'{host}/path/name'   // {host} is replaced with its value
```

### 设置

##### {var} = 'str'

```
{variable} = 'string'    // everything in Smashtest is a string
{variable} = "string"
{variable} = [string]
{variable} is 'string'   // same as =

{variable}='11', {variable}='22', {variable}='33'

{variable}='{host}/path/name'
{variable}='{var2}'   // cloned a var

{ Variable Name With Caps and Whitespace } = 'string'
```

##### {var} = 代码块形式的函数

```
{variable} = Get hello   // variable is set to "hello world!"

* Get hello {
    return "hello " + "world!";   // any kind of js value will work (not just string)
}
```

```
{variable} = Get goodbye {   // variable is set to "goodbye!"
    return "goodbye!";
}
```

##### {var} =函数分支

```
* A bad username
    {x} = '00'   // you can use any variable name, not just {x}
    {x} = 'baduser'
    {x} = '[none]'
    {x} = ''
    {x} = '   '

{username} = A bad username
    Type {username} into {textbox}

    // produces branches:
    // 1) type '00'
    // 2) type 'baduser'
    // 3) type '[none]'
    // 4) type ''
    // 5) type '   '
```

变量名区分大小写（与步骤名不同），忽略前后空格，中间的空格始终被视为单个空格。

变量区分大小写，因为它们在代码块中转换为JS变量（而JS区分大小写）。

> 变量名不准许使用\，字符串字面量中不允许使用\0、\x、\u或\c。解决办法，请使用：
>
> ```
> {variable} = special char string {
>     return "\u2665 \cJ";
> }
> ```

### 类型

##### 全局

全局变量所有分支都可访问

```
{variable} = 'string'   // global variable
    F

* F
    Type {variable} into 'textbox'   // accessible here
```

```
F
    Type {variable} into 'textbox'   // accessible here

* F
    {variable} = 'string'
```

##### 局部

局部变量只有当前函数内可访问

```
{{variable}} = 'string'   // local variable
    F
        Type {{variable}} into 'textbox'   // accessible here

* F
    // Type {{variable}} into 'textbox'   // NOT accessible here
```

F

```
Type {{variable}} into 'textbox'   // NOT accessible here
```

\* F

```
{{variable}} = 'string'

    Type {{variable}} into 'textbox'   // accessible here

        // goes out of scope here
```

##### 持久

在整个运行的生命周期中存在持久变量。它们只能在[代码块](/yu-yan/dai-ma-kuai.md)内存取。它们通常用于内部事务，如存储函数和库。

### 代码块内部

##### 获取

```
{variable} = 'something'

    Get a variable {
        let v = variable;   // just use it as a js variable

        // for this to work, variable name must be a single word,
        // no chars other than A-Z, a-z, 0-9, - _ .
        // and not have the same name as a js keyword

        // when different types of vars have the same name,
        // local takes precedence over global, which takes precedence over persistent
    }

Get a local variable {
    let v = l('variable name');
}

Get a global variable {
    let v = g('variable name');
}

Get a persistent variable {
    let v = p('variable name');
}
```

##### 设置

```
Set a local variable {
    l('variable name', 'new value');   // any kind of js value will work (not just string)
}

Set a global variable {
    g('variable name', 'new value');
}

Set a persistent variable {
    p('variable name', 'new value');
}
```

### 预定义

`{var:}`将稍后在分支中设置时获取变量的值。这允许您将更高级别的常见步骤重构到树中。

```
Type {username:} into 'login box'   // ignores current value of {username}, looks to the first
                                    // {username}='str' line further in the branch
    {username} = 'bob'
    {username} = 'mary'
    {username} = 'vishal'

        Verify success

    {username} = 'baduser'
    {username} = '[none]'
    {username} = ''

        Verify error
```

```
Choose {adults:} and {children:} from reservations panel

    {adults}='[none]'
    {adults}='0'

        {children}='[none]'
        {children}='0'
        {children}='1'
        {children}='8'

            Verify error

    {adults}='1'
    {adults}='8'

        {children}='[none]'
        {children}='0'
        {children}='1'
        {children}='8'

            Verify success
```

> 设置预定义变量
>
>        不能在代码块内设置预定义变量，只能用`{var} ='something'`或`{var}=Function call` 设置（但函数调用必须是同步的，即不等待和立即返回）。



