// 비동기식 작동
// console.log("시작");
// setTimeout(() => {
//     console.log("중간");
// }, 3000);
// console.log("마무리");

// 비동기식 처리
// 1. fetch
// fetch("서버주소") : 비동기식 요청 보냄
// .then("응답도착") = 적절한 타입으로 변환 후 리턴
// .then("도착한 응답 처리");

// 해당 URL로 request
// console.log("시작");
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res) => res.json())
.then((data) => console.log(data)); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// console.log("마무리");


