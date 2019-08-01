# 浏览器和设备

### 打开一个浏览器

> 所有的UI测试必须跟在open \[浏览器\]后面

```
Open Chrome             // run exclusively with --groups=chrome
Open Firefox            // run exclusively with --groups=firefox
Open Safari             // run exclusively with --groups=safari
Open IE                 // run exclusively with --groups=ie
Open Edge               // run exclusively with --groups=edge

Open browser 'chrome'   // use a string recognized by webdriver as a browser name
```

### 设置视窗尺寸

```
// Run these exclusively with --groups=desktop

Desktop              // sets browser to 1920 x 1080

Laptop               // sets browser to 1024 x 768
Laptop L             // sets browser to 1440 x 900

// Run these exclusively with --groups=mobile

Mobile               // sets browser to 375 x 667
Mobile Portrait      // sets browser to 375 x 667
Mobile Landscape     // sets browser to 667 x 375
Mobile S             // sets browser to 320 x 480
Mobile S Portrait    // sets browser to 320 x 480
Mobile S Landscape   // sets browser to 480 x 320
Mobile M             // sets browser to 375 x 667
Mobile M Portrait    // sets browser to 375 x 667
Mobile M Landscape   // sets browser to 667 x 375
Mobile L             // sets browser to 425 x 667
Mobile L Portrait    // sets browser to 425 x 667
Mobile L Landscape   // sets browser to 667 x 425

Tablet               // sets browser to 768 x 1024
Tablet Portrait      // sets browser to 768 x 1024
Tablet Landscape     // sets browser to 1024 x 768
```

### 设置设备类型

```
// These steps set the viewport to the given device, and do device emulation in Chrome

BlackBerry Z30             // sets browser to 360 x 640
Blackberry PlayBook        // sets browser to 600 x 1024
Galaxy Note 3              // sets browser to 360 x 640
Galaxy Note II             // sets browser to 360 x 640
Galaxy S III               // sets browser to 360 x 640
Galaxy S5                  // sets browser to 360 x 640
Kindle Fire HDX            // sets browser to 800 x 1280
LG Optimus L70             // sets browser to 384 x 640
Laptop with HiDPI screen   // sets browser to 1440 x 900
Laptop with MDPI screen    // sets browser to 1280 x 800
Laptop with touch          // sets browser to 1280 x 950
Microsoft Lumia 550        // sets browser to 640 x 360
Microsoft Lumia 950        // sets browser to 360 x 640
Nexus 4                    // sets browser to 384 x 640
Nexus 5                    // sets browser to 360 x 640
Nexus 5X                   // sets browser to 412 x 732
Nexus 6                    // sets browser to 412 x 732
Nexus 6P                   // sets browser to 412 x 732
Nexus 7                    // sets browser to 600 x 960
Nexus 10                   // sets browser to 800 x 1280
Nokia Lumia 520            // sets browser to 320 x 533
Nokia N9                   // sets browser to 480 x 854
Pixel 2                    // sets browser to 411 x 731
Pixel 2 XL                 // sets browser to 411 x 823
iPhone 4                   // sets browser to 320 x 480
iPhone 5/SE                // sets browser to 320 x 568
iPhone 6/7/8               // sets browser to 375 x 667
iPhone 6/7/8 Plus          // sets browser to 414 x 736
iPhone X                   // sets browser to 375 x 812
iPad                       // sets browser to 768 x 1024
iPad Mini                  // sets browser to 768 x 1024
iPad Pro                   // sets browser to 1024 x 1366
```

### 例子

```
Open Chrome
Open Firefox
Open Safari

    Desktop
        - Desktop test 1
            // etc.

        - Desktop test 2
            // etc.

    Mobile
        - Mobile test 1
            // etc.

        - Mobile test 2
            // etc.

    iPhone X
        - iPhone X test
```

### 自定义选项和功能

```
Open Chrome

    Set custom options {
        const chrome = i('selenium-webdriver/chrome');
        let opts = new chrome.Options();

        // Call functions on opts here
        // See set[browser]Options() functions

        g('browser options', opts);
    }

        Set custom capabilities {
            g('browser capabilities', {
                'name': 'foobar'
                // This is the Capabilities object. Capabilities go here.
                // See withCapabilities()
            });
        }

        // Note: you can set these before or after the "Open [browser]" step
```



