
// JS Map 和 Set

// 背景: Map这种 js对象其实有一定的cover, 但是他对象的key只能是string 不满足，所以设计出了Map

// 1. JS Map
// 1.1 创建map
let m = new Map();  // 创建Map的方式和Java相似

m.set('chason', 89);
m.set('fox', 88);
m.set('lucy', 90);

console.log(m.get('lucy'));

// 1.2 map的其他操作
console.log(m.has('chason'));       // true
console.log(m.delete('chason'));    // true 删除返回的是个布尔
console.log(m.has('chason'));       // false

// 1.3 创建并初始化Map
let m1 = new Map([[1,'a'],[2, 'b'],[3, 'c']]);
console.log(m1);

// 2. Set
// Set是一组重复的key的组合 ，key不能重复

// 2.1 创建set
let s = new Set();

s.add(1);
s.add(2);
s.add(3);

console.log(s);

// 2.2 创建并初始化set
let s1 = new Set(['a','b', 'c']);
console.log(s1);


