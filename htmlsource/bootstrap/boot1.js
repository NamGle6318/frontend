// 요소 찾기
// querySelector() : 조건에 맞는 천번째 요소를 찾아옴
let div = document.querySelector(".container");
console.log(div);

// 클래스명 - 이름
div = document.querySelector(".container-fluid");
console.log(div);

// querySelectorAll() : 조건에 맞는 모든 요소를 찾아옴
let divs = document.querySelectorAll("div");
console.log(divs);

divs.forEach((div) => {
  console.log(div);
});

let btn = document.getElementsByClassName("navbar-toggler");
console.log(btn);

// 메뉴 찾기

let menu = document.querySelectorAll(".navbar-nav > .nav-item");

menu.forEach((li) => {
  console.log(li);
});

// form 태그 : class

let forms = document.querySelectorAll("form");
forms.forEach((form) => {
  console.log(form);
});

// role 속성
forms = document.querySelectorAll("[role ='search']");

forms.forEach((role) => {
  console.log(role);
});

// form 내 input 요소 찾기

let inputs = document.querySelectorAll(".form-control ");
inputs.forEach((input) => {
  console.log(input);
});
// 이름 이용
inputs = forms.search;
console.log("이름 찾기" + inputs);

// table 찾기

let tables = document.querySelectorAll(".table");

tables.forEach((table) => {
  console.log(table);
});

// table 내 thead 찾기

let theads = document.querySelectorAll(".table > thead");

theads.forEach((thead) => {
  console.log(thead);
});

// table 내 tbody 내 두번째 tr 찾기

let secondTr = document.querySelector(".table > tbody > tr:nth-of-type(2)");

console.log(secondTr);

let table = document.querySelector(".table > thead");
let thead = table.querySelector("thead");
console.log(thead);

let input = document.querySelector(".form-control");
input = forms.search;
console.log(input);
