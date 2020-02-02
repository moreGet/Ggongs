const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    // 백틱 내부 에서 삼항연잔사 사용가능.
    clockTitle.innerText = `${hours<10 ? `0${hours}`:hours}:${minute<10 ? `0${minute}`:minute}:${seconds<10 ? `0${seconds}`:seconds}`;
}

function init() {
    setInterval(() => {
        getTime();
    }, 1000);
} init();