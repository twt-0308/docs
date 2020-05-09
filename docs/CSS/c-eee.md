---
title: flex布局
---
## flex介绍
* flex是一种弹性布局，包含flex-container和flex-item.
## 常用的属性包括
* flex-direction 属性决定主轴的方向
```
.box{
     flex-direction:row | row-reverse |  column | column-reverse; 
}
```
![Image text](https://images2018.cnblogs.com/blog/1112916/201807/1112916-20180725161733564-2075495802.png)
* flex-wrap 默认情况下，项目都排在一条线（又称“轴线”）上。flex-wrap属性定义，如果一条轴线 排不下，如何换行
```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
 1.nowrap（默认）：不换行 2.wrap: 换行，第一行在上方 3.wrap-reverse: 换行，在第一行的下方
* flex-flow 属性是flex-direction属性和flex-wrap属性的简写形式，默认 row nowrap。
```
.box{
    flex-flow:<flex-direction> || <flex-wrap>;
}
```
* justify-content
```
.box{
    justify-content:flex-start | flex-end | center | space-between |space-around;
}
```
![Image text](https://images2018.cnblogs.com/blog/1112916/201807/1112916-20180725163343859-2034975257.png)
* align-items 属性定义项目在交叉轴上如何对齐。
```
.box{
    align-items:flex-start | flex-end | center |baseline | stretch;
}
```
![Image text](https://images2018.cnblogs.com/blog/1112916/201807/1112916-20180725163923600-1353249493.png)
* align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
![Image text](https://images2018.cnblogs.com/blog/1112916/201807/1112916-20180725164452926-1688982092.png)


