// 함수 == 자바의 메소드
// 함수 생성
function name(str) {
  // 해야할 일들
}

// 1. 매개변수가 없는 함수
function showMessage() {
  console.log("안녕");
}

showMessage(); // 안녕

// 2. 매개변수가 있는 함수
function multiply(x, y) {
  console.log(`${x}, ${y}`);
}

multiply(); // undefined, undefined
multiply(1); // 1, undefined
multiply(1, 3); // 1, 3

// 3. 리턴이 있는 매개변수
function multiply2(x, y) {
  return x * y;
}
console.log(multiply2()); // NaN
console.log(multiply2); // [Function: multiply2]
console.log(multiply2(2, 3)); // 6

// 매개변수에 기본값 할당

function multiply(x, y = 3) {
  console.log(`${x}, ${y}`);
}

multiply(5); // 5, 3
multiply(5, 4); // 5, 4

// 예전 기본값 할당 방법
function showTest(a, b, c, d) {
  b = b || 52;
  c = c || 273;
  console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
}
showTest(1, 2, 5, 6); // a = 1, b = 2, c = 5, d = 6
showTest(1, 6); // a = 1, b = 6, c = 273, d = undefined

// 함수 속 함수

// 1. 함수 내에서 함수 호출
function a() {
  function b() {
    console.log(b);
  }
  if (true) {
    b();
  }
}
a();
// 2. 함수표현식
