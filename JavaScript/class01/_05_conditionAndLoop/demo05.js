
// 条件判断和循环

// 1. js 的条件判断和 Java 一模一样

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