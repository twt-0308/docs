---
title: Css实现三列布局
---

## Css浮动
* 第一个float:left，第二个float:right，第三个设置margin-left和margin-right

## 绝对定位法
* 第一个定位到left，第二个定位到right，第三个设置margin-left和margin-right

## flex布局
```
.left{
  width:200px;
  或者
  flex:0 0 200px;
}
.right{
  width:200px;
  或者
  flex:0 0 200px;
}
.center{
  flex:1;
}
```
