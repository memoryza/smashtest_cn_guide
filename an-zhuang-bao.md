### 安装包

> 例子: sample/other/require-package.smash

### 做一个包

通过分发包来共享步骤和功能：

1. 在JS文件中实现功能。
2. 通过NPM注册表将该文件作为[NPM包](https://docs.npmjs.com/packages-and-modules/)分发
3. 用户可以直接从您下载或复制到其.smash文件中的简单函数声明：

```
* My awesome function {
    i('my_awesome_npm_package').myAwesomeFunction();   // i() is similar to require()
}
```

### 使用一个包

安装要用的包

1. 将包安装到同级目录或者上级或者全局安装。
2. 将上述函数声明复制到其中一个文件中，或者下载一个.smash文件，该文件中已经有声明。确保它在运行测试时与其他.smash文件一起运行。
3. 现在就可以各处使用它了

```
My awesome function
```



