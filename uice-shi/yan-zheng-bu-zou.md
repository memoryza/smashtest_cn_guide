# 验证步骤

> 运行其他步骤之前必须运行 open \[browser\]

### 验证

> “verify”步骤最多等待1秒钟，以便在失败之前通过验证。

##### Verify at page titleOrUrl

```
Verify at page 'Page title'      // passes if current page title (case-insensitive)
Verify at page 'site.com/page'   // or url contains this text
Verify at page '/page'
```

##### Verify cookie name contains value

```
Verify cookie 'name' contains 'value'
```

##### Verify element is visible

```
Verify 'elementfinder' is visible
```

##### Verify element is not visible

```
Verify 'elementfinder' is not visible
```

##### Verify alert contains text

```
Verify alert contains 'hello'   // passes if alert is open and contains this text
                                // Note: this step doesn't wait up to 1 sec - it's immediate
```

### Wait until

> “等待工具函数”步骤最多等待15秒，或指定的数值，以便在验证失败之前通过。

##### Wait until at page titleOrUrl

```
Wait until at page 'Page title'      // passes if current page title (case-insensitive)
Wait until at page 'site.com/page'   // or url contains this text
Wait until at page '/page'

Wait until at page 'Page title' (up to '30' secs)
Wait until at page 'site.com/page' (up to '30' secs)
Wait until at page '/page' (up to '30' secs)
```

##### Wait until cookie name contains value

```
Wait until cookie 'name' contains 'value'

Wait until cookie 'name' contains 'value' (up to '30' secs)
```

##### Wait until element is visible

```
Wait until 'elementfinder' is visible

Wait until 'elementfinder' is visible (up to '30' secs)
```

##### Wait until element is not visible

```
Wait until 'elementfinder' is not visible

Wait until 'elementfinder' is not visible (up to '30' secs)
```

### 断言

##### Verify a equals b

```
Verify {variable} equals 'value'
Verify {variable} is 'value'
Verify {variable} == 'value'
```

##### Verify a is greater than b

```
Verify {variable} is greater than 'value'
Verify {variable} > 'value'
```

##### Verify a  is greater than or equal to b

```
Verify {variable} is greater than or equal to 'value'
Verify {variable} >= 'value'
```

##### Verify a is less than b

```
Verify {variable} is less than 'value'
Verify {variable} < 'value'
```

##### Verify a is less than or equal to b

```
Verify {variable} is less than or equal to 'value'
Verify {variable} <= 'value'
```



