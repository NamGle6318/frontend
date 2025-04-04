// 자료형
// number, string, boolean, null, undefined, object
// 숫자  , 문자  , 논리   , null, 선언만   , 객체

let a, b, c, d, e, f, g;
console.log("a 타입 ", typeof a); // undefined : 선언만, 값은 없음
console.log("----");

a= 2; // number
b = "안녕하세요"; // string
c = 3.141592; // number
d = new Date(); // object
e = {name:"hong", age:20} // object
f = null; // object
g = true; // boolean

console.log("a 타입(2)", typeof a);
console.log("b 타입(안녕하세요) ", typeof b);
console.log("c 타입(3.141592) ", typeof c);
console.log("d 타입(new Date()) ", typeof d);
console.log("e 타입({name:hong, age:20}) ", typeof e);
console.log("f 타입(null) ", typeof f);
console.log("g 타입(true) ", typeof g);
