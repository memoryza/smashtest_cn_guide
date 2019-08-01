# 条件测试

> 最好避免条件测试。它们应该只用于复现偶现异常。

### If step

```
If A then B {
    if(A) {   // only does B if A is true
        B();
    }
}
```

### If browser is...

```
- Test something

    Do not allow Safari {
        if(browser.params.name == 'safari') {
            // pass and end the whole branch if the browser is safari, do nothing otherwise
            runInstance.currBranch.markBranch('pass');
        }
    }

        - This step only runs if the browser isn't safari
```

### If viewport is...

```
- Test something
 
    If mobile {
        if(!runInstance.currBranch.groups.includes('mobile')) {
            // pass and end the whole branch if the viewport isn't mobile, do nothing otherwise
            runInstance.currBranch.markBranch('pass');
        }
    }
 
        - This step only runs if the viewport is mobile
```



