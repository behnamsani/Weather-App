const input = document.querySelector("#input_weather");
const button = document.querySelector("#button_weather");
const p = document.querySelector("#p_weather");
const ulTag = document.querySelector("#city");
const parentUlTag = document.querySelector(".city-all");

const ApiKey ="ceacd27a3aa363e00f5a5d45ddf984d7";

button.addEventListener("click", sendCity);

input.value="";
input.focus();

function sendCity(event){
    event.preventDefault();
    let inputValue=input.value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${ApiKey}&units=metric`;
    // const icon; 
    fetch(url)
        .then(respons => respons.json())
        .then(data => {
            console.log(data)
            const {main,name,weather,sys,wind} = data;
            const {temp} = main;
            const {speed} = wind;
            const {country} = sys;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            console.log(icon);

            const li = document.createElement("li");
            li.classList.add("liCity");
            ulTag.appendChild(li);

            const img=document.createElement("img");
            img.src=`${icon}`;
            li.appendChild(img);

            const div1= document.createElement("div");
            div1.id="div1";
            li.appendChild(div1);

            const cityName=document.createElement("p");
            cityName.innerHTML=`${name}`;
            cityName.id="cityNameLi"
            div1.appendChild(cityName);

            const pCountry = document.createElement("h4");
            pCountry.innerHTML=`( ${country} )`;
            div1.appendChild(pCountry);

            const hr = document.createElement("hr");
            li.appendChild(hr);

            const div2= document.createElement("div");
            div2.id="div2";
            li.appendChild(div2);

            const Temperature = document.createElement("h2");
            const tempR = Math.round(temp);
            Temperature.innerHTML=`${tempR}`;
            Temperature.id="tempLi";
            div2.appendChild(Temperature);

            const pSymbol = document.createElement("p");
            pSymbol.innerHTML=`c­°`;
            div2.appendChild(pSymbol);


            const hr1 = document.createElement("hr");
            li.appendChild(hr1);

            const windSpeed=document.createElement("h3");
            windSpeed.id="windSpeed";
            windSpeed.innerHTML=`wind speed  ${speed}`;
            li.appendChild(windSpeed);
        });
    
}




