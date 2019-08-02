# 代码引用

> 打开浏览器以后，以下js函数和对象可以在代码块中使用

> 别忘了await
>
> 异步JS函数调用前面应该始终有[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)。如果错误被抛出但没有在步骤中被捕获，或者事情看起来不稳定，可能是因为你忘了await。

### 查找元素

##### $\(\)

    // Finds the first matching WebElement
    let elem = await $('elementfinder');   // waits up to 2 secs, otherwise throws error

    // Can be used to verify existence of an ElementFinder (by throwing error if not found)
    await $(`
       #list
           .item
           .item
    `);

```
/**
 * Finds the first matching element. Waits up to timeout ms.
 * @param {String or WebElement} element - An EF representing the EF to use. If set to a WebElement, returns that WebElement.
 * @param {Boolean} [tryClickable] - If true, first try searching among clickable elements only. If no elements are found, searches among non-clickable elements.
 * @param {WebElement} [parentElem] - If set, only searches at or within this parent element
 * @param {Number} [timeout] - How many ms to wait before giving up (2000 ms if omitted)
 * @param {Boolean} [isContinue] - If true, and if an error is thrown, that error's continue will be set to true
 * @return {Promise} Promise that resolves to first WebDriver WebElement that was found
 * @throws {Error} If a matching element wasn't found in time, or if an element array wasn't properly matched in time
 */
await $(element, tryClickable, parentElem, timeout, isContinue);
```

##### $$\(\)

```
// Finds all the matching WebElements
let elems = await $$('elementfinder');   // waits up to 2 secs, otherwise throws error
```

> [WebElements](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html)

```
/**
 * Finds the matching elements. Waits up to timeout ms.
 * See $() for param details
 * If element is an EF and a counter isn't set on the top element, sets it to 1+
 * @return {Promise} Promise that resolves to Array of WebDriver WebElements that were found
 * @throws {Error} If matching elements weren't found in time, or if an element array wasn't properly matched in time
 */
await $$(element, parentElem, timeout, isContinue);
```

##### not$\(\)

```
// Ensures no matching elements exist
await not$('elementfinder');   // waits up to 2 secs, otherwise throws error

```

```
/**
 * Throws an error if the given element(s) don't disappear before the timeout
 * See $() for param details
 * @return {Promise} Promise that resolves if the given element(s) disappear before the timeout
 * @throws {Error} If matching elements still found after timeout
 */
await not$(element, parentElem, timeout, isContinue);
```

##### str\(\)

    // str() escapes strings for use in ElementFinders:
    let s = "string\'\n";
    await $(`
        #list
            .item
            .item, contains '${str(s)}'
    `);

### 元素查找器属性

##### props\(\)

    // Define props with ElementFinders or functions
    // If a prop listed already exists, it is overridden
    // Prop definitions exist for all future steps in the branch, until overridden
    props({
        // ElementFinder definitions:

        'message box': `.msgbox, enabled`,

        'search results': `
            #list
                .result, 'one'
                .result, 'two'
        `,

        'groovy': `'contains this groovy text'`,

        'retro button': `selector '.button', groovy`,

        // Function definitions:

        'fuzzy': function(elems, input) {
            // This function will be injected into the browser

            // elems is an array of DOM Elements
            // input is the input string (e.g., fuzzy 'input here'), undefined if not set

            // return an array of Elements from elem that match this prop

            return elems;
        }
    });

##### propsAdd\(\)

    // Same as props(), but adds to a definition if it already exists
    propsAdd({
        'message box': `.msgbox`
    });

    Define a message box {
        props({
            'message box': `.msgbox`
        });
    }

        Add to the definition of a message box {
            propsAdd({
                'message box': `#msgbox`
            });
        }

            // Now, an element will be a 'message box' if it matches .msgbox OR #msgbox


##### propsClear\(\)

```
// Clears the definitions of the props listed
propsClear(['message box', 'groovy']);
```

### 在浏览器里执行代码

在浏览器内执行的JS只能访问传入的参数和浏览器内可访问的变量/函数。代码块或测试中的所有变量都必须作为参数传入。

##### executeScript\(\)

```
await executeScript(function() {
    // executes js in the browser
    // see webdriverjs's executeScript()
});
```

