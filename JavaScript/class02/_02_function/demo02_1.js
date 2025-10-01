
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