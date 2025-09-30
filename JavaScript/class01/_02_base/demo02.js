

// 1. Js的注释和java一样

/*
多行注释也和Java一样
第二行
*/


// 2. JS的代码行

var x = 1  // js 的分号可以不加但是建议保留

'Hello JS';     // 这也是一个合法的句子

var a = 1; var b = 2; // 写在一行也行

// ----------------------------------

// 3. 数据类型和变量

/* 
JS的数据类型: 
1. Number(包含整数和浮点)
2. 字符串
3. 布尔: 只有true 和false 两种
4. BigInt
5. null 和 undefined
*/

var n1 = 10;
var n2 = 3.14;
var n3 = 1.22e2

// NaN 表示 Not a Number 不是一个数
// Infinity 表示无限大 其实就是超过了JS的最大值

var m1 = 12;
var m2 = 12.00;
if (m1 == m2) {
    console.log("Same");        // result： same 所以js不区分整数和浮点
} else {
    console.log("Not Same");
}

console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991   2^53

// js字符串是使用 '' 或者 "" 表示的

// Js中的逻辑运算和Java中一样 

console.log(true && true);
console.log(false || true);
console.log(!false);

/* 注意：
    == 和 === 是作用相同，都是判断是不是相同的，但是 == 会先转换类型再做判断
    === 则不会，所以推荐使用 ===
*/

var m3 = 12;
var m4 = "12.0"

if (m3 == m4) {
    console.log("Same");        // result：same  
} else {
    console.log("Not Same");
}

if (m3 === m4) {
    console.log("Same");        // result：not same  
} else {
    console.log("Not Same");
}

// 如何判断一个数字是不是NaN
console.log(isNaN(m3));     // false
console.log(isNaN(m4));     // false
console.log(isNaN(NaN));    // true


// bigint 通过在数字后面添加n表示
// 注意： bigint 只能和 bigint 做计算，不能和Number做计算
var big1 = 123n;  

//4. 数组 和 对象

// js 使用 [] 表示数组，数组中可以放不同的元素
var arr1 = [1, 'a', null, 3.14];

// 虽然数组也可以通过 new Array(xx, xx, xx) 来构建，但是不推荐

// js 对象
var person = {
    name : "chason",
    age : 20
};

console.log(person.name)

/*
 注意:
 
 如果使用 i = 10 这种方式定义的变量 这个i 会是一个全局变量
 如果使用 var i=10 这种方式则 i是一个局部变量
 全局变量表示在其他文件中也是可以获取的变量
 */

 // 通过 use strict 开启严格模式