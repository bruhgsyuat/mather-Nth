![Mather nth Logo](https://www.github.com/bruhgsyuat/mather-nth/raw/master/img/newIcon.png)

# Mather *n*th - An open-sourced Web app for Mathematics

![zzllrr Mather Demo Version Screenshot](https://github.com/zzllrr/mather/raw/master/img/zzllrr-mather-demo.jpg)
 
For global users <https://bruhgsyuat.github.io/mather-Nth/>

[![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://mit-license.org/) [![Donate](https://img.shields.io/badge/donate-Paypal-green)](https://www.paypal.me/zzllrr/8)

| [About](https://bruhgsyuat.github.io/mather/about.html "Introduction") | [API](https://zzllrr.github.io/mather/api.html) | [Background](https://github.com/zzllrr/mather/raw/master/RESEARCH.md) | [MIT License](https://github.com/zzllrr/mather/raw/master/LICENSE) | [Credits](https://zzllrr.github.io/mather/api.html?sub=3rd-party) |

## Aims
Make mathematics easier to learn, practice, teach, study, appreciate, play, show, spread and reach.

## Summary
- Out of the box 
- Serverless, Offline & Step-by-step
- Richmedia Showcase
- Knowledge Base
- Wide range of users
- Comprehensive content on Mathematics
- Multi-functionality
- Compact, portable, powerful, customizable



## How to Use
### 1. Online
Click on this URL <https://zzllrr.github.io/mather/>

### 2. Offline
1. Download the installation package source file
2. Open `index.html`

|Filename|Application|Entrance|
|:--:|:--:|:--:|
|index.html|Homepage|[Local](/index.html) [Online](https://bruhgsyuat.github.io/mather-Nth/index.html)|
|editor.html|Editor|[Local](/editor.html) [Online](https://bruhgsyuat.github.io/mather-Nth/editor.html)|
|doodle.html|Doodle|[Local](/doodle.html) [Online](https://bruhgsyuat.github.io/mather-Nth/doodle.html)|
<!--
|document.html|Document|[Local本地](/document.html) [Online在线](https://bruhgsyuat.github.io/mather-Nth/document.html)|
|slide.html|Slide幻灯片|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/slide.html) [Local本地](/slide.html) [Online在线](https://zzllrr.github.io/mather/slide.html)|
|speech.html|Speech语音|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/speech.html) [Local本地](/speech.html) [Online在线](https://zzllrr.github.io/mather/speech.html)|
|3d.html|3D三维立体|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/3d.html) [Local本地](/3d.html) [Online在线](https://zzllrr.github.io/mather/3d.html)|
|vr.html|VR虚拟现实|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/vr.html) [Local本地](/vr.html) [Online在线](https://zzllrr.github.io/mather/vr.html)|
|ar.html|AR增强现实|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/ar.html) [Local本地](/ar.html) [Online在线](https://zzllrr.github.io/mather/ar.html)|
|wiki.html|Wiki百科|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/wiki.html) [Local本地](/wiki.html) [Online在线](https://zzllrr.github.io/mather/wiki.html)|
|teaching.html|Teaching教学|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/editeaching.html) [Local本地](/teaching.html) [Online在线](https://zzllrr.github.io/mather/teaching.html)|
|academic.html|Academic学术|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/academic.html) [Local本地](/academic.html) [Online在线](https://zzllrr.github.io/mather/academic.html)|
|technology.html|Technology技术|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/technology.html) [Local本地](/technology.html) [Online在线](https://zzllrr.github.io/mather/technology.html)|
|science.html|Science科学|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/science.html) [Local本地](/science.html) [Online在线](https://zzllrr.github.io/mather/science.html)|
|culture.html|Culture文化|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/culture.html) [Local本地](/culture.html) [Online在线](https://zzllrr.github.io/mather/culture.html)|
|about.html|About关于|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/about.html) [Local本地](/about.html) [Online在线](https://zzllrr.github.io/mather/about.html)|
|api.html|API接口|[For Chinese Users国内用户](https://zzllrr.gitee.io/mather/api.html) [Local本地](/api.html) [Online在线](https://zzllrr.github.io/mather/api.html)|
-->


## Function
### 0. Editor
On the right side of the input box, select an input format to edit the content of the corresponding format.

- 1. Math Formula Editor
In the input box, enter LaTeX code (Unicode characters are supported), or click the corresponding formula button to get the template, and then edit it. Click the preview button (left arrow) on the right to turn on or off the real-time LaTeX mathematical formula preview function.

- 2. Document Editor
Click the Show menu, Document submenu, In the input box, enter text content (and graphics or animation commands), and then click the Run (Ctrl + Enter) button at the bottom left to enter document browsing mode. Supports mixed content typesetting in LaTeX, Markdown, HTML, SVG, Canvas, JavaScript, Echarts, Zdog, VR, AR and other formats, Content in different formats needs to be enclosed by corresponding closing tags. For example:

```html
<IL>x^2+y^2=z^2</IL>
 ```

```html
<LA>x^2+y^2=z^2</LA>
```

- Markdown: Use MD tags to wrap around Markdown text. to enter math in markdown, you have to wrap it in `$`, and the enter with LaTeX syntax.
- HTML: Direct input.
- Svg Vector: Enter SVG code directly, or use SV tags.

```html
<SV><rect x=10 y=10 width=100 height=30 stroke=green fill=none /></SV>
```

- Canvas 画布：用CV标签包裹Canvas的JS代码（变量c代指canvas.getContext('2d')）

``` <CV> ```
```js
c.strokeRect(10, 20, 200, 150);
```
``` </CV> ```

- JavaScript: 用JS标签包裹JS代码片段

``` <JS> ```
```js
1+2
```
``` </JS> ```

- Echarts: 用EC标签包裹Echarts中的JSON数据命令

``` <EC> ```
```json
{"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[100,932,901,200,400,600,700],"type":"line"}]}
```
``` </EC> ```

可以画出一个折线图

- I18 国际化：用I18标签包裹英文键值（软件会在预览时自动翻译为当前语言）：

```html
<I18>Algebra and Geometry</I18>
```

- EN 翻译成英语：用EN标签包裹英文键值（软件会在预览时自动翻译为英文语言）：

```html
<EN>代数 几何</EN>
```

- 3. Plot 数学图形绘制
输入方式，支持命令输入（文本框输入）和可视化编辑（点击右上角图标，或者按下快捷键Esc进入）。
输出格式，支持Canvas画布或SVG矢量图。
另外，还封装集成了Echarts图表生成工具箱，实现各种统计图的快速生成。
另外，点击Graphic（作图）菜单，可以输入数据，点击产生相应数学图形。
另外，还嵌入集成了GeoGebra, Desmos等著名免费数学软件模块。


### 1. Solve 解题

点击解题（Solve）菜单，选择相应子学科，点击子菜单，输入内容，点击运行按钮即可
目前仅支持下列学科的解题：
+ 21 代数学 -> 2110 线性代数（或 2119 其它代数学科，初等代数的内容放在这里）
+ 81 离散数学

eg. Solving Determinant 例如：求解矩阵行列式 
1. 点击解题（Solve）菜单，选择相应子学科：21 代数学 -> 2110 线性代数，默认进入矩阵子选项
2. 选择“行列式”，点击|A|子菜单
3. 文本框输入矩阵： ```1 2 3 4```
4. 点击下方运行 (Ctrl + Enter)按钮，立即得出行列式求解步骤和结果


### 2. Show 演示 
点击演示（Show）菜单，文档（Document）子菜单，

- Document 文档功能：在输入框输入内容（支持格式参见上述文档编辑功能的介绍）。

如使用外链文档，直接在输入框中输入文档网址，点击运行 (Ctrl + Enter)按钮即可

例如，打开网址：document.html?src=你的文档地址

即可在线查看你的文档

- PPT 功能：使用section闭合标签，将每一张幻灯片的内容括起来。

如使用外链PPT文档，直接在输入框中输入文档网址，点击运行 (Ctrl + Enter)按钮即可

例如，打开网址：slide.html?src=你的PPT文档地址，

即可在线演示你的PPT文档

- Text to Speech 文字转语音：输入文本内容，点击左下方运行 (Ctrl + Enter)按钮，播放语音音频。

注意：文字转语音功能，需要联网才能使用。

- VR、AR 功能：使用a-scene闭合标签，编辑相应源代码，再点击运行 (Ctrl + Enter)按钮即可。

如使用外链VR、AR文档，直接在输入框中输入文档网址，点击运行 (Ctrl + Enter)按钮即可

例如，打开网址：vr.html?src=你的VR文档地址 或 ar.html?src=你的AR文档地址 

即可在线查看你的VR作品或AR作品



### 3. Wiki 百科
点击百科（Wiki）菜单，选择相应子学科，即可。

### 4. Teaching 教学
贴近教学场景所支持的功能，如课程及题库设计、考试试题出卷、阅卷批改、课堂测验、抢答、投票等（待完善）

### 5. Academic 学术
满足科研人员所支持的功能，如论文检索、写作发表、学术研讨、竞赛奖项追踪等（待完善）


### 6. Technology 技术
满足技术人员所支持的功能，如数学建模，软件编程，硬件设计，产学研标准化（待完善）

### 7. Science 科学
满足数学科普及在相关的大科学问题、终极问题方面的基础研究探索功能，如宇宙、生命、健康、智能、环境保护等（待完善）

### 8. Culture 文化
通过数学游戏、玩具、历史、漫画、视频、博客等。来加快普及数学文化，增进大众对数学的了解。（待完善）


## Future Plans 未来方向
- Restucture core 完成内核精简和重构，减少不同开源库之间的重复冗余和不相容代码
- Open protocol promotion 推进行业协议

## How to Contribute 如何贡献
- 如果你是开发者，相信你的编码能力一定比小乐强。
欢迎创建你自己的分支branch，将其中的非第三方API，进行优化重构重写。
一些第三方API，也可以使用您认为更优秀的库进行替换升级。
- 如果你是数学工作者，请不吝赐教您的专业数学知识，贡献理论知识库，或相关建设建议。
方法是编写一系列该软件支持的格式的数学课程或百科内容。
- 如果你是用户，请尽情使用和分享吧！让数学人尽可学。

## Additional information 附录相关链接

* 小乐数学GitHub地址
https://github.com/zzllrr/mather

* zzllrr Imager Geek 小乐图客ZIG
https://chrome.google.com/webstore/detail/gfjhimhkjmipphnaminnnnjpnlneeplk?hl=zh_cn

* zzllrr RSS Reader 小乐阅读ZRR
https://chrome.google.com/webstore/detail/aphanomkkjgledipighdfjnilhfenpam?hl=zh_cn

* Contact 联系小乐邮箱：zzllrr@gmail.com

* WeChat 小乐微信公众号：zzllrr小乐

* Donate 捐赠小乐
[![Donate](https://img.shields.io/badge/donate-Paypal-green)](https://www.paypal.me/zzllrr/8)

![Donate zzllrr via Wechat](https://github.com/zzllrr/mather/raw/master/img/F1weixinPay.jpg)
