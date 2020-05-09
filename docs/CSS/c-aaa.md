---
title: Css盒子居中的方法
---
# Css盒子居中有下列几种方式
## 水平居中
```
<div style="width:200px;margin:0 auto;background-color: yellow;">水平居中</div>
```

## 绝对定位水平垂直居中
```
<div style="position: absolute;
     width: 500px;
     height: 300px;
     margin: auto;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     background-color: green;">水平垂直居中</div>
```

## 水平垂直居中一
```
<div style="position: relative;
     width:400px;
     height:200px;
     top: 50%;
     left: 50%;
     margin: -100px 0 0 -200px;
     background-color: red;">水平垂直居中</div>
```

## 水平垂直居中二
```
<div style="position: absolute;
     width:300px;
     height:200px;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     background-color: blue;">水平垂直居中</div>
```

## flex 布局居中
```
<div style="display: flex;align-items: center;justify-content: center;">
    <div style="width: 100px;height: 100px;background-color: gray;">flex 布局</div>
</div>
```
