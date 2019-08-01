# 唯一\($\)

### 一个$

```
Open Chrome

    Navigate to 'google.com'

        Do a search

    $ Navigate to 'pets.com'   // only runs branches that pass through this step

        Buy cat food   // i.e., the branch ending here
```

### 不同缩进的多个$

```
Open Chrome
$ Open Firefox
Open Safari

    Desktop
    $ Mobile

        Navigate to 'google.com'

            Do a search   // only runs the Firefox mobile branch that ends here
```

### 同一个父级的多个$

```
Open Chrome
$ Open Firefox
$ Open Safari

    Desktop
    Mobile

        Navigate to 'google.com'

            Do a search   // only runs the Firefox and Safari branches (4 of them)
```

### 在函数声明前

```
$ * Do a search   // only runs branches that call this function
    // etc.

Log in as 'bob'
    Do a search

Log in as 'vishal'
    Do a search
```

### 与~

```
Open Chrome
Open Firefox $
Open Safari
 
    Desktop
    Mobile $
 
        Navigate to 'google.com' ~   // use to help isolate a branch for a debug
```



