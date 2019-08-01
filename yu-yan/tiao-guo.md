# 跳过

### 跳过一步

> 注：被跳过的部分都是呈现灰色

![](/assets/skip.png)

![](/assets/skip-2.png)

##### -s（推荐）

```
One                   // runs
    Skipped step -s   // doesn't run, marked skipped in report
        Two           // runs
```

#### -

```
One                   // runs
    Skipped step -    // doesn't run, regular textual step in report
        Two           // runs
```

#### //

```
One                   // runs
    // Skipped step   // doesn't run, not outputted to report
        Two           // will run, but needs to be dedented once
```

### 跳过通过步骤的所有分支

##### $s

```
One   // runs
Two   // runs

    Skipped step .s   // doesn't run, still expands function calls (error if declaration not found)

        Three   // doesn't run
        Four    // doesn't run

// Also skips entire duplicate branches caused by .s
// Be careful, when .s is inside a function declaration it will skip steps after the function call as well
```

#### //

```
One   // runs
Two   // runs

//    Skipped step   // doesn't run
//
//        Three      // doesn't run
//        Four       // doesn't run

// Useful if you don't want function calls to expand,
// but won't remind you in the console/report that skipped steps exist
```

#### // 在步骤块成员上

```
One      // runs
// Two   // doesn't run, and doesn't run any steps below
Three    // runs

    Four   // runs, except for "Two"
```



