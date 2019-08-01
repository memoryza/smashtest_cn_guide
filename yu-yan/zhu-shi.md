# 注释

### 标准注释

```
// full-line comment

Step   // comment at the end of a step
```

### 注释整行

```
Open Chrome       // this is still a valid step block
// Open Firefox   // if whole line starts with //, it's ignored as if it weren't there
Open Safari

    Do something

    // produces branches:
    // 1) open chrome, do something
    // 2) open safari, do something
```

### 块内注释

```
Code block step {
    // normal js comments occur here
    /* normal js comments occur here */
}
```



