

// JS 对象

// 1. 使用 {} 定义js 对象

let person = {
    name : 'chason',
    age: 20
};


// 2. 对象的属性名尽量不用使用特殊符号，推荐驼峰

let student = {
    name : 'chason',
    "middle-school" : 'the one', // 如果属性名中有特殊符号 就要用引号括起来
    highSchool : 'the two'  // 使用驼峰则没有这个问题
}

// 有特殊符号的属性只能使用 对象['名称'] 获取  不能使用a.b的方式获取
console.log(student['middle-school']); 

// 3. 访问一个对象中不存在的属性返回的是 undefined
console.log(person.highSchool);   // undefined

// 4. 判断一个对象中有没有这个属性 hasOwnProperty() 和 in
// 前者是用来判断本对象的，后者则是继承的属性也能判断

console.log(student.hasOwnProperty('age'));     // false
console.log('name' in student);                // true