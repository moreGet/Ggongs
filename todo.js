const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

// 로컬스토리지 에서 가져올때 Key값
const TODOS_LS = "toDos";

// 저장할 toDoLists
let toDos = [];

function saveToDos() {
    // key값 과 Value 값을 로컬스토리지 에 저장
    // JSON.stringify(객체) js의 객체를 String으로 바꿔줌
    // 로컬스토리지는 오로지 String만 저장하려고함.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// 로컬 스토리지에 저장된 Todolists를 가져와서 화면에 로딩
function loadToDos() {
    // key값으로 로컬스토리지에 요소를 받아옴
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        // 로컬스토리지 에 저장했기 때문에 String이다.
        // 이를 js에서 동작하게끔 원래 객체로 바꿔주려면
        // 다시 Json(JavaScript Object Notation)을 이용해야 한다.
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(element => {
            paintToDo(element.text);
        });
    }
}

function delToDo(evnet) {
    // 콘솔에 찍힌 요소들 중 parentNode 요소를 찾음
    // console.dir(event.target);
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    // toDoList 에서 li요소를 지워줌(화면에 보이는 부분)
    toDoList.removeChild(li);
    
    // 실질적으로 로컬스토리지 에서도 지우기 위해 아래 로직 수행
    // toDos 배열에 존재하는 요소들중 화면에 존재하는 li요소랑
    // id가 일치 하는 것을 삭제 해줌. 이것이 필터 함수의 역할
    // return 옆에 조건식에 맞춰 필터된 배열을 반환 시켜줌
    const cleanToDos = toDos.filter(element => {
        // console.log(element.id, li.id);
        return element.id !== parseInt(li.id);
    });

    // 실질적인 toDos는 아직 원본상태 이고
    // cleanToDos는 toDos를 인자값으로 받아 
    // 필터를 거쳐 필터된 toDos의 복사본(아마 깊은 복사를 진행하는듯...)
    // 을 반환해준다. 따라서 원래 용도에 맞게 요소가 지워진
    // 배열 객체를 toDos변수에 다시 매핑 시켜 준다.
    toDos = cleanToDos;
    // 그리고 현재 toDos를 로컬 스토리지에 반영시킨다.
    saveToDos();
}

// 투두리스트 input form에서 이벤트 발생시
function handleSubmit(event) {
    event.preventDefault(); // 기본 폼 이벤트 무효화
    const currentValue = toDoInput.value;
    paintToDo(currentValue); // 입력한걸 화면에 등록 해주고
    toDoInput.value = ""; // 칸은 지우고 (다시 써야 하니깐)
}

function paintToDo(text) {
    // toDoList 인덱스 번호 생성하기
    const newId = toDos.length + 1;

    // console.log(text);
    // 비어있는 li를 만듬
    const bean = document.createElement("li");
    
    // 삭제버튼을 만듬
    const delBtn = document.createElement("button");
    // 리스너 등록(li(bean)요소 삭제를 위한)
    // 이벤트는 click, 동작함수는 delToDo
    delBtn.addEventListener("click", delToDo);
    // 삭제버튼에 이모지 삽입
    delBtn.innerHTML = "✖";

    // li에 들어갈 리스트 요소를 생성
    const span = document.createElement("span");
    span.innerText = text;

    // li에 요소를 넣기
    bean.appendChild(span);
    // 요소 옆에 삭제 버튼 배치
    bean.appendChild(delBtn);
    // li에 id 삽입
    bean.id = newId;

    // 생성된 li객체를 toDoList 클래스를 가진 ul태그에 배치
    toDoList.appendChild(bean);

    // bean(li) 객체가 될 todolist 정보가 담긴 객체 만들기
    const toDoObj = {
        text: text,
        id: newId
    };
    // 배열에 toDoObj 객체 하나씩 집어 넣기.
    toDos.push(toDoObj);
    // 로컬 스토리지에 저장
    saveToDos();
}

function init() {
    loadToDos(); // todolist 가져옴
    // submit 이벤트 리스너
    toDoForm.addEventListener("submit", handleSubmit);
} init();