# 代码引用

> 以下js函数在任何代码块中都可访问

### c\(\)

```
c('print to console');   // same as console.log(), but prints it out more neatly
                         // (and clear of the progress bar)
```

### dir\(\)

```
dir();   // returns the absolute directory of the file where this step is
```

### g\(\)

```
g('variable', 'new value');   // set global variable
g('variable');                // get global variable
```

### getGlobal\(\)

```
getGlobal('variable');   // get global variable
```

### getLocal\(\)

```
getLocal('variable');   // get local variable
```

### getPersistent\(\)

```
getPersistent('variable');   // get persistent variable
```

### i\(\)

```
const packageName = i('package-name');   // require()'s (imports) the given nodejs package,
                                         // sets persistent var 'packageName' to it (auto-camelCased),
                                         // and returns it


const myPkg = i('myPkg', 'package-name');   // same, but sets the name of the persistent var

i('myPkg', './path/to/file.js');         // works with js files too
i('myPkg', '../path/to/file.js');
i('myPkg', '/Users/Shared/tests/file.js');
```

### l\(\)

```
l('variable', 'new value');   // set local variable
l('variable');                // get local variable
```

### log\(\)

```
log('text to log');   // logs a piece of text to the report for this step
```

### runInstance

```
runInstance;              // represents the test runner "thread" that's
                          // running this step and branch (see RunInstance)

runInstance.runner;       // represents the test runner (see Runner)

runInstance.tree;         // represents the whole tree (see Tree)

runInstance.currBranch;   // represents the current branch (see Branch)

runInstance.currStep;     // represents the current step (see Step)

// These objects can be used to dynamically view, create, and/or edit tests at runtime
```

### setGlobal\(\)

```
setGlobal('variable', 'new value');   // set global variable
```

### setLocal\(\)

```
setLocal('variable', 'new value');   // set local variable
```

### setPersistent\(\)

```
setPersistent('variable', 'new value');   // set persistent variable

```



