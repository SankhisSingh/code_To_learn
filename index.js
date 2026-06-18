const apikey ="eb098957476ebbfac79d1321293ad10d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?appid+&units=metric";
async function checkWeather(){
    const response=await fetch(apiUrl + `&appid=${apikey}`    );
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
}
checkWeather();