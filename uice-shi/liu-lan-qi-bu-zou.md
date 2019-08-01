# 浏览器步骤

> 运行其他步骤之前必须运行 open \[browser\]
>
> 元素是[elementFinder](/uice-shi/yuan-su-cha-zhao-qi.md)字符串或WebElement对象
>
> 所有涉及鼠标交互的步骤（例如单击）优先选择第一个与元素匹配的可单击元素。如果没找到，则选择与元素匹配的第一个不可单击元素。
>
> 例子: smaple/other/browser-interact.smash

### 互动

##### Click element

```
Click 'elementfinder'
```

##### Native click element

```
Native click 'elementfinder'   // same as click, but uses js click instead of webdriver click
                               // try this when webdriver click doesn't work
```

##### Double click element

```
Double click 'elementfinder'
```

##### Hover over element

```
Hover over 'elementfinder'
```

##### Scroll to element

```
Scroll to 'elementfinder'
```

##### Check element

```
Check 'elementfinder'   // clicks the element, if it's currently unchecked
```

##### Uncheck element

```
Uncheck 'elementfinder'   // clicks the element, if it's currently checked
```

### 设置

##### Type text into element

```
Type 'text' into 'elementfinder'

Type 'text[enter]' into 'elementfinder'   // see list of keys (case-insensitive)

Type '[none]' into 'elementfinder'   // step does nothing
                                     // good for including inaction when testing different inputs
```

##### Clear element

```
Clear 'elementfinder'   // clear a textbox, etc.
```

##### Select value from dropdownElement

```
Select '6' from 'elementfinder'   // selects an <option> from a <select>
                                  // if an <option> with this exact value cannot be found,
                                  // searches for an <option> that contains the value,
                                  // trimmed and case-insensitive

Select '[none]' from 'elementfinder'   // step does nothing
                                       // good for including inaction when testing different inputs
```

##### Select element element from dropdownElement

```
Select element 'option elementfinder' from 'dropdown elementfinder'   // selects an <option> from a <select>
```

##### Value of element

```
{variable} = Value of 'elementfinder'
```

### 导航

##### Navigate to url

```
Navigate to 'https://site.com/page'
Navigate to 'http://site.com/page'
Navigate to 'site.com/page'   // defaults to http
Navigate to '/page'           // uses domain browser is currently on
Nav to '/page'                // shorthand
```

##### Go Back

##### Go Forward

##### Refresh

##### Current url

```
{current url} = Current url   // returns current absolute url
```

### Window

##### Set dimensions to width=width height=height

```
Set dimensions to width='1024' height='768'
```

##### Maximize window

##### Open new tab

##### Switch to topmost iframe

##### Switch to window whose title contains 'test'

##### Switch to window whose url contains 'url'

```
Switch to window whose url contains '/page'
```

##### Switch to the nth window

```
Switch to the '1st' window
Switch to the '4th' window
```

##### Switch to iframe element

```
Switch to iframe 'elementfinder'
```

##### Window title

```
{window title} = Window title   // returns current window title
```

### Alerts

##### Accept alert

```
Accept alert   // clicks ok in alert modal, error if no alert open
```

##### Dismiss alert

```
Dismiss alert   // clicks cancel in alert modal, error if no alert open
```

### 等待

#### Wait n secs

```
Wait '2' secs   // sleeps this long
Wait '2' seconds
Wait '1' sec
Wait '1' second
```

### Cookies and storage

##### Get cookie name

```
{cookie} = Get cookie 'name'

    Verify cookie {
        cookie;         // object containing cookie info
        cookie.value;   // value of cookie
    }
```

##### Set cookie name to value

```
Set cookie 'name' to 'value'
```

##### Set cookie name to value, expiring in exp secs

```
Set cookie 'name' to 'value', expiring in '65' secs
```

##### Delete cookie name

```
Delete cookie 'name'
```

##### Delete all cookies

##### Clear local storage

##### Clear cookies and local storage

### Print and log

##### Log text

##### element

```
'elementfinder'   // outputs found elements to browser's console
"elementfinder"   // and number of found elements to regular console
[elementfinder]   // useful when using REPL
```



