const cssTitle = document.getElementById("title"); // title 태그 객체 가져옴
cssTitle.innerHTML = "Hi! From JS"; // HTML에 title객체 바꾸기
cssTitle.style.color = "red"; // font color 바꾸기
document.title = "i Love"; // 웹 title 바꾸기

console.dir(cssTitle); // DOM객체 title의 함수들을 콘솔로 출력 해보기
console.dir(document);

// css 클래스는 .title, id는 #title
const temp = document.querySelector("#title"); // html에 title은 id로 되어 있음
console.log(temp);
// 출력값 : <h1 id="title" style="color: red;">Hi! From JS</h1>