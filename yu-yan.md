# 语言

### 缩进

使用4个空格作为缩进，每个步骤使用缩进跟随着上一个步骤（如同网站评论）

### 空行

空行通常不重要。将它们用于文体组织，并对类似步骤进行分组。

它唯一重要的是在一个步骤块里，步骤块内部成员之间不能空行，并且步骤块后面必须有空行（如果它有子步骤），也可以使用空行来防止形成步进块。

```
Log in as 'joe'   // this is a simple step block
Log in as 'bob'
Log in as 'mary'

    Do test stuff
```

### 闭包

所有传递给smashtest的文件将在运行时连接成一段长文本，缩进为0的内容\(例如 函数声明\)都可以在所有其他文件中访问。

例如:

```
// file1.smash
// -----------
Open Chrome
    Do test stuff   // declared in file2.smash
```

```
// file2.smash
// -----------
* Do test stuff
    Navigate to 'site.com'
        Click 'button'
```

### 修饰符

修饰符是在步骤之前或之后出现的符号：

```
! - + This step is surrounded by modifiers ~ $ #med -s
```

每个修饰符必须用空格包围。

唯一的修改器，如果它在步骤之前和之后的行为不同，则是~

