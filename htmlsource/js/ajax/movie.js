// 년, 월, 일 가져오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

// 어제 날짜 구하기
// 년, 월, 일 분리 => 요소 안에 보여주기
//

const init = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate() - 1;

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // 사용자가 입력한 년, 월, 일 가져오기
  const targetDt = txtYear.value + selMon.value + selDay.value;

  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=99ac3aecda8b92e9d174272e9c191da7&targetDt=${targetDt}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.boxOfficeResult.dailyBoxOfficeList);

      const boxList = data.boxOfficeResult.dailyBoxOfficeList;
      const ranking = document.querySelector("#rank");

      let rankInten;
      let list = ``;
      boxList.forEach((element) => {
        // 순위  영화명,
        // 1(▲1) 승부
        if (element.rankInten > 0) {
          rankInten = "(▲" + element.rankInten;
        } else if (element.rankInten < 0) {
          rankInten = "(▼" + Math.abs(element.rankInten);
        } else {
          rankInten = "(0";
        }
        rankInten = rankInten + ")";
        list += `${element.rank}위 ${rankInten} ${element.movieNm}`;
        list += `<a href= '#' onclick='javascript:movieInfo(${element.movieCd})'> ${element.movieNm}</a>`;
        list += `</br>`;
      });

      ranking.innerHTML = list;
    });
});

// 영화 상세 정보
const movieInfo = (movieCd) => {
  let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=99ac3aecda8b92e9d174272e9c191da7&movieCd=${movieCd}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let movie = data.movieInfoResult.movieInfo;

      // 영화 제목 movieNm
      // 영어 제목 movieNmEn
      // 상영 시간 showTm
      // 감독  directors.peopleNm
      // 배우 actors.peopleNm

      let directorNm = "(";
      movie.directors.forEach((directors) => {
        directorNm += directors.peopleNm + ", ";
      });
      directorNm = directorNm.substring(0, directorNm.lastIndexOf(",")); // 마지막 콤마 제거
      directorNm += ")";

      let actorNm = "(";
      movie.actors.forEach((actors) => {
        actorNm += actors.peopleNm + ",";
      });
      console.log(actorNm.lastIndexOf(","));
      actorNm = actorNm.substring(0, actorNm.lastIndexOf(",")); // 마지막 콤마 제거
      actorNm += ")";

      let movieInfo = `<ul> `;

      movieInfo += `<li> 영화명 : ${movie.movieNm} </li>`;
      movieInfo += `<li> 영화명(영어) : ${movie.movieNmEn} </li>`;
      movieInfo += `<li>상영 시간 : ${movie.showTm}분</li>`;
      movieInfo += `<li>감독 : ${directorNm} </li>`;
      movieInfo += `<li>배우 : ${actorNm} </li>`;

      movieInfo += `</ul>`;

      document.querySelector("#info").innerHTML = movieInfo;
    });
};
