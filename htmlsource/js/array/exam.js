let numArr = [57, 273, 586, 32, 57, 103, 312, 2];

// 최소값, 최대갑 출력

let max = numArr[0];
let min = numArr[0];

for (let index = 1; index < numArr.length; index++) {
  if (max < numArr[index]) {
    max = numArr[index];
  }
  if (min > numArr[index]) {
    min = numArr[index];
  }
}

// for (const num of numArr) {
//   if (max < num) {
//     max = num;
//   }
//   if (min > num) {
//     min = num;
//   }
// }
console.log(`최대값 : ${max}, 최소값 : ${min}`); // %d 같은 느낌?
