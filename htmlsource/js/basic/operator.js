// 연산자
// 산술, 비교, 연결

let a = 4;
let b = 5;

// 산술 연산자
// + - / % *
console.log("a + b = ", a + b); // 9
console.log("a - b = ", a - b); // -1
console.log("a * b = ", a * b); // 20
console.log("a / b = ", a / b); // 0.8 (자바는 몫만 나옴)
console.log("a % b = ", a % b); // 4

let c = "3";
console.log("a + c = ", a + c); // 43 = +가 연결의 역할
// - * / % 를 숫자와 문자의 연산에 사용해보자!
console.log("- * / % 를 숫자와 문자의 연산에 사용해보자!", a + c);
console.log('a = 4, c = "3"');
console.log("a - c = ", a - c); // 1
console.log("a * c = ", a * c); // 12
console.log("a / c = ", a / c); // 1.333...
console.log("a % c = ", a % c); // 1
// 숫자와 문자를 연산 시 "+" 를 제외한 나머지 산술 연산자는  연결이 아닌 산술을 수행

// 비교연산자
// ==(값만 비교), !=, ===(값과 타입 비교), !==
let d = "4";
console.log("a == d", a == d); // true
console.log("a === d", a === d); // false
console.log("a != d", a != d); // false
console.log("a !== d", a !== d); // true
console.log(!(a >= b));

// 증감 연산자 ++ --

console.log(a);
