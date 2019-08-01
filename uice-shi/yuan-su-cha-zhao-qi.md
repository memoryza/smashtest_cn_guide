# 元素查找器

### 什么是元素查找器

元素查找器是匹配页面元素的字符串。

它们包含一行或多行，其中每行都是以逗号分隔的属性列表。属性描述元素或元素的状态。  
$（）函数用于查找给定的元素。如果没有即时找到就会抛出错误，$\(\)还可以用于验证元素是否存在（和可见）。

    Verify login box {
        // Verifies the existence of at least one visible element that matches the prop `login box`
        await $(`login box`);
    }

    Get login box {
        // Sets elem to the first WebElement that matches the prop `login box`
        let elem = await $(`login box`);
    }

    Verify focused login box {
        // Verifies the existence of at least one visible element that matches all 4 props
        await $(`login box, focused, 'text inside', .selector`);
    }

    // See code reference for details on $()

同理，$（）可以匹配多个元素

运行 smashtest -r , 打开浏览器，导航到页面，想元素输入值，浏览器的console中会打印出来所有匹配的元素

### 属性

> 尽可能使用定义的属性
>
> 虽然选择器可以校验属性，但要避免使用 click “\#some elem”这样的步骤。相反，定义一个道具并在步骤中使用它，例如，单击“登录框”。您的测试将更易于读取和重构。相反，定义一个属性并在步骤中使用它，例如，click 'login box'。测试将更易于读取和重构

##### 设置

属性通过props\(\)定义，请查看[代码引用](/uice-shi/dai-ma-yin-yong.md)

    On homepage {
        // Define props for all the elements on the homepage
        props({
            'login box': `.msgbox, enabled, 2nd`,
            'about link': `selector "a[name='about']"`
        });
    }

##### 匹配规则

每个属性在应用时缩小匹配元素的列表。

当遇到一个属性时，它将根据以下列表中匹配的第一个规则进行理解：

###### 1.文本

* 匹配给定文本包含在InnerText、Value、Placeholder、关联label的InnerText或select选中的InnerText的元素。
* 不区分大小写，忽略头尾空格，并且多个空格视为一个（“文本”和DOM中的文本）

###### 2.1st, 2nd, 3rd, etc.

* 例如 4th=当前匹配元素列表中的第4个元素
* 通常最后列出顺序列表，因为它你将它缩小到一个元素

###### 3.定义属性

* 这些属性通过`props()`定义
* 他们可以携带输入，例如`propname 'input string'`
* 他们可以是几个[预定义的属性](/uice-shi/mo-ren-yuan-su-cha-zhao-qi-shu-xing.md)

4.css选择器

* 如果没有其他匹配项，则将属性解释为CSS选择器

如果没有找到则报错，并且在`-->`的下一行给出原因

> 提示:
>
> 如果你用标签选择器，它实际上与已定义属性的名称匹配。为了安全使用`selector 'tagname'`
>
> 逗号分隔的选择器也是如此。始终使用`selector “.selector1,.selector2”`，因为默认情况下逗号分隔属性。

##### 隐式可见属性

默认获取所有元素的`visible`属性

例外情况是直接使用 `visible` 、`not visible` 或 `any visibility` 属性。[参见](/uice-shi/mo-ren-yuan-su-cha-zhao-qi-shu-xing.md)

##### Not

属性以not 开始表示匹配元素不包含这个属性，例如： `not fuzzy` 或者 `not .selector`

### 计数器

在一行前面加一个计数器来匹配多个元素。

    await $$(`login box`);         // match exactly 1 login box

    await $$(`3 x login box`);     // match exactly 3 login boxes

    await $$(`0+ x login box`);    // match 0 or more login boxes
    await $$(`1+ x login box`);    // match 1 or more login boxes
    await $$(`2+ x login box`);    // match 2 or more login boxes
    await $$(`2- x login box`);    // match 2 or more login boxes

    await $$(`2-5 x login box`);   // match between 2 and 5 login boxes, inclusive

### 子元素

##### 例子

    // Matches one .list element that contains these 3 children, in that order:
    await $$(`
        .list
            .item1
            .item2
            .item3
    `);

    // This is a subset matching, meaning that other elements
    // can exist in and around the 3 children inside .list

    // The top parent (.list) can start at any indentation that's a multiple of 4

##### 多级计数器

    await $$(`
        1+ x .list           // matches 1 or more .list elements that contain these children:
            4 x .item        // 4 .item's
            button[name=q]   // 1 button with attribute name set to "q"
                             // blank lines are ok
            .section         // 1 .section that contains these children:
                #textbox                      // 1 #textbox
                login box, enabled            // 1 login box that's enabled
                button, contains 'click me'   // 1 button that contains 'click me'
    `);

    // Note that // comments are allowed inside EFs

##### 顺序

    await $$(`
        #list
            any order   // the 3 children can be in any order
            .item, "NYC"
            .item, "Tokyo"
            .item, "Paris"
    `);

##### 匹配子元素

    // A [] around a line will match and return those elements,
    // as opposed to the top parent

    // This EF will match 4 elements:
    // a 'Tokyo' item and the 3 items that follow
    await $$(`
        #list
            .item, 'NYC'
            [.item, 'Tokyo']
            [3 x .item]
    `);

> 关于\[\] :
>
> 请用 `selector '[attr="something"]'` 匹配`[attr="something"]。`否则，\[\]将被解释为匹配的运算符

##### Implicit body

    await $$(`
        #one   // multiple lines at the top indent
        #two
    `);

    // implicitly equates to

    await $$(`
        body
            #one
            #two
    `);

##### 元素数组

对元素数组执行更严格的验证

    // An element array is a line that starts with a *

    // It will match as many elements as it can, and verify that
    // all children listed underneath map 1-to-1 with each element matched.
    // The ordering and number must be the same. If not, an error occurs.

    await $$(`
        #list
            * .item   // this is an element array
                .item, 'NYC'
                .item, 'Tokyo'
                2 x .item
    `);

    // There must be exactly 4 items inside of #list:
    // a 'NYC', a 'Tokyo', and 2 more items of any kind
    // in that exact order. Otherwise you get an error.

    // Note: You can include the `any order` keyword, as shown before,
    // to allow any ordering of the children



