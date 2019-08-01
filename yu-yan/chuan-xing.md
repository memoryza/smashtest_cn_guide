# 串行

> todo 按照执行代码的效果来看是这个意思，但是没看出来！和！！区别后续看看代码

![](/assets/parallel.png)

### !

```

{username} is 'pete' !   // no two branches going through this step may execute simultaneously
    Nav to '/'           // useful for testing a stateful shared resource, like a test account
        // etc.
    Nav to '/page1'
        // etc.
```

### !!

```
{username} is 'bob' !!   // no two branches going through this step may execute simultaneously,
    Nav to '/'           // unless --test-server was set
        // etc.          // useful for things like safaridriver, which can't run more
    Nav to '/page1'      // than one instance locally, but can handle multiple instances
        // etc.          // in a selenium grid
```



