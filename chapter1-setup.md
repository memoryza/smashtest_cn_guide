# 环境准备

### 1.安装nodejs

建议去node官网下载最新的LTS版本（node v10.15.0+）

### 2.如果你是做UI测试建议下载各个浏览器的驱动程序

你需要下载当前浏览器版本对应的web驱动程序

[chrome](http://chromedriver.chromium.org/downloads)  [Firefox](https://github.com/mozilla/geckodriver/releases) [Edge](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) [IE](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)

> 注: safari10+ mac系统上预装了web驱动，mac上可以在safari-&gt;Develop-&gt;Allow Remote Automation打开该功能

### 3.安装Smashtest

控制台运行 npm install -g smashtest

如果遇到权限问题，尝试用sudo npm install -g --unsafe-perm smashtest

> 注:如果不想全局安装，可以选择在需要smashtest包的项目中安装，然后将跑case的命令写在package.json的scripts中

### 4.Atom语法支持

Atom是第一个支持smashtest预发高亮的编辑器,它会让.smash文件非常美观和易读

1. 下载Atom
2. 安装Smashtest包
3. 配置smash支持  
   1. Ctrl/Cmd+Shift+P  
   2. 输入"open config" 按回车\(将打开config.cson\)  
   3. 在文件尾部增加如下配置

   ```smash
   ".smash.source":
     editor:
       autoIndentOnPaste: false
       commentStart: "//"
       tabLength: 4
   ```



