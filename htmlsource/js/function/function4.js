// 콜백함수 : 함수를 함수의 인자로 전달, 전달된 함수가 나중에 호출
function showOK() {
  console.log("동의");
}

function showCancel() {
  console.log("취소");
}

function ask(question, yes, no) {}

ask("동의하십니까?", showOK, showCancel);

// 결론 : 함수의 인자를 변수로 받을 수 있고 해당 함수내에서 함수의 인자로 받은 변수를 호출할 수 있다.
//        나중에 필요해진다.
const foo = function (func) {
  func();
};

foo(() => console.log("함수를 인자로 전달하기"));

function callTenTimes(callback) {
  for (let i = 0; i < 5; i++) {
    callback();
  }
}

const callback = () => console.log("함수호출");
callTenTimes(callback);

// JS 내장함수
// 1. setTimeout(함수, 지연시간) : 비동기식, callback
// console.log("시작");
// setTimeout(() => {
//   console.log("3초가 지났습니다.");
// }, 3000);
// console.log("마무리"); // 시작 - 마무리 - 3초가 지났습니다.

// 2. setInterval(함수, 반복 시 대기시간) : 반복 호출하며 호출과 호출사이 대기시간이 존재
// setInterval(() => {
//   console.log("안녕");
// }, 2000);

// 3. parseFloat() : string => float

console.log("parseFloat() ");
console.log(parseFloat("10"));
console.log(parseFloat("10.55"));
console.log(parseFloat("10.5%5%"));

// 4. encodeURI : URL을 encoding함
//    encodeURIComponent : 영문, 숫자, 일부기호 제외 인코딩
console.log(encodeURI("http://localhost:8080/basic/info.html?name=길동"));
console.log(encodeURIComponent("http://localhost:8080/basic/info.html?name=길동"));

// 5. decodeURI : URL을 decoding 함
//    decodeURIComponent :
console.log(decodeURI("http://localhost:8080/basic/info.html?name=%EA%B8%B8%EB%8F%99"));
console.log(decodeURIComponent("http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%EA%B8%B8%EB%8F%99"));
