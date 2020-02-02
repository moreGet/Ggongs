const weather = document.querySelector(".js-weather");
// https://openweathermap.org/ 회원 가입 후 API Key를 받아야함
const API_KEY = "1267afc47f4f2bf477281cad97c67d10";
const COORDS = "coords";

// https://openweathermap.org/current#geo 에서 위,경도 정보 받아옴
function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(res => {
        // console.log(res.json());
        return res.json();
    }).then(json => {
        // console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    // 객체를 저장하기 위해 Key값과 객체값을 문자열로 바꾼후 저장
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 위치 정보 가져왔을때
function handleGeoSucces(position) {
    // console.log(position);
    // 위도
    const latitude = position.coords.latitude;
    // 경도
    const longitude = position.coords.longitude;
    // 위치정보 객체 만들기
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

// 위치 정보 못가져 올때
function handleGeoError(params) {
    console.log("Can't access geo location");
}

function askForCoords() {
    // 좋은 api이다 안에 메소드 많음
    // 위치정보를 가져오고 성공했을때, 못했을때 로 분기를 나눔.
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    // 로컬 스토리지에서 위치정보를 Key값을 비교해서 가져옴
    const loadedCoords = localStorage.getItem(COORDS);
    // 만약 위치정보가 존재하지 않는다면 
    // 위치 정보를 가져오는 함수 실행
    if(loadedCoords === null) {
        askForCoords(); // 위치정보를 가져오는 함수
    } else {
        // 로컬 스토리지 에서 위도 경도 객체 받아오기
        const parseCoords = JSON.parse(loadedCoords);
        // 받아온 위도 경도 객체를 api를 호출하는 함수에다가
        // 위도 경도를 매개변수로 넘김
        getWeather(parseCoords.latitude, parseCoords.longitude);
        // console.log(parseCoords);
    }
}

function init() {
    loadCoords();
} init();