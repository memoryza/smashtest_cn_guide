# 顺序执行\(..\)

> 注：指定严格按照分支出现的顺序执行代码（多个分支会变成一个分支），默认情况下多分支执行是按照[优先级执行](/yu-yan/fen-zu-yu-pin-lv.md)的

### ![](/assets/sequential.png)

### 简单的例子

```
Sequential test ..   // flatten branches at or below me into one sequential branch
    One
        Two
        Three
    Four
        Five

    // produces 1 branch:
    // 1) sequential test, one, two, three, four, five
```

### 步骤块

```
Nav to '/page' ..

    Type '1111' into 'textbox'
    Type '2222' into 'textbox'
    Type '3333' into 'textbox'

        Verify success

        // produces 1 branch:
        // 1) nav, type 1111, verify success, type 2222, verify success, type 3333, verify success
```

### 函数调用

```
* Type in
    Type '1111' into 'textbox'
    Type '2222' into 'textbox'
    Type '3333' into 'textbox'

Nav to '/page' ..
    Type in
        Verify success

        // produces 1 branch:
        // 1) nav, type 1111, verify success, type 2222, verify success, type 3333, verify success

Nav to '/page'
    Type in ..   // all we did was move the .. down one line
        Verify success

        // produces the same branch as before
```

### 在函数声明内

```
* Open cart ..   // the 3 steps here execute sequentially
    Nav to '/'
    Click 'cart icon'
    Verify 'cart' is visible

Open cart   // it's sequential inside, but not sequential out here
    Do stuff
        Do more stuff

        // produces 1 branch:
        // 1) open cart (nav to /, click cart icon, verify cart), do stuff, do more stuf
```

### ..出现在简单的步骤块之上

##### 例子

```
Nav to '/page'

    ..   // makes the whole step block run sequentially
    Type '1111' into 'textbox'
    Type '2222' into 'textbox'
    Type '3333' into 'textbox'

        Verify success

        // produces 1 branch:
        // 1) nav, type 1111, type 2222, type 3333, verify success
```

##### 函数作为步骤块成员调用

```
// Note: Acts differently from function calls under a .. step.
// If a function call has multiple branches, multiple branches will be generated:

* Go to cart
    // two different ways of getting to the cart
    Nav to '/cart'

    Click 'cart icon'

..
Go to cart
Add peanuts to cart
Verify peanuts added

// produces branches:
// 1) nav to /cart, add peanuts, verify peanuts
// 2) click cart icon, add peanuts, verify peanuts
```



