const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 80000, title: "Black Monastery" },
];

// 배열안의 정보를 이용해 화면에 보여주기

products.forEach((item, idx) => {
  // 배열요소 가져오기
  console.log(item);

  // 객체 접근
  console.log(item.title);
  console.log(idx, "", item);
});

// img - (h5 - p)

const itemTitle = document.querySelectorAll(".col-sm-4 > h5:first-of-type");
const itemPrice = document.querySelectorAll(".col-sm-4 > p:first-of-type");

// 가져오는 방법이 다양하게 있다.
// const div = document.querySelectorAll(".col-sm-4");
// console.log("div", div[0].getElementsByTagName("h5"));
// console.log("div", div[1].querySelectorAll("h5"));
// console.log("title", itemTitle);

// 첫번째 방법 : 해당 칸에 직접 넣기
// products.forEach((item, idx) => {
//   itemTitle[idx].textContent = item.title;
//   itemPrice[idx].textContent = item.price;
// });

// 두번째 방법
// 장점 : 구조만 동일하면 이미지를 추가할 때 코드를 추가로 쓸 필요가없다.
const row = document.querySelector(".row");
let tags = "";
products.forEach((item, idx) => {
  tags += `<div class="col-sm-4">`;
  tags += `<img src="https://placehold.co/600" alt="" class="w-100" />`; // todo : img 추가
  tags += `<h5> ${item.title} </h5>`;
  tags += `<p> ${item.price} </p>`;
  tags += `</div>`;
  tags += ``;
});
// console.log("hi", tags);

row.insertAdjacentHTML("afterbegin", tags);
