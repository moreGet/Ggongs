const daysOfWeek = [ "Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun" ];
console.log(daysOfWeek);

console.log("요일 배열 첫번째 요소 : " + daysOfWeek[1]);

// 객체 생성
const tempArr = {
    name:"Shin",
    age:28,
    gender:"Male",
    isLapTop:true,
    favMovies:["OldBoy", "Lotr"],
    favFood:[ // 2차원 배열 비슷
        {
            name:"Kim", 
            fatty:false
        }, 
        {
            name:"cheese burger", 
            fatty:true
        }]
};

// 객체 접근 방법
console.log("tempArr객체의 favFood 배열의 0번 name 접근 : " + tempArr.favFood[0].name);
console.log("tempArr객체 의 name변수 : " + tempArr.name);
console.log("tempArr객체 의 gender변수 : " + tempArr.gender);

// 객체 변수 변경
tempArr.gender = "Female";
console.log("tempArr.gender 변경 : " + tempArr.gender);