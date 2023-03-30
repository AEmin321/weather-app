import getData from "./data";

const domController=(()=>{
    const currentCard=document.querySelector('.current-card');
    const daysWrapper=document.querySelector('.days-wrapper');

    async function handleCurrentWeather (city){
        const data1=await getData('Konya');
        currentCard.innerHTML=`<div class="temp">${data1.current.temp_c}&deg;</div>
        <div class="weather-headings">
            <div class="weather-img">
                <img src="${data1.current.condition.icon}" alt="">
            </div>
            <div class="weather-details">
                <div class="weather">${data1.current.condition.text}</div>
                <div class="location">${data1.location.name}, ${data1.location.country}</div>
            </div>
        </div>
        <div class="last-updated">${data1.current.last_updated}</div>
        <div class="current-details">
            <p><i class="fa-solid fa-temperature-three-quarters fa-lg" style="color: #232931;"></i>${data1.current.feelslike_c}</p>
            <p><i class="fa-solid fa-wind fa-lg" style="color: #232931;"></i>${data1.current.wind_mph}</p>
            <p><i class="fa-solid fa-water fa-lg" style="color: #232931;"></i>${data1.current.humidity}</p>
        </div>`;
    }

    async function handleFutureWeather(city) {
        const data=await getData('konya');
        data.forecast.forecastday.forEach(day => {
            const Card=document.createElement('div');
            Card.classList.add('day-card');
            Card.innerHTML=`<div class="weater-img"><img src="${day.day.condition.icon}" alt="weather image"></div>
            <div class="weather-temp">${day.day.avgtemp_c}&deg;</div>
            <div class="weather-title">${day.day.condition.text}</div>
            <div class="weather-day">${day.date}</div>`;
            daysWrapper.appendChild(Card);
        });
    }
    handleCurrentWeather();
    handleFutureWeather('asdf');
})()

export default domController;