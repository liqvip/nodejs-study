视频：[尚硅谷Node.js零基础视频教程，nodejs新手到高手](https://www.bilibili.com/video/BV1gM411W7ex)

WebStorm 代码高亮+语法提示：
1. 打开 WebStorm，点击 `File` -> `Settings` -> `Languages & Frameworks` -> `Node.js`，勾选 `Coding assistance for Node.js`。

文章
1. [廖雪峰Node.js](https://liaoxuefeng.com/books/javascript/nodejs/index.html)，模块那章讲得不错。
2. [Node.js中文网](http://nodejs.cn/)

# fs 模块
fs 模块是 Node.js 的核心模块，用于对系统文件及目录进行读写操作。

# path 模块
path 模块是 Node.js 的核心模块，用于处理文件路径和目录路径。

# http 模块
http 模块是 Node.js 的核心模块，用于创建 HTTP 服务器和客户端。

网页的绝对路径和相对路径

绝对路径的形式

绝对路径可靠性强，而且相对容易理解，在项目中运用较多

- http://baidu.com ，直接向目标资源发送请求，容易理解，网站的外部会用到此形式
- //baidu.com ，省略了协议，会根据当前页面的协议来请求资源，http 或 https
- /web，与页面 URL 的协议、主机、端口拼接形成完整 URL 再发送请求。中小型网站。

相对路径的形式

相对路径在发送请求时，需要与当前页面 URL 进行计算，得到完整 URL 后，再发送请求，学习阶段用的比较多。
- .css/app.css
- js/app.js
- ../img/logo.png
- ../../mp4/show.mp4