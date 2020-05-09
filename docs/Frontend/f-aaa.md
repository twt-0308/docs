---
title: 前端要闻
---
## 前端网站常规优化方案
#### 优化策略：减少请求次数、减小资源大小、提高响应和加载速度、优化资源加载时机、优化加载方式
* 合并、压缩、混淆html/css/js文件（webpack实现，减小资源大小）
* Nginx开启Gzip，进一步压缩资源（减小资源大小）
* 图片资源使用CDN加速（提高加载速度）
* 符合条件的图标做base64处理（减小资源大小）
* 样式表放首部，JS放尾部（JS单线程，会阻塞页面；资源加载方式）
* 设置缓存（强缓存和协商缓存，提高加载速度）
* link或者src添加rel属性，设置prefetch或preload可预加载资源。（加载时机）
* 如果使用了UI组件库，采用按需加载（减小资源大小）
* SPA项目，通过import或者require做路由按需（减小资源大小）
* 服务端渲染SSR，加快首屏渲染，利于SEO
* 页面使用骨架屏，提高首页加载速度（提高加载速度）
* 使用图片懒加载-lazyload
* 使用 JPEG 2000, JPEG XR, and WebP 的图片格式来代替现有的jpeg和png，当页面图片较多时，这点作用非常明显