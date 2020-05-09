---
title: Js基础二
---
## for...of
#### for...of 是ES2015版本引入的语法，它可以遍历数组、类数组、以及Map/set/字符串等
* 数组迭代
```
for (const number of [1,2,5]) { }
```
* 类数组迭代
```
for (const number of arguments) { }
```
* 字符串迭代
```
const message = 'hello';

for (const character of message) { }
```
* map迭代
```
const map = new Map();
map.set("name", '前端未来');
map.set("author", '河畔一角');
for(const item of map){ }
// 或者
for(const [key,val] of map){ }
```
* Set迭代
```
const names = new Set(['Tom', 'Jack', 'Lily']);
for (let name of names) { }
```
