// "use strict"

// 자바스크립트 변수
// 타입 없음
// 선언시 키워드 : let, const(상수), var(예전방식)
// let : 변수 선언, var : 유연한 변수 선언, let 사용 권장

// 줄바꿈이 있을시 세미콜론 생략 가능

var a = 3;
let b = 3;
console.log(b, a);
console.log(a + ' ' + b);
console.log(typeof a);
console.log(typeof b);

a = "test" + 'test'; 

console.log(a)
console.log(typeof a);

const c = 4;
// c = 20; TypeError: Assignment to constant variable.
console.log(c);
let d = true;
console.log(d);
console.log(typeof a, d);
{
    let a = 333;
    console.log("block-scope ", a); // = 블록 스코프 : 자바 지역변수랑 같음 
}
console.log(a);

// ----변수 범위 ---- //
// var : function scope : function을 벗어나면 같은 변수여도 다른 취급 
//  let, const : block-scope : block을 벗어나면 같은 변수여도 다른 취급
function foobar() {
    var foo = 5;
    console.log(foo);
}
// console.log(foo); ReferenceError: foo is not defined
console.log('----');
if(true) {
    var aa = 5;
    console.log(aa);
}
console.log(aa);

console.log('----');
if(true) {
    let bb = 5;
    console.log("let blcok scope", bb);
}
// console.log(bb); ReferenceError: bb is not defined