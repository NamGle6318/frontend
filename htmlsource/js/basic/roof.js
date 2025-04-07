// // 반복문
// // for
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// // forEach (자바 ->)
// array.forEach((element) => {});

// // for in
// for (const key in object) {
//   if (Object.prototype.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

// // for of
// for (const element of object) {
// }

// for 1~10 출력
for (let index = 1; index < 11; index++) {
  console.log(index);
}

// 1 ~ 100 까지의 합 출력
let sum = 0;
for (let index = 1; index < 101; index++) {
  sum += index;
}
console.log("1~100 합 " + sum);

sum = 0;
let i = 1;
while (i < 101) {
  sum += i++;
}
console.log("1~100 합 " + sum);

sum = 0;
i = 1;
do {
  sum += i++;
} while (i < 101);
console.log("1~100 합 " + sum);

console.log("\n------ for in : 객체 출력");

const myCar = { make: "BWM", model: "X5", year: 2013 };
let txt = "";
for (const key in myCar) {
  txt += myCar[key] + " ";
}
console.log(txt);

const music = { singer: "아델", time: 15, title: "hello" };

// 변수 + 문자열 출력시 : `${변수명}` = key + " : " + music[key]
for (const key in music) {
  console.log(`${key} : ${music[key]}`);
}

// break, continue
console.log("\n -- break");
for (let index = 0; index < 101; index++) {
  if (index == 50) break;
  console.log(index); // 0 ~ 49
}

console.log("\n -- continue");
for (let index = 0; index < 40; index += 2) {
  if (index == 0) continue;
  console.log(index); // 0 ~ 49
}
