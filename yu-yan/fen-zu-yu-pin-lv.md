# 分组与频率

### 分组

```
Open Chrome
Open Firefox

    Navigate to 'google.com' #google #happy-path
        Do a search

    Navigate to 'pets.com' #pets #happy-path
        Buy cat food
```

仅运行google分支: `smashtest --groups=google`

仅运行happy-path和 pets: `smashtest--groups="happy-path,pets"`

仅运行Firefox: `smashtest --groups=firefox`

> 浏览器自动以名称作为分组
>
> 运行多个分组取并集

### 频次

> 这里我认为应该是优先级

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

运行 low/med/high 测试: `smashtest --min-frequency=low`

运行 med/high 测试 :`smashtest --min-frequency=med`

运行 high 测试 :`smashtest --min-frequency=high`

分支按照从高到底的顺序运行

