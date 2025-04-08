// 2개의 주사위를 던졌을 때 나오는 눈을 출력 ex: (5, 3)
// 눈의 합이 5가 아니면 계속 주사위를 던짐.  눈의 합이 5인 경우 실행을 중단

let firstDice;
let secondDice;
let check = true;
while (check) {
  firstDice = Math.floor(Math.random() * 6 + 1);
  secondDice = Math.floor(Math.random() * 6 + 1);
  if (firstDice + secondDice == 5) {
    check = false;
  }
  //   console.log(firstDice, secondDice);
  console.log(`${firstDice}, ${secondDice}`);
}

// 로또번호 6개를 추출(1~45)하여 배열에 담은 후 출력
let lottoNums = [];
let lottoNum;
while (true) {
  lottoNum = Math.floor(Math.random() * 45 + 1);
  if (lottoNums.indexOf(lottoNum) == -1) {
    lottoNums.push(lottoNum);

    if (lottoNums.length > 5) break;
  }
}
console.log("이번 주 로또 번호 : ", lottoNums);
