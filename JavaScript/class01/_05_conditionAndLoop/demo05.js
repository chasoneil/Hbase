
// 条件判断和循环

// 1. js 的条件判断和 Java 一模一样
// 有 if else 也有 switch case 格式都一样

// 2. for循环  js的for循环也和java一模一样

// 3. for in循环
let student = {
    name : 'chason',
    age : 20,
    score : 98.5
};

// 类似于 java 中的增强for循环
for (let key in student) {
    console.log(key)
}

let arr = ['a', 'b', 'c'];
for (let i in arr) {            // i 虽然是index 但是不是Number 是 String
    console.log(i + arr[i]);   // 0, 1, 2
}

// 4. while 循环和 do while() 循环都和java 一样

// 5. for of 循环
// 这个循环是ES6新增的，和for in循环的使用方式一样，但是他避免了for in 的问题

let arr1 = [1, 2, 3];
arr1.name = 'chason';

for (let index in arr1) {
    console.log(index);       // 0, 1, 2, name 把数组对象的属性也循环进去了
}

for (let ele of arr1) {
    console.log(ele);       // 1, 2, 3 他直接获取元素，所以没有对象属性的问题
}

// 6. iterable 的 forEach()  js中的很多结构都实现了iterable

// 6.1 数组
arr1.forEach(function(ele, index, array) {
    console.log(index + " - " + ele);  
});

// 6.2 Map
let map1 = new Map([['k1', 'v1'],['k2', 'v2'],['k3', 'v3']]);
map1.forEach(function(value, key, map) {
    console.log(key + ' - ' + value);
});

// 6.3 Set
let set1 = new Set(['chason', 'fox', 'jason']);
set1.forEach(function(ele, sameEle, set) {
    console.log(ele);
});

