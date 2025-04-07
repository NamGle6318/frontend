// 함수표현식
// 호이스팅
const myFunc1 = function () {};
const myFunc2 = function name() {};

const showMessage = function () {
  console.log("안녕");
};

showMessage(); // 안녕

const multiply = function (x, y) {
  console.log(`${x}, ${y}`);
};

multiply(8, 9); // 8, 9

// multiply2 = 내부에서만 사용가능, 외부에선 호출 불가능
const myFunc3 = function multiply2(x, y) {
  return x * y;
};

console.log(myFunc3(6, 8)); // 48

console.log("\n");
const rec = function name(x) {
  if (x == 0) {
    console.log(x);
  } else {
    console.log(x);
    name(x - 1);
  }
};

rec(4); // 4 3 2 1 0

// 함수정의방식 비교
// multiply4 vs myFunc3
console.log(multiply4(5, 6)); // 호이스팅 허용
// 호이스팅(hoisting) : 선언하기 전에 사용
// y = 5;
console.log(`y = ${y}`); // = 호이스팅

var y = 6;

function multiply4(x, y) {
  return x * y;
}

// 호이스팅 허용 형태 : function name(){}, 변수 바로 선언
// 호이스팅이 허용될 경우 오류 발생시 원인 탐색이 어려움
// -> 함수표현식 사용, let, const변수 선언을 사용하여 호이스팅을 허용하지 않을 수 있음.
// console.log(myFunc4(3, 9)); ReferenceError: Cannot access 'myFunc4' before initialization
const myFunc4 = function multiply2(x, y) {
  return x * y;
};
