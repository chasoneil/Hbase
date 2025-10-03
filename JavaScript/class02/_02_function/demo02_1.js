
// 1. JS 方法
// 定义： 在对象中定义的函数称为这个对象的方法

// 1.1 常规

let student = {
    name : 'xiaoming',
    age : 18,
    study: function() {                         // 方法绑定成对象的属性
        console.log(this.name + " start study.");
    }
};

student.study(); // 注意：这里是方法的调用 所以不要忘记()

// 1.2. this 关键字的作用域问题

let student1 = {

    name : "xiaohong",
    age : 20,
    msg : function () {
        console.log(`age: ${this.age}`);
        let that  = this;
        function inner() {
            // 方法内部的方法 this 关键字不再指向对象本身 
            console.log(`inner-name ${name}`);  // name 的值获取不到
            console.log(that.name);     // 这种方式才能获取到
        }

        // 内部的方法在内部调用
        inner();
    }
};

student1.msg();

// 1.3 JS 的 apply() 和 call() 
// 控制指向的对象 todo


// 2 高阶函数  一个函数接受另一个函数作为参数

// 2.1 高阶函数入门

function add(x ,y, f) {
    return f(x) + f(y);
}

let p_1 = function (x) {
    return x - 1;
}

let res = add(3, 4, p_1);
console.log(res);               // 5


// 2.2 高阶函数之 map/reduce
// 两个方法都是 arr 中的方法 可以直接针对arr 做出改变

// map 可以使用传入的方法直接对arr做计算

function pow(x) {
    return x * x;
}
let arr = [1, 2, 3];
let res1 = arr.map(pow);
console.log(res1);

let res2 = arr.map(String); // 直接把arr中的元素转化成字符串
console.log(res2);

// reduce 是必须接受两个参数，将对应的函数作用在arr上，前一个计算的结构就是后一个的参数

// 例如： 利用reduce 求和
let arr1 = [1, 3, 5, 7, 9];
let ans = arr1.reduce(function (x, y) {
    return x + y;                           // 等于是 1+3 + 5  + 7 + 9
});
console.log(ans);

// 2.3 高阶函数之 filter()
// filter 的作用是将传入的函数作用于数组的每个元素，针对规则返回true的保留，返回false的剔除

let arr2 = [1, 3, 4, 5, 6];
res = arr2.filter(function (x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
});
console.log(res);       // [4, 6]

// 2.4 高阶函数 sort() 用来排序
// 注意： sort排序是按照ascii码的顺序进行排序
// 如果排序的是数字，那么sort会先将数字转化成string再排序  也就是说10 排在2 的前面

let arr3 = [3, 10, 2, 5];
console.log(arr3.sort());   // [10 2 3 5]

// sort也可以自定义
res = arr3.sort(function (x, y) {
    return x - y;                       // 这个比较的方式和java的comparator差不多
});
console.log(res);           // [2 3 5 10]

// 2.5 其他高阶函数 every() find() findIndex() forEach() 等  todo


