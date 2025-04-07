// 배열 생성 방법
// 1. []
const fruits = ["사과", "망고", "바나나", "포도", "자두"];
const others = ["과일", 1, 3.14, new Date(), true, {}];
// 2. new Array
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const array2 = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 조회
// 전체
console.log("\n --------- for i 사용");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("\n --------- for of 사용");
for (const element of others) {
  console.log(element);
}

console.log("\n --------- for Each=> 사용");
array2.forEach((element) => {
  console.log(element);
});

console.log("\n --------- 확인용 ");
console.log(array2);
console.log(array2.toString()); // 배열 => 문자열
