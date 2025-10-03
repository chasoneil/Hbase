

// JS 标准对象

// 1. Date()
// 1.1 如何判断JS的类型  typeof

console.log(typeof []);      // object
console.log(typeof {});      // object

// 1.2. 包装对象
// JS 也提供了类似Java的包装类，但是非常不推荐使用

// 1.3. Date() 对象 和Java中的Date相似，他也是用来表示时间的对象
// 表示月份是通过 0 - 11来表示的 

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;             // 月份比较特殊， 需要 + 1
let date = now.getDate();
let week = now.getDay();

let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
console.log(`${year}-${month}-${date} ${hour}:${min}:${sec} week:${week}`);

// 其他的操作和Java中类似
console.log(now.getTime());         // 时间戳

let t = new Date(2025, 9, 3, 11, 40, 0);        // 使用这种方式初始化时间 依然要主要月份是0-11  9代表10月
console.log(t);         // Fri Oct 03 2025 11:40:00 GMT+0800 (中国标准时间)

// 1.4. 时区
console.log(now.toLocaleString());      // 2025/10/3 11:42:36
console.log(now.toUTCString())          // Fri, 03 Oct 2025 03:42:36 GMT

// 2. RegExp  正则表达式  todo

// 3. JSON  json 最初就是js的格式，所以js内置解析

// 3.1 将JS对象序列化成json

let student = {
    name : "chason",
    age : 20,
    id : "00021",
    addr : {
        city: "Shanghai",
        area: "Pudong"
    }
};

let s = JSON.stringify(student);
console.log(s);                     // {"name":"chason","age":20,"id":"00021","addr":{"city":"Shanghai","area":"Pudong"}}  这样序列化出来的是一行

s = JSON.stringify(student, null, ' ');     // 第二个参数用于筛选对象的属性
console.log(s);                     // 将输出的字符串格式化

s = JSON.stringify(student, ['name', 'addr'], ' ');         // 虽然知道addr是对象，但是没有序列化
console.log(s);

// 3.2 反序列化 将字符串序列化成 JS对象  

let str = '{"name":"chason","age":20,"id":"00021","addr":{"city":"Shanghai","area":"Pudong"}}';
let obj = JSON.parse(str);
console.log(obj);

// 上述两个方法还有一些其他的用法 todo