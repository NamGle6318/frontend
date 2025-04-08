// 객체생성
// 방법 1. new object() 후 prompt 생성
let tv = new Object(); // prompt 생성 가능
console.log(tv); // {} 빈 object

// prompt 생성

tv.color = "red";
tv.power = true;
tv.volume = 13;
tv.info = function () {
  console.log("색상 : ", this.color);
  console.log("볼륨 : ", this.volume);
  console.log("전원 : ", this.power);
};

tv.info(); // 색상, 볼륨, 전원 : red, 13, true
console.log("================================");
// 방법 2. 객체 리터럴로 생성
let person = {
  name: ["bob", "smith"],
  age: 32,
  interests: ["music", "skiing"],
  greeting: function () {
    console.log("Hi I'm " + this.name[0] + ".");
  },
};
console.log(person); // person object의 리터럴 정보 출력
console.log(person.age); // 32
console.log(person["name"]); // [ 'music', 'skiing' ]
console.log(person["name"][0]); // bob
console.log(person.greeting()); // Hi I'm bob. \n undefined

// age 변경
person.age = 20;
// 함수 추가
person.farewell = function () {
  console.log("bye!!!");
};

console.log("================================");
console.log(person);

// for in: 객체출력

console.log("================================");

let output = "";
for (const key in person) {
  //   output += "▶ " + key + " : " + person[key] + "\n";
  output += "▶ " + `${key} : ${person[key]} \n`;
}
console.log(output); // ▶ + {} 출력
