// 화살표 함수 (=>) : 함수표현식을 더 간단하게 선언하는 방법
// 자바의 람다식과 거의 닮음.

// const myFunc1 = function () {};
const myFunc1 = () => {};

// const showMessage = function () {
//     console.log("안녕");
//   };

const showMessage = () => console.log("안녕");

// const multiply = function (x, y) {
//     console.log(`${x}, ${y}`);
//   };

const multiply = (x, y) => console.log(`${x}, ${y}`);

// const myFunc3 = function multiply2(x, y) {
//     return x * y;
//   };

const myFunc3 = (x, y) => x * y;

const rec = (x) => {
  if (x == 0) {
    console.log(x);
  } else {
    console.log(x);
    name(x - 1);
  }
};
//////////////////////////////////
const fruits = ["사과", "망고", "바나나", "포도", "자두"];

fruits.forEach((fruit) => console.log(fruit));

//
