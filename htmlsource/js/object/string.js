// JS의 기본객체 String
//String 선언 방법
// 1. new Object()
const msg = new String("Hello, JavaScript!"); // object 생성자
const msg2 = String("Hello, JavaScript!"); // 함수로 생성 (추천)
console.log(msg); // [String: 'Hello, JavaScript!']
console.log(msg2); // Hello, JavaScript!

console.log(typeof msg); // object
console.log(typeof msg2); // string

console.log(msg == msg2); // true : 값은 같다
console.log(msg === msg2); // false : 타입이 다르다
console.log(msg == "Hello, JavaScript!"); // true : 값은 같다
console.log(msg2 == "Hello, JavaScript!"); // true
console.log(msg === "Hello, JavaScript!"); // false : 타입이 다르다
console.log(msg2 === "Hello, JavaScript!"); // true : 값과 타입도 같다

console.log("================");
console.log(`특정 위치 문자 반환 : ${msg.charAt(4)}`); // 'o'
console.log(`특정 위치 문자 반환 : ${msg.at(4)}`); // = charAt()
console.log(`특정 문자 위치 반환 : ${msg.indexOf("J")}`); // 7
console.log(`특정 문자 포함 여부 : ${msg.includes("J")}`); // true
console.log(`문자열 부분 추출 : ${msg.substring(0, 5)}`); // 'Hello'
console.log(`문자열 부분 추출 : ${msg.slice(0, 5)}`); // = substring()과 결과는 같음
console.log(`문자열 연결 : ${msg.concat(msg2)}`); // Hello, JavaScript!Hello, JavaScript!
console.log(`문자열 변경 : ${msg.replace("Hello", "Hi")}`); // Hi, JavaScript!
console.log(`문자열 찾기 : ${msg.match("Ja")}`); // Ja
console.log(`문자열 찾기 : ${msg.match("body")}`); // null
console.log(`문자열 찾기(Search - 시작위치) : ${msg.search("Ja")}`); // 7
console.log(`문자열 대문자로 변경 : ${msg.toUpperCase()}`); // HELLO, JAVASCRIPT!
console.log(`문자열 소문자로 변경 : ${msg.toLowerCase()}`); // hello, javascript!
console.log(`(시작,끝)문자열 공백 제거 : ${"   H   ".trim()}`); // H
