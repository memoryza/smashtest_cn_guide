# 函数

```
Function call here

    Function call with 'strings' and "strings" and [strings] as inputs

        Function call with {variables} and {{variables}} as inputs

            Function call with '{variables} inside strings' as inputs
```

### 函数声明

##### 公共

```
* Function declaration here
    Navigate to 'site.com'
        Check 'checkbox'

Function declaration here   // function call, runs the nav and check steps above
```

函数声明在它父级下的所有步骤都可以访问（如果缩进是0，则全部步骤都可以）

##### 带输入

```
* Function declaration that {{takes}} in {{inputs}}   // inputs must always be {{local variables}}
    Navigate to 'site.com/{{takes}}/{{inputs}}'
        Check 'checkbox'

Function declaration that 'string input' in {var input}   // function call
```

##### 带括号

```
* Log In [   // optional brackets
    Click 'login button'
        Type 'username' into 'username box'
            Click 'sign in button'
]
```

##### 带代码块

```
* Log In {
    (await $('.login-button')).click();
    (await $('.username')).sendKeys('username');
    (await $('.signin-button')).click();
}
```

```
* Log In {
    (await $('.login-button')).click();
}

    Type 'username' into 'username box'

        Click sign-in {
            (await $('.signin-button')).click();
        }
```

##### 多分支

```
* Nav to the cart page   // has 2 branches, which represent 2 ways of doing this thing

    Navigate to '/'
        Click 'cart button'

    Navigate to '/cart'


Nav to the cart page
    Click 'checkout'

    // produces branches:
    // 1) nav to /, click cart, click checkout
    // 2) nav to /cart, click checkout
```

```
* Choose a browser
    Open Chrome
    Open Firefox

* Choose a viewport
    Desktop
    Mobile

Choose a browser
    Choose a viewport
        Do a test

        // produces branches:
        // 1) open chrome, desktop, do a test
        // 2) open firefox, desktop, do a test
        // 3) open chrome, mobile, do a test
        // 4) open firefox, mobile, do a test
```

##### 内部生命（上下文调用）

```
* Desktop   // when this is called, all child function declarations are made accessible to future steps
    * On homepage
        * Logout {
            // logout actions for desktop homepage
        }

    * On cart page
        * Logout{
            // logout actions for desktop cart page
        }

* Mobile
    * On homepage
        * Logout {
            // logout actions for mobile homepage
        }

    * On cart page
        * Logout {
            // logout actions for mobile cart page
        }

Desktop
    Navigate to '/cart'
        On cart page
            Logout   // executes the logout for the desktop cart page
```

##### [Gherkin](https://cucumber.io/docs/gherkin/reference/)

```
* I log in   // matches all 4 function calls below
    // etc.

When I log in    // if an exact match cannot be found, gherkin (given/when/then/and) is stripped
Given I log in
And I log in
Then I log in
```

##### {var} = F

```
* Choose a username
    {x} = 'bob'
    {x} = 'joe'
    {x} = 'mary'

{username} = Choose a username
    Type {username} into 'username box'

    // produces branches:
    // 1) type 'bob'
    // 2) type 'joe'
    // 3) type 'mary'
```

##### 私有

```
* On cart page
    ** Private function   // not made accessible after a call to "On cart page"
        // etc.

    Private function   // call is ok

    Something
        Private function   // call is ok

On cart page
    Private function   // compile-time error
```

##### [Hooks](/yu-yan/gou-zi.md)

```
*** Before Every Branch {
    // stuff to do before every branch begins
}
```

### 模式

##### 封装和重构

```
* Order dinner   // multiple branches for different ways of accomplishing the same thing
    - Variant 1
        Add beans to meal
            Add rice to meal

    - Variant 2
        Add rice to meal
            Add beans to meal
```

##### 组织

```
// main-tests.smash - bird's eye view of all tests helps ensure we have full coverage
// ----------------
- Test app
    - Homepage tests
        Display homepage test

    - Cart tests
        Empty cart test
        Full cart test

    - Search tests
        Empty search test
        Base case search test
```

```
// cart-tests.smash
// ----------------
* Empty cart test
    // etc.

* Full cart test
    // etc.
```

##### 将单个声明划分为多个文件

```
// logout.smash
// ------------
* On homepage   // this func declaration split into multiple files (to keep logout together)
    * Desktop
        * Logout
            // etc.

    * Mobile
        * Logout
            // etc.
```

```
// search.smash
// ------------
* On homepage   // this func declaration split into multiple files (to keep search together)
    * Desktop
        * Do a search
            // etc.

    * Mobile
        * Do a search
            // etc.
```

##### 页面中

![](/assets/import.png)

##### 强制验证

```
// this pattern ensures that all permutations of these function calls are implemented below

Desktop
Mobile

    Logged In
    Logged Out

        Verify something

// compile-time error if we're missing a permutation here:

* Desktop
    * Logged In
        * Verify something
            // etc.

    * Logged Out
        * Verify something
            // etc.

* Mobile
    * Logged In
        * Verify something
            // etc.

    * Logged Out
        * Verify something
            // etc.
```

### 匹配声明调用的规则

##### 简单例子

```
Open Chrome                // 4) looks among children of this step, finds line 14

    Navigate to '/page1'   // 3) looks among children of this step, finds nothing
        Login              // 2) looks among children of this step, finds nothing
            My function    // 1) function call *** START HERE ***
                Click 'something'
                Click 'something else'

            Click 'something else'

    Navigate to '/page2'
        Login

    * My function   // the one that's matched ("overrides" line 17)
        // etc.

* My function
    // etc.
```

每一个函数调用，现在父节点的子节点去寻找函数。没有找到则递归向上，直到缩进为0依旧没有找到则报错

函数调用和声明不区分大小写，忽略前导和尾随空格，中间的空格始终被视为单个空格。

> 不要忘记转义字符
>
> 由于“strings”和“vars”在函数调用中指定输入，因此在函数调用文本中使用这些实际字符时，请始终使用\'、\“、\\\\[、\\\\]、\、\，以防止输入形成：
>
> ```
> Clear user\'s credentials
> - Textual step's text   // not necessary for textual steps
> ```

##### 匹配多个声明

```
- Matching multiple function declarations under the same parent
    * F
        A

    * F
        B

    F   // matches both line 2 and line 5

    // produces branches:
    // 1) F, A
    // 2) F, B
```

##### 使变量在下面可用

```
* F
    {name} = 'bob'   // this variable will be accessible after a function call to F

F
    Type {name} into 'textbox'   // will type 'bob'
```

##### 使函数在下面可用

```
* F
    * A
        B

* G
    * A
        C

* A
    D

F           // makes public function A at line 2 available below
    A       // B is run here

F           // makes public function A at line 2 available below
    G       // makes public function A at line 6 available below
        A   // C is run here
```

##### 以下等价

```
// file1.smash
// -----------
* A
    * B
        - 1
    * B
        - 2
// file2.smash
// -----------
* A
    * B
        - 3
```

等价于

```
* A
    * B
        - 1
        - 2
        - 3
```

##### 调用自己

```
* Nav to homepage
    Nav to '/'

- Some test
    Open Chrome
        Nav to homepage   // calls line 8

        * Nav to homepage   // this "intercepts" navs to homepage to do security stuff
            Do security checks
                Nav to homepage   // ignores line 8 because recursion not allowed, so calls line 1
```



