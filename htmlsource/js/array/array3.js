// 배열 생성 방법
// 1. []
const fruits = ["사과", "망고", "바나나", "포도", "자두"];
const others = ["과일", 1, 3.14, new Date(), true, {}];
// 2. new Array
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const array2 = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 메서드 나머지
// join(원하는 문자) : String 반환
console.log("배열 요소 연결 " + fruits.join(" - ")); // 요소들 사이에 - 이어붙힌 결과값을 String으로 반환
console.log("배열 연결 " + fruits.concat(array1)); // 사과,망고,바나나,포도,자두,자전거,자동차,기차,트럭,오토바이
console.log("배열 분할 " + fruits.slice(0, 3)); // 0, 1, 2 값 반환
console.log("배열 정렬 " + fruits.sort());
const array3 = [22, 35, 1, 3, 7, 88, 92];
console.log("배열 정렬 : " + array3.sort()); // 1,22,3,35,7,88,92 -> 문자만 정렬해주는 이상한 친구임
// 오름차순 정렬
console.log("배열 정렬 : " + array3.sort((a, b) => a - b));
// 내림차순 정렬
console.log("배열 정렬 : " + array3.sort((a, b) => b - a));

// 배열 출력 역순
console.log("배열 역순 출력 : " + fruits.reverse()); // 배열을 역순으로 정렬한뒤 저장함

// 배열 요소 탐색
console.log("배열 요소 탐색 : " + fruits.indexOf("망고")); // 4
console.log("배열 요소 탐색 : " + fruits.includes("망고")); // true | 포함여부만 boolean 반환
console.log("배열 요소 탐색 : " + fruits.includes("딸기")); // false | ...
console.log("배열 요소 탐색 : " + fruits.indexOf("딸기")); // -1
console.log(array3.toString());
console.log(
  "30보다 큰 배열 : ", // 92
  array3.find((item) => item > 30)
);
console.log(
  "30보다 큰 배열의 index : ", // 0
  array3.findIndex((item) => item > 30)
);

const result = array3.map((item) => item * 2);
console.log("map : ", result); // 새로운 배열로 리턴

// filter 조건에 맞는 것만 포함하여 새로운 배열로 리턴
console.log("filter : " + array3.filter((item) => item > 10));

// 얕은복사, 깊은복사
let fruits2 = fruits; // 주소만복사 = 얕은복사
// ... : spread 연산자
let shallowCopy = [...fruits]; // 값째로 복사 = 깊은복사

console.log(fruits2); // [ '포도', '자두', '사과', '바나나', '망고' ]
console.log(shallowCopy); // [ '포도', '자두', '사과', '바나나', '망고' ]

fruits.push("딸기");

console.log(fruits2); // [ '포도', '자두', '사과', '바나나', '망고', '딸기' ]
console.log(shallowCopy); // [ '포도', '자두', '사과', '바나나', '망고' ]

// 동일한 값으로 배열 생성
// 1. 직접 입력
const array4 = [1, 1, 1, 1, 1];
// 2. 배열 객체로 생성 후 fill 사용
const array5 = new Array(5).fill(1);

console.log(array4); // [ 1, 1, 1, 1, 1 ]
console.log(array5); // [ 1, 1, 1, 1, 1 ]

// fruits => array 6 복사 for or 깊은복사
const array6 = [...fruits];
// console.log(array6); // [ '포도', '자두', '사과', '바나나', '망고', '딸기' ]
const array7 = [];
fruits.forEach((element) => array7.push(element));
console.log(fruits);
console.log("fruits 값 복사", array7);

let array8 = [
  [1, 2, 3],
  [11, [12, 21], 13, [14, 15, [16, 17, [18, 19]]]],
];
// flat 2차원 -> 1차원 변환할걸 출력, 3차원은 1차원으로 변환하지 않고 그대로 넣음
// 단 괄호안에 값을 넣을 시 수만큼 2, 3, 4차원 을 1차원으로 변환
console.log(array8.flat());
console.log(array8.flat(1));
console.log(array8.flat(2));
console.log(array8.flat(3));
console.log(array8);

let varArr1 = ["num1", "num2"];
let varArr2 = ["num3", "num4"];
// varArr1 varArr2 를 합쳐서 새로운 배열 생성
// 1. concat
let newArr = varArr1.concat(varArr2);
console.log("합친 후 ", newArr);
// 2.
let toArr = [varArr1, varArr2]; // 주소복사, 얕은복사
console.log(toArr);
varArr1[0] = "num5";
console.log("varArr1[0] 변경 후 ", varArr1); // [ 'num5', 'num2' ]
console.log("varArr1[0] 변경 후 ", toArr); // [ [ 'num5', 'num2' ], [ 'num3', 'num4' ] ]

let toArr2 = [...varArr1, varArr2]; // 값 복사, 깊은복사
varArr1[0] = "num4";
console.log("varArr1[0] 변경 후 ", varArr1); // [ 'num4', 'num2' ]
console.log("varArr1[0] 변경 후 ", toArr2); // [ 'num5', 'num2', [ 'num3', 'num4' ] ]
