// 조건문
// true : true 자료들, 0 제외 숫자, 문자, [], {}
// false : false 자료들, 0, '', null, undefiend, NaN

const date = new Date();

console.log(date); // 2025-04-07T01:07:12.666Z(ISO 8601 표준표현방법)

const hour = date.getHours(); // 10
if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}
let day;
switch (date.getDay()) {
  case 0:
    day = "SunDay";
    break;
  case 1:
    day = "MonDay";
    break;
  case 2:
    day = "TuesDay";
    break;
  case 3:
    day = "WednesDay";
    break;
  case 4:
    day = "ThursDay";
    break;
  case 5:
    day = "FriDay";
    break;
  case 6:
    day = "Saturday";
    break;

  default:
    break;
}

console.log("오늘은" + day);

// Number()과 parseInt의 차이

console.log(parseInt(23.45)); // 23
console.log(Number(23.45)); // 23.45

console.log(parseInt("23 45 55")); // 23
console.log(Number("23 45 55")); // NaN
