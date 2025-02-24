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

## 绝对路径的形式
绝对路径可靠性强，而且相对容易理解，在项目中运用较多

- http://baidu.com ，直接向目标资源发送请求，容易理解，网站的外部会用到此形式
- //baidu.com ，省略了协议，会根据当前页面的协议来请求资源，http 或 https
- /web，与页面 URL 的协议、主机、端口拼接形成完整 URL 再发送请求。中小型网站。(推荐使用)

## 相对路径的形式
相对路径在发送请求时，需要与当前页面 URL 进行计算，得到完整 URL 后，再发送请求，学习阶段用的比较多。

- .css/app.css
- js/app.js
- ../img/logo.png
- ../../mp4/show.mp4

## 页面 URL 的使用场景
- a 标签 href
- link 标签 link
- script 标签 src
- img 标签 src
- video audio 标签 src
- form 标签 action
- ajax 请求中 url

## 设置 MIME 类型

## GET 和 POST 请求应用场景和区别
场景小结

GET 请求的情况
- 在地址栏直接输入 url 访问
- 点击 a 链接
- link 标签引入 css
- script 标签引入 js
- img 标签引入图片
- video audio 标签引入视频音频
- ajax 请求中 get 请求
- form 表单 method 为 get(不区分大小写)

POST 请求的情况
- form 表单 method 为 post(不区分大小写)

GET 和 POST 请求的区别
  GET 和 POST 是 HTTP 协议的两种请求方式，GET 请求和 POST 请求的区别主要有以下几点：

1. 作用。GET 请求用于获取数据，POST 请求用于提交数据。
2. 参数传递。GET 请求通过 URL 传递参数，POST 请求通过请求体传递参数。
3. 安全性。GET 请求的参数会显示在 URL 中，POST 请求的参数不会显示在 URL 中。
4. 数据大小。GET 请求传递的数据大小有限制，一般为 2k，POST 请求传递的数据大小没有限制。

    