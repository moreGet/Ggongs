// body 태그 DOM객체 가져옴
const body = document.querySelector("body");

const IMG_NUMBER = 8;

function handleImgLoad(params) {
    console.log("바뀐댱");
}

function paintImage(imgIdx) {
    const image = new Image();
    // 랜덤 번호에 + 1 을 하는 이유는 0을 줄수도 있기 때문이다.
    image.src = `./resources/images/${imgIdx + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image); // body에 img폼 추가
}

function genRandom() {
    // 실수 형태의 랜덤 실수 생성
    const number = Math.random()*8;
    // 정수 형태로 변환하기 위해 floor:내림 함수 사용
    const numberInt = Math.floor(number);

    return numberInt;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
} init();