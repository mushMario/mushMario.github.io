---
title: fluid组图功能测试
author: mush.Mario.
date: 2021-08-07 19:33:13
categories:
- 测试
---

### 普通的图片展示
![](images/1.jpg)
![](images/2.jpg)
![](images/3.jpg)
![](images/4.jpg)
![](images/5.jpg)
![](images/6.jpg)
> 以上（已经后面本应该出现的）图像都截图自Haunted PS1社区的游戏开发者制作的游戏

### fluid组图功能测试_1
> 使用html img标签做相对路径引用（更方便
{% gi 6 3-2-1 %}
  <img src="./index/images/1.jpg" />
  <img src="./index/images/2.jpg" />
  <img src="./index/images/3.jpg" />
  <img src="./index/images/4.jpg" />
  <img src="./index/images/5.jpg" />
  <img src="./index/images/6.jpg" />
{% endgi %}

### fluid组图功能测试_2
> 使用md自带的图片资源应用语句，会在generate时强制转换为绝对路径（闲的没事可以用
{% gi 5 3-2 %}

  ![](/posts/photos/index/images/1.jpg)
  ![](/posts/photos/index/images/2.jpg)
  ![](/posts/photos/index/images/3.jpg)
  ![](/posts/photos/index/images/4.jpg)
  ![](/posts/photos/index/images/5.jpg)

{% endgi %}

---
到底是为什么（。）我已经试了好久了

根据fluid官方的[配置指南](https://hexo.fluid-dev.com/docs/guide/#%E7%BB%84%E5%9B%BE)，这个主题是支持组图显示的。但是我实在是不明白为什么，这个功能永远也不能够在这个文章里面生效。

最糟糕的是，完全一样的图片链接平常明明可以直接使用，一旦试图组图就会无法显示，这到底是我是为什么？

写得我浑身发痒，是bugs在我身上爬的感觉（。

<span style="font-size: 50%">（揉揉mush</span>