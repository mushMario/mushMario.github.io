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

## 你好！

- 这是个私人项目[^指private项目]

- [^是说其他人也没法看]: 不会有其他人看

- 因此readme也没有什么意义

- 我也不知道我为什么要搞这个

- **能想到的原因如下**:

  1. 因为我很无聊
  2. 因为我很无聊
  3. 因为我很无聊
     - 我真的很无聊！
       - 在此的无聊，指的是我人格层面上的无聊
       - 我就是那种会让别人说"哇，这个人好无聊噢"的人

  - 综上所述，我真的没想到什么理由。

- 这里是一行代码！

  - ~~*并不是*~~

```
#include <limits>

class Phioa:public PieceOfTrash{
private:
	long double desperatePoint = std::numeric_limits<long double>::max();
public:
	Phioa():PieceOfTrash(){}
	Phioa(bool isBourgeoisie):PieceOfTrash(){ // a piece of trash can be not bourgeoisie
		if(isBourgeoisie){
			isBourgeoisie = false; // neither do phioa
		} else {
			Die();
		}
	}
	
	void Die(){
		MotherEarth->GetAllHuman()->MakeHappy(std::numeric_limits<long double>::max());
		PieceOfTrash::Decompose(this);
	}
	
	RandomComplains MakeHappy(double inHappyPoint){
		desperatePoint = std::numeric_limits<long double>::max();
		return RandomComplains();
	}
}; 
```

- 这里是一行引用！

  - ~~*并不是*~~

  > 一个幽灵，  
  > \*\*\*\*的幽灵，  
  > 盘旋在欧罗巴的大陆上。  

- 这里是一张图片！

  - ~~*并不是*~~  
    ![mush](https://avatars.githubusercontent.com/u/39669570)  
    ![another mush](https://mushmario.github.io/img/avatar.png)  

- [这里是一串链接！](https://mushmario.github.io)

## 再见！

[^指private项目]: https://mushmario.github.io

[原文](

# 图像测试

## html img

<img src="./index/images/smugllin'.gif" />

## md自带的图片资源应用语句

![](images/图像尺寸测试.png)

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

{% btn https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley, 快速赚取V币（,  %}

## 普通的图片展示

![Neko Yume 猫夢](images/1.png)
![Haunted PS1 Madvent Calender 2020, Day 16: Down in the Dungeon](images/2.png)
![Haunted PS1 Madvent Calender 2020, Day 16: Down in the Dungeon](images/3.png)
![Haunted PS1 Madvent Calender 2020, Day 11: What Lies Within the Ice](images/4.png)
![Haunted PS1 Madvent Calender 2020, Day 21: Formation](images/5.png)
![Haunted PS1 Madvent Calender 2020, Day 23: æ](images/6.png)

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


## fluid组图功能测试_1

{% gi 6 3-2-1 %}
<img src="./index/images/1.png" />
<img src="./index/images/2.png" />
<img src="./index/images/3.png" />
<img src="./index/images/4.png" />
<img src="./index/images/5.png" />
<img src="./index/images/6.png" />
{% endgi %}

## fluid组图功能测试_2

{% gi 5 3-2 %}
![](/posts/photos/index/images/1.png)
![](/posts/photos/index/images/2.png)
![](/posts/photos/index/images/3.png)
![](/posts/photos/index/images/4.png)
![](/posts/photos/index/images/5.png)
{% endgi %}

---

到底是为什么（。）我已经试了好久了
根据fluid官方的[配置指南](https://hexo.fluid-dev.com/docs/guide/#%E7%BB%84%E5%9B%BE)，这个主题是支持组图显示的。但是我实在是不明白为什么，这个功能永远也不能够在这个文章里面生效。
最糟糕的是，完全一样的图片链接平常明明可以直接使用，一旦试图组图就会无法显示，这到底是我是为什么？
写得我浑身发痒，是bugs在我身上爬的感觉（。
<span style="font-size: 80%">（揉揉mush</span>
谢谢phioa TT

