---
title: 沙盒
excerpt: 用于测试
author: mush.Mario. & phioa
date: 2021-08-07 19:33:13
categories:
- 测试

---

# 这里是沙盒

这个页面是用于沙盒测试的
测试博客和网页渲染是否正常

# Hello World 搬运

Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)

# README 搬运

> 这个也挺羞耻的（（
> 所以还是算了吧）


# 图像测试

## html img

<img src="./index/images/image_tests/smugllin'.gif" />

## md自带的图片资源应用语句

![](images/image_tests/图像尺寸测试.png)

# fluid功能测试

## 便签

{% note primary %}
primary 
{% endnote %}

{% note secondary %}
secondary 
{% endnote %}

{% note success %}
success 
{% endnote %}

{% note danger %}
danger 
{% endnote %}

{% note warning %}
warning 
{% endnote %}

{% note info %}
info 
{% endnote %}

{% note light %}
light 
{% endnote %}

## 行内标签

行内标签分别有{% label primary @primary %} {% label default @default %} {% label info @info %} {% label success @success %} {% label warning @warning %} {% label danger @danger %}这几种

## 勾选框

{% cb 便签, true, false %}
{% cb 行内标签, true, false %}
{% cb 勾选框, true, false %}
{% cb 按钮, true, false %}
{% cb 组图, true, false %}

## 按钮

{% btn https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley, 快速赚取V币（ %}

## 普通的图片展示

![Neko Yume 猫夢](images/fluid_whatwhat_tests/1.png)
![Haunted PS1 Madvent Calender 2020, Day 16: Down in the Dungeon](images/fluid_whatwhat_tests/2.png)
![Haunted PS1 Madvent Calender 2020, Day 16: Down in the Dungeon](images/fluid_whatwhat_tests/3.png)
![Haunted PS1 Madvent Calender 2020, Day 11: What Lies Within the Ice](images/fluid_whatwhat_tests/4.png)
![Haunted PS1 Madvent Calender 2020, Day 21: Formation](images/fluid_whatwhat_tests/5.png)
![Haunted PS1 Madvent Calender 2020, Day 23: æ](images/fluid_whatwhat_tests/6.png)

{% note info %}
这一部分的图像，除了图一截自《Neko Yume：猫夢》之外
其他的图像都截图自于游戏demo合集中的部分游戏《Haunted PS1 Madvent Calender》
相关链接：
[《Neko Yume：猫夢》的itch页面](https://modus-interactive.itch.io/neko-yume)  
[《Haunted PS1 Madvent Calender》的itch页面](https://hauntedps1.itch.io/madvent2020)
{% endnote %}

{% note warning %}
以上提及的游戏可能含有令人不安的要素，请注意 
{% endnote %}

## fluid组图功能测试

### fluid组图功能测试_1
> 使用html img标签做相对路径引用

{% gi 6 3-2-1 %}
<img src="./index/images/fluid_whatwhat_tests/1.png" />
<img src="./index/images/fluid_whatwhat_tests/2.png" />
<img src="./index/images/fluid_whatwhat_tests/3.png" />
<img src="./index/images/fluid_whatwhat_tests/4.png" />
<img src="./index/images/fluid_whatwhat_tests/5.png" />
<img src="./index/images/fluid_whatwhat_tests/6.png" />
{% endgi %}

### fluid组图功能测试_2
> 使用md的\*我也不知道叫什么的玩意\*\(\"\!\[\]\(\)\"\) <!-- ("![]()") -->  做的绝对路径引用
> 非常头疼的是，貌似这个\*我也不知道叫什么的玩意\*的路径部分会在generate时自动替换为绝对路径  
> + 不是闲着没事最好别用  

{% gi 5 3-2 %}
![](/posts/Sandbox/index/images/fluid_whatwhat_tests/1.png)
![](/posts/Sandbox/index/images/fluid_whatwhat_tests/2.png)
![](/posts/Sandbox/index/images/fluid_whatwhat_tests/3.png)
![](/posts/Sandbox/index/images/fluid_whatwhat_tests/4.png)
![](/posts/Sandbox/index/images/fluid_whatwhat_tests/5.png)
{% endgi %}

---

到底是为什么（。）我已经试了好久了
根据fluid官方的[配置指南](https://hexo.fluid-dev.com/docs/guide/#%E7%BB%84%E5%9B%BE)，这个主题是支持组图显示的。但是我实在是不明白为什么，这个功能永远也不能够在这个文章里面生效。
最糟糕的是，完全一样的图片链接平常明明可以直接使用，一旦试图组图就会无法显示，这到底是我是为什么？
写得我浑身发痒，是bugs在我身上爬的感觉（。
<span style="font-size: 80%;">（揉揉mush</span>
谢谢phioa TT

## iframe标签插件测试
> 真的很好听！（吧...？

{% iframe http://music.163.com/outchain/player?type=2&id=1354257377&auto=1&height=66 %}