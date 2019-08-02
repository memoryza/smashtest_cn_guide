# 响应与校验

### 例子

```
Make a request {
    await get('https://site.com/endpoint');
}
 
    Verify the response {
        // The global variable 'response' is automatically filled with the last response
 
        // response.verify() checks that the actual response object matches
        // the expected response object that's passed in
 
        response.verify({
            // you can list zero or more of these expected keys:
 
            statusCode: 200,   // expected status code
            headers: {         // expected headers
                'content-type': 'application/json'
            },
            error: null,       // expected error object from request library
            body: {            // expected body (js obj if body is json, string otherwise)
                one: 'two'
            },
            rawBody: '{"one":"two"}',   // expected raw response body
            response: {}       // expected response object from request library
        });
    }
```

> 测试开发样例
>
> 开发API测试的一个好例子是先执行一个请求步骤，然后执行一个 `c(response)`响应（类似于`console.log(response)`）,
>
> 通常通过console.log并` response.verify()`校验响应

### response.verify\(\) 匹配

##### 基础规则

* 预期对象中的值必须==实际对象中的相应值，否则将发生错误
* 预期数组跟默认值匹配
* 预期对象与默认值子集匹配（例如：期望 `{one: 1}` 会匹配`{ one: 1, two: 2 }`，但不匹配 `{ one: 3 } 或者{ two: 2 }`）
* 如果出错会抛出实际值并且--&gt;下一行解释错误

##### 特殊匹配

用`{$key:value}`替换预期对象中的值以进行特殊的松散匹配，如下所述:

* `{ $typeof: "type" }`
  * 确保实际对象中的相应值属于此类型（使用JS的type of）

  * 你可以用 “array” 匹配 arrays
* `{ $regex: /regex/ } 或者 { $regex: "regex" }`

  * 确保实际对象中的相应值是一个可以匹配该正则的字符串

* `{ $contains: "string" }`

  * 确保实际对象中的相应值是一个包含该字符串的字符串

* `{ $max: N }`

  * 确保实际对象中的对应值是不大于n的数字。

* `{ $min: N }`

  * 确保实际对象中的对应值是大于n的数字。

* `{ $code: (actual) => { return actual == 'something'; } }`

  `{ $code: "return actual == 'something'"}`

  `{ $code: "actual == 'something'"}`

  * 确保实际对象中的对应值执行代码后返回true。

* `{ $length: N }`

  * 实际值是数组、对象、字符串返回的长度是N

* `{ $maxLength: N }`

  * 实际值是数组、对象、字符串返回的最大长度是N

* `{ $minLength: N }`

  * 实际值是数组、对象、字符串返回的最小长度是N

* `{ $exact: true, a: A, b: B }`

  * 实际对象精确匹配（例如`{ $exact: true, one: 1 }` 会匹配` { one: 1 }`， 其他都不行）\[不按照文档中一堆话解释了\]

* `{ $every: A }`

  * 匹配实际数组中每一项都是A

    * `{ $every: 'Q' }` 会匹配` [ 'Q', 'Q', 'Q' ]`

    * `{ $every, { $contains: "foo" } } `会匹配` [ "foobar", "barfoo", "foo" ]`

* `[ "$subset", A, B, C ]`

  * 实际数组以任何顺序匹配 A,B,C\(可以包含更多的项\)

* `[ "$anyOrder", A, B, C ]`

  * 实际数组中以任何顺序匹配 A,B,C，不能包含其他值

  * 可以使用 `[ "$subset", "$anyOrder", A, B, C ]` 任何顺序匹配 A,B,C，以及可能更多的项目

* 同一个对象中可以有多个关键词

  * 例如 `{ $typeof: "string", $length: 10, $regex: /[A-Z]+/ } 或[ "$subset", "$anyOrder", A, B, C ]`

* 当预期值为对象时，您可以在预期对象中同时包含正则和$-key.
* undefined

  * { one: undefined, two: 2 } 会匹配 { one: undefined, two: 2 } 或者 { two: 2 }

  * 验证  one: undefined 存在，使用`{ $typeof: 'undefined' } 这里就不需要关心one匹配的值和类型`

  * 验证  one: undefined  不存在，{ $exact: true, two: 2 } ，这里没有one这个key

### Comparer

校验js对象一般用内置的 Comparer，例如

```
// Same functionality as response.verify(expectedObj);
Comparer.expect(actualObj).to.match(expectedObj);
```

```
/**
 * Compares the actual object against the expected object
 * @param {Object} actualObj - The object to check. Must not have circular references or multiple references to the same object inside. Could be an array.
 * @param {Object} expectedObj - The object specifying criteria for actualObj to match
 * @param {String} [errorStart] - String to mark the start of an error, '-->' with ANSI color codes if omitted
 * @param {String} [errorEnd] - String to mark the end of an error, '' with ANSI color codes if omitted
 * @param {String} [errorHeader] - String to put at the top of the entire error message, '' if omitted
 * @param {Boolean} [jsonClone] - If true, compares using the rough clone method, aka JSON.stringify + JSON.parse (which handles multiple references to the same object inside actualObj, but also removes functions and undefineds, and converts them to null in arrays)
 * @throws {Error} If actualObj doesn't match expectedObj
 */
Comparer.expect(actualObj, errorStart, errorEnd, errorHeader, jsonClone).to.match(expectedObj);
```



