

// JS 中的函数

// 1. 定义函数

// 1.1 常规的定义
function abs(x) {

    if (x < 0) {
        return -x;
    } 

    return x;
}

console.log(abs(-10));

// 1.2 使用变量定义的函数
let abs1 = function(x) {

    if (x < 0) {
        return -x;
    }

    return x;
};

console.log(abs1(-9));

// js中的函数可以传入任意数量的参数，你可以任意传入，但是实际使用的只是函数本身需要的函数
abs(10, null, "haha");

// 1.3 js 提供的arguments
// js中提供了一个arguments可以迭代所有的参数

function test(a, b) {
    for (let ele of arguments) {
        console.log(ele);
    }

    // 可以用来判断传入的参数的个数
    if (arguments.length === 2) {
        console.log('param correct');
    } else {
        console.log('param error');
    }
}

test('p1', 'p2', 'p3', 4);  //  'p1', 'p2', 'p3', 4

// 1.4 rest 参数  是ES6引入的用来表示除了特定参数的其他参数的方法

let test1 = function(a, b, ...rest) {
    console.log('a=' + a);
    console.log('b=' + b);
    console.log('rest=' + rest);        // 3, 4
}

test1(1, 2, 3 ,4);

// 2. 函数变量的作用域
// 函数的作用域和Java几乎相同，内部可以访问外部

// 2.1 全局作用域 window
var globalParam = "abc";
console.log(window.globalParam);

// 同理，使用全局参数定义的函数也是全局的
let globalFunction = function(x) {  // 等同于 window.globalFunction
    console.log(x);
};

// 2.2 使用自己的全局变量
// 为了防止使用的很多函数和系统函数或者变量冲突，可以将这些变量绑定到自己的全局变量中

let MYAPP = {};

MYAPP.test = function(x) {
    console.log(x);
};

MYAPP.test(1);

// 2.3 let 和 var
// var 无法声明一个块级的变量范围 但是let 可以

MYAPP.test1 = function() {

    for (var i=0; i<3; i++) {

    }
    console.log(i);     // 3

    for (let j=0; j<3; j++) {}  // let 定义的变量只有for循环内有效
    // console.log(j);  j is not defined

};

MYAPP.test1();

