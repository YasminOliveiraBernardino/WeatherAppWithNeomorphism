const apiKey = "ed8cc6d28b75ec8faf4ed8b2714bfd03"; // chave da API

const cityInput = document.querySelector("#local"); // input do local
const searchBtn = document.querySelector("#searchButton"); // botão pesquisar 

const cityName = document.querySelector("#city"); // h2 do local
const countryFlag = document.querySelector("#country_Flag"); // bandeira
const temp = document.querySelector("#temperatura"); // graus
const weatherCondition = document.querySelector("#weather_condition"); // descrição da condição do tempo
const weatherIcon = document.querySelector("#weather_icon"); // icone da condição do tempo
const umidity = document.querySelector("#umidityInfo"); // umidade
const wind = document.querySelector("#windInfo"); // vento

//functions
const getWeatherData = async (city) => {
  
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
  };

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityName.innerText = data.name; // muda o nome da cidade
    temp.innerText = `${parseInt(data.main.temp)}°C`; // muda a temperatura
    weatherCondition.innerText = data.weather[0].description; // muda o p - descrição do tempo
    weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); // muda o ícone de acordo com o tempo
    umidity.innerText = `${data.main.humidity}%` // muda a umidade
    wind.innerText = `${data.wind.speed}km/h` // muda o vento
}

//Events

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city = e.target.value;

        showWeatherData(city);
    }
}

)