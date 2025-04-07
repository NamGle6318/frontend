// function exam
// 1. 함수선언방식 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성
function result(num1, num2) {
  return num1 + num2;
}

console.log(result(2, 3)); // 5

// 2. 함수표현식으로 1번 변경
const sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(3, 8)); // 11

// 3. 1 ~ 10까지 더하는 작업을 함수표현식으로 작성
// 1. 함수내에서 함수호출
let sum2 = 0;
let num = 1;
const tenSum = function sumNum() {
  if (num < 11) {
    sum2 += num++;
    sumNum();
  }
  return sum2;
};
// 2. for문 사용
const add = function sum() {
  let sum = 0;
  for (let i = 1; i < 11; i++) {
    sum += i;
  }
  return sum;
};
console.log(add());
console.log(tenSum());

// 4. 숫자를 인자로 받은 후, 그 수가3의 배수인지를 판별,
//  3의 배수라면 박수 출력
//  3의 배수가 아니라면 통과 출력
function check3(num) {
  console.log(num % 3);
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
check3(3);
// 5. 4번 개선
// 4번의 함수에 9의 배수인 경우 박수 x 2를 출력하는 기능을 추가
const check39 = function check3(num) {
  if (num % 9 == 0) {
    console.log("박수 x 2");
  } else if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
check39(1);
check39(6);
check39(9);
// 6. 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
// 과목은 2과목이라 하고, 두 과목의 합이 120점 이상이면 합격
// 한 과목이 40점 미만이면 과락으로 불합격
function zeroInTest(sub1, sub2) {
  let sum = sub1 + sub2;
  let check = sub1 >= 40 && sub2 >= 40 && sum >= 120;
  console.log(check ? "합격" : "불합격");
}
zeroInTest(10, 30);
zeroInTest(35, 90);
zeroInTest(80, 80);
