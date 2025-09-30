// 字符串和数组

// 1. 字符串的很多操作和Java完全一样

// 1.1 字符串占位符
let name = "chason";
let age = 20;
let msg = "姓名 " + name + " 年龄 " + age;  // 和 java 一样
console.log(msg);

// 1.2 第二种字符串拼接
let msg1 = `姓名 ${name} 年龄 ${age}`;
console.log(msg1);

// 1.3 多行字符串
let str = `
line1
line2
` 
console.log(str);

// 2. js 数组

// 2.1 js 数组可以存放不同的元素
let arr = [1, 2, 'chason', null];
console.log(arr);

// 2.2 可以使用下标直接越界定义数组元素
arr[5] = 3.14;
console.log(arr);  // [1, 2, 'chason', undefined, 3.14] 会改变数组长度
console.log(arr[4]); // undefined

// 2.3 可以直接调整arr的大小
arr.length = 2;
console.log(arr); [1, 2]

// 注意: 因为js数组没有越界的概念，所以更要注意数组的边界问题

// 2.4 slice() 分割数组 类似于 String 中的 substring()
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(0, 3)); // [1, 2, 3]

// 2.5 arr 的队列操作 push() pop()  shift() unshift()
// push 向数组尾部增加一个元素 pop 弹出数组尾部的元素
arr1.push(6);
console.log(arr1);
console.log(arr1.pop())

// unshift 向数组头部添加一个元素 shift 移除头部的元素
arr1.unshift(0);
console.log(arr1);
console.log(arr1.shift());

// 2.6 sort() 数组排序

// 2.7 reverse() 数组反转

// 2.8 splice() 数组任意位置元素变动

// 2.9 concat() 数组拼接

// 2.10 join() 将数组中的每个元素使用指定的符号连接输出一个字符串

let arr5 = ['a', 'b', 'c'];
console.log(arr5.join('-'));  // a-b-c
