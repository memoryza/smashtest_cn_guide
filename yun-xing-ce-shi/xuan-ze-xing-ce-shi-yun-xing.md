# 选择性测试运行

### -s

你可以跳过上次运行通过的分支通过 `smashtest -s`或者 `--skip-passed=true`。

当你运行新的测试或者更新用例或者修复中断的测试而不想把这个测试集都运行一遍，这个设置非常有用、

### 唯一修改符

```
Open Chrome

    Navigate to 'google.com'

        Do a search

    $ Navigate to 'pets.com'   // only runs branches that pass through this step

        Buy cat food   // i.e., the branch ending here
```

```
Open Chrome
$ Open Firefox
Open Safari

    Desktop
    $ Mobile

        Navigate to 'google.com'

            Do a search   // only runs the Firefox mobile branch that ends here
```

```
Open Chrome
Open Firefox $
Open Safari

    Desktop
    Mobile $

        Navigate to 'google.com' ~   // use to help isolate a branch for a debug
```

### 分组

```
Open Chrome
Open Firefox

    Navigate to 'google.com' #google #happy-path
        Do a search

    Navigate to 'pets.com' #pets #happy-path
        Buy cat food
```

只运行google分支:smashtest --groups=google

只运行happy-path和pets分支（取并集）:smashtest --groups="happy-path,pets"

只运行在Firefox中运行:smashtest --groups=firefox\(默认浏览器的名字是内建的分组\)

### 频率（这里应该是优先级的概念）

```
Open Chrome
    Navigate to 'google.com'

        Do something you want tested very often #high   // good for quick smoke tests

        Do something you want usually tested #med   // your normal test suite
        Do something you want usually tested        // #med is the default freq of a branch if #high/med/low is omitted

        Do something you want tested once in a while #low   // good for long-running, low-risk, edge-casey stuff

            This branch will be med #med #some-group   // the later step controls the branch's freq
            This branch will be low
```

运行 low/med/high 测试:smashtest --min-frequency=low

运行 med/high 测试:smashtest --min-frequency=med

运行 high 测试:smashtest --min-frequency=high

分支也按照频率顺序从高到低。

