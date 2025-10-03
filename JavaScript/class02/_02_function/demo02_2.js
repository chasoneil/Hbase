

// 1. 函数的闭包： 函数作为一个返回值返回
// 这种时候函数不是立即执行，而是调用的时候再执行

function outerSum(arr) {

    function sum() {                            // 注意： 函数内部的函数不用再传递参数了，里面的函数可以拿到最外面的函数的参数
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }

    return sum;
}

let f = outerSum([1, 2 ,3]);   // 返回一个函数，这个时候没有做求和
console.log(f);

let res = f();
console.log(res);               // 调用函数的时候才求和

// 2. 箭头函数： 一种定义函数的新方式 同时函数是匿名的

/*
 下面这个函数相当于 
 function(x) {
    return x * x;
 }
 */
let fn = x => x * x;
console.log(fn(2));             // 4

fn = (x, y) => {
    return x + y;
}
console.log(fn(2, 5));          // 7

fn = () => {
    console.log('no param');
}
fn();

// 3. 标签函数

// 4. 生成器：生成器更像是一个记住函数执行步骤的函数，他可以记录函数执行的步骤，多次返回每步的结果

function fab(max) {

    let a = 0, b = 1;
    let arr = [0, 1];
    while (a < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    
    return arr;
}

console.log(fab(5));        // 这种函数只能返回一次

// 使用生成器

function* fib(max) {        // 使用 * 定义生成器

    let a = 0, b = 1;

    while (a < max) {
        let oldB = b;
        b = a+b;
        yield a = oldB;
    }

}

let fi = fib(5);
console.log(fi.next());
console.log(fi.next());
console.log(fi.next());



