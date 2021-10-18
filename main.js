// api.openweathermap.org/data/2.5/weather?q=tehran&appid=ceacd27a3aa363e00f5a5d45ddf984d7&&units=metric
const input = document.querySelector("#input_weather");
const button = document.querySelector("#button_weather");
const p = document.querySelector("#p_weather");
const ulTag = document.querySelector("#city");
const parentUlTag = document.querySelector(".city-all");

const ApiKey ="ceacd27a3aa363e00f5a5d45ddf984d7";

button.addEventListener("click", sendCity);


function sendCity(event){
    event.preventDefault();
    let inputValue=input.value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${ApiKey}&units=metric`;
    fetch(url)
        .then(respons => respons.json())
        .then(data => {
            console.log(data)
            const {main,name,weather,sys,wind} = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            console.log(icon)
        });
}




