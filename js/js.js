window.addEventListener('DOMContentLoaded', () => {
    const data = new Date()
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const input = document.querySelector('input')
    input.addEventListener('keypress', poiskovik)
    getresult('Nukus')
    function poiskovik(e) {
        if (e.keyCode == 13) {
            console.log(input.value);
            getresult(input.value)
        }
    }
    function getresult(poiskovik) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${poiskovik}&units=metric&APPID=3118a08d0f85d36f36d046256b9740cc`)
        .then(response => response.json())
        .then(showresult)
        .catch(function (errors) {
            return console.log(errors);
        })
    }
    function showresult(response) {
        console.log(response);
        document.querySelector('.mesto').innerHTML = `
        ${response.name}  <img src="https://openweathermap.org/img/wn/${response.weather[0].icon}.png" alt="icon">
        `
        document.querySelector('.temperatura').innerHTML = `${Math.round(response.main.temp)}°c`
        document.querySelector('.weather').innerHTML = `weather: ${response.weather[0].main}`
        document.querySelector('.temp_max').innerHTML = `temperatura-max: ${Math.round(response.main.temp_max)}°c`
        document.querySelector('.temp_min').innerHTML = `temperatura-min: ${Math.round(response.main.temp_min)}°c`
        document.querySelector('.v').innerHTML = `speed: ${Math.round(response.wind.speed)} m/s`
        document.querySelector('.data').innerHTML=`${months[data.getMonth()]} ${data.getFullYear()}`
    }




































})