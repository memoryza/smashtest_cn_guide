# 默认元素查找器属性

smashtest默认定义了以下属性，你可以在这些属性前面加 `not`

* `visible` = 如果元素对用户可见则匹配\(高宽&gt;0, 没有hidden属性，opacity &gt; 0,所有祖先opacity&gt;0\)
* `any visibility`=匹配所有元素无论元素是否可见

* `enabled` = 匹配没有 disabled 属性的元素

* `disabled`= 与 enabled相反

* `checked` = 匹配所有checked属性为true的元素

* `unchecked`= 与checked相反

* `selected` = 匹配所有selectd为true的元素（用于select）

* `focused`= 匹配当前focus的元素

* `element` = 匹配任意元素

* `clickable`= 匹配可以点击的元素\(a, button, label, input, textarea, select, option\)或者有curso:pointer 样式

* `page title 'title'` =  当页面title不等于给定的串则报错

* `page title contains 'title'` = 当页面title不包含给定的串则报错（忽略大小写）

* `page url 'url'` = 当页面url不等于给定的串则报错（绝对或者相对路径）

* `page url contains 'url'` = 当页面url不等于包含的串则报错

* `next to 'text'` = 匹配DOM中最接近给定文本的元素。获取每个元素并将其周围的容器扩展到其父元素、父元素的父元素等，直到找到包含文本的容器-匹配与该容器相关联的一个元素（如果存在关联，则匹配多个元素）

* `value 'text'` = 匹配值等于给定串的元素

* `contains 'text'`=匹配给定文本包含在InnerText、Value、Placeholder、关联label的InnerText或select选中的InnerText的元素\[不区分大小写，忽略头尾空格，并且多个空格视为一个（“文本”和DOM中的文本）\]

* `'text'` = 同`contains 'text'`

* `contains exact 'text'`=精确匹配给定文本包含在InnerText、Value、Placeholder、关联label的InnerText或select选中的InnerText的元素

* `innertext 'text'`=匹配innertext包含给定文本的元素

* `selector 'selector'`=匹配给定的css选择器

* `xpath 'xpath' `= 匹配给定的[xpath](https://developer.mozilla.org/en-US/docs/Web/XPath)

* `style 'name:value' `= 匹配给定的style 为 `name:value`的元素

* `position 'N'` = 从当前元素列表第n个元素匹配一个元素（例如[1st, 2nd, 3rd](/uice-shi/yuan-su-cha-zhao-qi.md)）



