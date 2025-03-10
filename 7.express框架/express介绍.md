# Express 介绍
express 是一个基于 nodejs 平台的极简、灵活的 WEB 应用开发框架。官方网址：[https://www.expressjs.com.cn/](https://www.expressjs.com.cn/)
简单来说，express 是一个封装好的工具包，封装了很多功能，便于我们开发 WEB 应用(HTTP 服务)

# Express 路由
官方定义：路由确定了应用程序如何响应客户端对特定端点请求。

## 路由的使用
一个路由的组成有：`请求方法`、`路径`、`回调函数`组成
express 中提供了一系列方法，可以很方便的使用路由。

## 获取请求报文参数
express 框架提供了一些 API 来方便的获取请求报文中的数据，并且兼容原生 HTTP 模块的读取方式

## 获取路由参数

## 获取请求体数据
express 可以使用 body-parser 中间件来解析请求体数据

# 中间件
## 什么是中间件
中间件本质是一个函数回调函数，中间件函数可以像路由回调一样访问请求对象（req）、响应对象（res）。

## 中间件的作用
中间件的作用就是使用函数封装公共操作，简化代码

## 中间件的类型
- 全局中间件
- 路由中间件
- 静态资源中间件
>注意事项：
> 1. index.html 文件作为默认打开的资源
> 2. 如果静态资源与路由规则同时匹配，谁先匹配谁就响应
> 3. 路由响应动态资源，静态资源中间件响应静态资源


# 防盗链
## 什么是防盗链
防盗链是指在网站上设置一些规则，防止其他网站盗用自己的资源

## 防盗链的实现


# EJS 模板引擎
## 什么是 模版引擎
模版引擎是分离`用户界面`和`业务数据`的一种技术，模版引擎可以将数据和模版文件结合生成最终的 HTML 文件

## 什么是 EJS
EJS 是一个高效的 JavaScript 模版引擎
官网：[https://ejs.co/](https://ejs.co/)
中文站: [https://ejs.bootcss.com/](https://ejs.bootcss.com/)

