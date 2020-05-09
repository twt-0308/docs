---
title: Css选择器
---

## Css选择器
### css选择器分为以下三种
* <font color=#1abc9c>简单选择器</font>
* <font color=#1abc9c>伪元素选择器</font>
* <font color=#1abc9c>组合选择器</font>
#### 且简单选择器分为以下6种
* <font color=#1abc9c>标签选择器</font>
* <font color=#1abc9c>类选择器</font>
* <font color=#1abc9c>ID选择器</font>
* <font color=#1abc9c>通配符选择器</font>
* <font color=#1abc9c>属性选择器</font>
* <font color=#1abc9c>伪类选择器</font>

#### 优先级：
<font color=red>
!important > 行内样式(style) > ID选择器 > 类/属性/伪类 > 元素/关系 
</font>


## Css优先级的计算方式
#### 计算方式可以用一下公式来解决value=a*1000+b*100+c*10+d，依据value值得大小来确定css的优先顺序。其中a表示行内样式，b表示ID选择器的数量，c表示类、伪类和属性选择器的数量，d表示标签选择器和伪元素选择器的数量。
* 1000：内联样式
* 0100：ID选择器
* 0010：类，伪类，属性选择器
* 0001：元素，伪元素，通配符，子选择器，相邻选择器等