```
let arg1 = 'one';
let arg2 = 2;
 
let v = await executeScript(function(arg1, arg2) {
    // arg1 and arg2 are accessible here
    return arg1 + arg2;
}, arg1, arg2);
 
// v is "one2"
```

##### executeAsyncScript\(\)

```
await executeAsyncScript(function(done) {
    // executes js in the browser
    // must call done() callback at the end
    // see webdriverjs's executeAsyncScript()
    done();
});
```

```
let arg1 = 'one';
let arg2 = 2;
 
let v = await executeAsyncScript(function(arg1, arg2, done) {
    // arg1 and arg2 are accessible here
    done(arg1 + arg2);
}, arg1, arg2);
 
// v is "one2"
```

### browser对象

##### browser

```
browser;   // BrowserInstance object that represents the open browser
 
// Browser details
browser.params.name;
browser.params.version;
browser.params.platform;
browser.params.width;
browser.params.height;
browser.params.deviceEmulation;
browser.params.isHeadless;
browser.params.testServer;
```

##### browser.driver

```
browser.driver;   // webdriverjs WebDriver object that represents the open browser's driver

```

### mocking

##### mockTime\(\)

> 尝试用[Mock time to date](/uice-shi/mo-ni-shi-jian-he-di-li-wei-zhi.md) 代替

```
let date = new Date();
await mockTime(date);   // set the browser's date to this one

```

```
/**
 * Mock's the current page's Date object to simulate the given time. Time will run forward normally.
 * See sinon's fake timers for more details
 * @param {Date} time - The time to set the browser to
 */
await mockTime(time);
```

##### mockLocation\(\)

> 尝试用[Mock location](/uice-shi/mo-ni-shi-jian-he-di-li-wei-zhi.md) 代替

```
await mockLocation(28.538336, -81.379234);   // sets the browser's location to the given latitude and longitude

```

##### mockHttp\(\)

```
// Responds with 200 'canned response' when an XHR GET in the browser tries to hit /endpoint on the current domain
// See mocking APIs for more details
await mockHttp('GET', '/endpoint', 'canned response');

```

```
/**
 * Mocks the current page's XHR. Sends back the given response for any http requests to the given method/url from the current page.
 * You can use multiple calls to this function to set up multiple routes. If a request doesn't match a route, it will get a 404 response.
 * See sinon's fake xhr and server for more details
 * @param {String} method - The HTTP method ('GET', 'POST', etc.)
 * @param {String or RegExp} url - A url or a regex that matches urls
 * @param response - A String representing the response body, or
 *                   An Object representing the response body (it will be converted to JSON), or
 *                   an array in the form [ [status code], { header1: "value1", etc. }, [response body string or object] ], or
 *                   a function
 *                   See server.respondWith() from sinon's documentation
 */
await mockHttp(method, url, response);
```

##### mockHttpConfigure\(\)

```
await mockHttpConfigure({autoRespond: false});
```

```
/**
 * Sets configs on the currently mocked XHR
 * @param {Object} config - The options to set (key value pairs)
 * See fake server options for details on what config options are available
 * Fails silently if no mock is currently active
 */
await mockHttpConfigure(config);
```

> [fake server options](https://sinonjs.org/releases/latest/fake-xhr-and-server/#fake-server-options)

##### mockTimeStop\(\)

```
await mockTimeStop();   // stops time mocks and restores original time
```

##### mockLocationStop\(\)

```
await mockLocationStop();   // stops geolocation mocks and restores original geolocation
```

##### mockHttpStop\(\)

```
await mockHttpStop();   // stops http mocks and restores original endpoints
```

##### mockStop\(\)

> 尝试使用 [Stop all mocks ](/uice-shi/mo-ni-shi-jian-he-di-li-wei-zhi.md) 代替

```
await mockStop();   // stops all time, geolocation, and http mocks, restores originals
```

##### injectSinon\(\)

```
await injectSinon();   // injects sinon js library into browser
                       // sinon becomes accessible in browser via global var 'sinon'
                       // automatically called when one of the mocking functions above invoked
                       // does nothing if sinon is already available inside browser
```

> [sinon](https://sinonjs.org/)



