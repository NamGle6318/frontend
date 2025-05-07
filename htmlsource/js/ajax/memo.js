// post
// ajax : 비동기식
// fetch() : method를 사용하지 않으면 get이 기본 방식임
// axios()

// get
document.querySelector(".btn-info").addEventListener("click", () => {
    const mno = document.querySelector("#select [name=mno]").value;
fetch(`http://localhost:8080/memo/read?mno=${mno}`) // 포트가 서로 다르나 spring boot 의  addCorsMappings 얘가 가능하게 해줌
.then((res) => res.json())
.then((data) => {console.log(data.memoText)
    console.log(mno);
    let result = `<textarea>${data.memoText}</textarea>`;
const form = document.querySelector("form");
form.mno.value= data.mno;
form.memoText.value = data.memoText;

    document.querySelector(".mt-5 > textarea").innerHTML = data.memoText;
}); 
});

// delete
document.querySelector(".btn-danger").addEventListener("click", () => {
    const mno = document.querySelector("#remove [name=mno]").value;
fetch(`http://localhost:8080/memo/remove/${mno}`, {
    method:"delete", 
}) // 포트가 서로 다르나 spring boot 의  addCorsMappings 얘가 가능하게 해줌
.then((res) => res.json())
.then((data) => {console.log(data.memoText)
    
    console.log(data)
    if (data) alert("삭제 성공");

    
}); 
});






// 도착한 데이터를 content 안에 보여주기
document.querySelector(".btn-success").addEventListener("click", () => {
fetch("http://localhost:8080/memo/list")
.then((res) => res.json())
.then((data) => {
let result = "";
const list = document.querySelector("#list");
data.forEach(memo => {
    console.log(memo.memoText);
    result += `<li>${memo.memoText}</li>`;
    
})
list.innerHTML = result;

}); 
});


