const form = document.querySelector(".js-form"),
input = document.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
    paintGreeing(text);
}

function handleSubmit(event) {
    // 기본 이벤트 막기
    event.preventDefault();
    const currentValue = input.value;
    // console.log(currentValue);
    // paintGreeing(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeing(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeing(currentUser);
    }
}

function init() {
    loadName();
} init();