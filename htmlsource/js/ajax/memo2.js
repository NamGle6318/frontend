// axios를 이용한 비동기 처리

// post
// ajax : 비동기식
// fetch() : method를 사용하지 않으면 get이 기본 방식임 - 브라우저 함수
// axios() : 라이브러리 포함해야 함

// 형태
// axios.get().then().catch().finally();
// axios.post().then().catch().finally();
// axios.put().then().catch().finally();
// axios.delete().then().catch().finally();

// 추가 버튼 누르면 데이터 수정 요청 (PUT)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  console.log(form.mno.value, form.memoText.value);

  if (form.mno.value) {
    // mno 존재시 해당 mno 내용 수정
    axios
      .put("http://localhost:8080/memo/update", form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data); // controller에서 반환된 값
      });
  } else {
    // mno 존재 안할 시 새로운 mno 생성

    axios
      .post("http://localhost:8080/memo/new", form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data); // controller에서 반환된 값
      });
  }
});

// delete
document.querySelector(".btn-danger").addEventListener("click", () => {
  const mno = document.querySelector("#remove [name=mno]").value;
  axios.delete(`http://localhost:8080/memo/remove/${mno}`).then((res) => {
    if (res.data) alert("삭제 성공");
  });
});

// 1개 조회
document.querySelector(".btn-info").addEventListener("click", () => {
  const mno = document.querySelector("#select [name=mno]").value;
  axios.get(`http://localhost:8080/memo/read?mno=${mno}`).then((res) => {
    console.log(res.data.memoText);
    console.log(mno);
    const form = document.querySelector("form");
    form.mno.value = res.data.mno;
    form.memoText.value = res.data.memoText;
  });
});

// 도착한 데이터를 content 안에 보여주기
document.querySelector(".btn-success").addEventListener("click", () => {
  axios.get("http://localhost:8080/memo/list").then((res) => {
    const data = res.data;
    const list = document.querySelector("#list");
    let result = "";
    data.forEach((memo) => {
      console.log(memo.memoText);
      result += `<li>${memo.memoText}</li>`;
    });
    list.innerHTML = result;
  });
});
