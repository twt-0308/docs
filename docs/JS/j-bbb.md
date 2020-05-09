---
title: Js基础一
---

## 如何理解执行上下文
#### 如何理解执行上下文
* 全局执行上下文
* 函数执行上下文
* eval执行上下文
```
每一段js代码执行，都会先创建一个上下文环境。
```
## 如何理解作用域链
#### 简单理解就是从当前环境向父级一层一层查找变量的过程称之为作用域链。
```
var name = '前端未来';
function hello(){
  console.log(name);
}
```
解释：当我们在函数hello里面打印name的时候，会先在hello作用域中查找，如果没有找到就去hello的父级作用域中查找。
## 如何理解原型链
#### 每个函数都拥有一个prototype属性，每个函数实例对象都拥有一个__proto__属性，而这个属性指向了函数的prototype，当我们访问实例对象的属性或者方法时，会先从自身构造函数中查找，如果没有就通过__proto__去原型中查找，这个查找的过程我们称之为原型链。（跟作用域链有点像）
```
// 定义动物 - 父类
function Animal(){
    this.age = 10;
    this.say = function(){
        return 'hello tom';
    }
}
// 定义猫 - 子类
function Cat(){
    this.name = 'tom';
}
// 通过原型继承动物类
Cat.prototype = new Animal()
// 实例化一个cat对象
var cat = new Cat();
// 打印返回true
cat.__proto__ === Cat.prototype
// 打印age，会先查找cat，再查找Animal
console.log(cat.age)
```
## 什么是闭包
#### 闭包是指有权访问另一个函数作用域的变量的函数，创建闭包的常见方式就是一个函数内部创建另一个函数
```
// 正常访问
var lan = 'zh';
function hello(){
  var name = '前端未来';
}
console.log(name)//很明显'undefined'

// 换成闭包
function hello(){
    var name = '前端未来';
    function demo(){
      console.log(name)//打印：前端未来
    }
}
```
## 继承有哪些方法
* 原型继承
* 构造继承
* 实例继承
* call/apply继承(组合继承)
* ES6 使用class extends继承
## 什么是深/浅拷贝，有哪些实现方式
#### JS数据类型分别基本数据类型和引用数据类型，基本数据类型保存的是值，引用类型保存的是引用地址(this指针)。浅拷贝共用一个引用地址，深拷贝会创建新的内存地址。
#### <font color='red'>浅拷贝方法</font>
* 直接对象复制
* 展开运算符……
* Object.assign
```
  //展开运算法
  var a = { age: 19 }
  var b = {...a}
  console.log(b) // {age:19}
  //
  let a = { name: 'aaa' }
  let b = Object.assign({}, a)
  console.log(b) // {name: 'aaa'}
```
#### <font color='red'>深拷贝方法</font>
* JSON.stringify转为字符串再JSON.parse
```
//_tmp和result是相互独立的，没有任何联系，有各自的存储空间。
let deepClone = function (obj) {
    let _tmp = JSON.stringify(obj);//将对象转换为json字符串形式
    let result = JSON.parse(_tmp);//将转换而来的字符串转换为原生js对象
    return result;
};

let obj1 = {
    weiqiujaun: {
        age: 20,
        class: 1502
    },
    liuxiaotian: {
        age: 21,
        class: 1501
    }
};

let test = deepClone(obj1);
console.log(test);
```
* 深度递归遍历
```
function deepClone(obj) {
    let result = typeof  obj.splice === "function" ? [] : {};
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = deepClone(obj[key]);//如果对象的属性值为object的时候，递归调用deepClone,即在吧某个值对象复制一份到新的对象的对应值中。
            } else {
                result[key] = obj[key];//如果对象的属性值不为object的时候，直接复制参数对象的每一个键值到新的对象对应的键值对中。
            }

        }
        return result;
    }
    return obj;
}

let testArray = ["a", "b", "c", "d"];
let testRes = deepClone(testArray);
console.log(testRes);
console.log(typeof testRes[1]);

let testObj = {
    name: "weiqiujuan",
    sex: "girl",
    age: 22,
    favorite: "play",
    family: {brother: "son", mother: "haha", father: "heihei"}
};
let testRes2 = deepClone(testObj);
testRes2.family.brother = "weibo";
console.log(testRes2);
```
## 如何准确判断一个对象是数组
* Object.prototype.toString.call([]) 返回 "[object Array]"
* [].slice (能力判断 )
* [] instanceof Array(类型判断)
* [].proto === Array.prototype
* Array.isArray([]) 存在兼容问题
## 数组有哪些常用方法
* push 末尾添加
* pop 末尾删除
* shift 首部删除
* unshift 首部添加
* concat 数组合并
* join 数组元素 通过连接符 连接
* reverse 数组反转
* sort 数组排序
* map/forEach/filter/indexOf/includes/slice/splice
#### <font color='red'>slice表示截取，slice(start,end)不改变原数组，返回新数组。splice表示删除，splice(start,length,item)，会改变原数组，从某个位置开始删除多个元素，并可以插入新的元素。</font>
## call/apply/bind作用和区别
#### 他们都可以改变函数的作用域。
* call/apply可以直接执行该函数，而bind不会立刻执行
* call/apply作用类似，都可以改变指针和执行函数，区别在于传参不同，call需要单个传参，apply通过数组传参
## 数组如何去重
```
    // 1. ES6 Set去重
    var arr = [1,2,2,4,3,4,1,3,2,7,5,6,1]
    var NewArr = new Set(arr)
    
    // 2. indexOf去重
    function fn(arr){
       let newArr = []
       arr.forEach((val)=>{
             if(newArr.indexOf(val) == -1){
                  newArr.push(val)
              }
        })    
       return newArr  
    }  
    
    // 3. 两层循环逐一对比，生成新数组
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
             if(arr[i]==arr[j]){
                  arr.splice(j,1)
             }
        }
    }   
    
    // 4. sort排序，再单层循环前后对比
    function fn(arr){
       let newArr = []
       arr.sort((a,b)=>{
           return a-b
       })
       arr.forEach((val,index)=>{
           if(val != arr[index+1]){
                newArr.push(val)
           }
       })
       return newArr
    }
```
