// 배열 생성 방법
// 1. []
const fruits = ["사과", "망고", "바나나", "포도", "자두"];
const others = ["과일", 1, 3.14, new Date(), true, {}];
// 2. new Array
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const array2 = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 메서드
// 배열

console.log("배열 길이", fruits.length); // 괄호유무 메서드, frompt
console.log("배열 => 문자열", fruits.toString());

console.log("배열의 요소 조회", fruits.at(2));
console.log("배열의 요소 조회", fruits[2]);

console.log("\n 배열의 요소 추가");
// push, unshift, 인덱스
fruits.push("메롱"); // push - append개념(뒤)
console.log("추가 후 확인", fruits.toString());

fruits.unshift("키위"); // unshift - append개념(앞)
console.log("추가 후 확인", fruits.toString());

fruits[3] = "딸기"; // 해당 index에 대체됨
fruits[7] = "밥"; // 해당 index에 추가됨
console.log("추가 후 확인", fruits.toString());

// splice(삽입 위치, 삭제개수?, 삽입내용)
// "자전거", "자동차", "기차", "트럭", "오토바이"
console.log("\n--- splice"); // 중간 삽입, 기존 내용 밀어냄
array1.splice(2, 0, "킥보드"); // 자전거,자동차,킥보드,기차,트럭,오토바이
console.log(array1.toString());
array2.splice(6, 1, "명왕성"); // 수성,금성,지구,화성,목성,토성,명왕성 (천왕성)
console.log(array2.toString());

// 배열 요소 삭제
// pop (뒤에서 삭제), shift(앞에서 삭제), splice(삭제위치, 삭제 개수)
console.log("\n 배열의 요소 삭제");
console.log("삭제 전", fruits.toString());
fruits.pop();
console.log("삭제 후", fruits.toString());

console.log("삭제 전", fruits.toString());
fruits.shift();
console.log("삭제 후", fruits.toString());

console.log("삭제 전", others.toString());
others.splice(2, 2); // 추가내용없이 삭제만 함
console.log("삭제 후", others.toString());
