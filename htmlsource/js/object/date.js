// JS에서 제공하는 기본 객체
// 1. Date()

const now = new Date();

console.log(now); // 2025-04-08T01:06:35.591Z
console.log("년도 : " + now.getFullYear()); // 년도 : 2025
console.log("월 : " + (now.getMonth() + 1)); // 월 : 월 0부터 시작 -> +1 : 31
console.log("일 : " + now.getDate()); // 일 : 8
console.log("시 : " + now.getHours()); // 시 : 10
console.log("분 : " + now.getMinutes()); // 분 : 7
console.log("초 : " + now.getSeconds()); // 초 : 53

// 날짜 => 문자열
console.log("날짜 => 문자열 : " + now.toLocaleString()); // 2025. 4. 8. 오전 10:10:48
