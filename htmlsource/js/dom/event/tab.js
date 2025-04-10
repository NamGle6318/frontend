// products 클릭 시 1번째 탭 컨텐트가 뜨게한다.
// information 클릭 시 2번째 탭 컨텐트가 뜨게한다.
// 배송정보 클릭 시 3번째 탭 컨텐트가 뜨게한다.

// 보여주기 : .show
// 메뉴 선택 : .orange

const tab = document.querySelector("ul");
const products = tab.querySelector("li:nth-of-type(1)");
const information = tab.querySelector("li:nth-of-type(2)");
const shipping = tab.querySelector("li:nth-of-type(3)");
const content = document.querySelectorAll(".tab-content");

tab.addEventListener("click", (e) => {
  let num = 0;
  switch (e.target) {
    case products:
      num = 0;
      break;
    case information:
      num = 1;
      break;
    case shipping:
      num = 2;
      break;
  }
  showPage(e.target, num);

  function showPage(target, num) {
    const tabs = document.querySelectorAll(".tab-button");
    tabs.forEach((btn, i) => {
      btn.classList.remove("orange");
      content[i].classList.remove("show");
    });
    target.classList.add("orange");
    content[num].classList.add("show");
  }
});
