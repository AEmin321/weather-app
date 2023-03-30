import getData from "./data";

const domController=(()=>{
    const currentCard=document.querySelector('.current-card');
    // console.log(data);
    async function defaultCurrentWeather (){
        const data=await getData('Konya');
        currentCard.innerHTML=`<div class="temp">${data.current.temp_c}&deg;</div>
        <div class="weather-headings">
            <div class="weather-img">
                <img src="${data.current.condition.icon}" alt="">
            </div>
            <div class="weather-details">
                <div class="weather">${data.current.condition.text}</div>
                <div class="location">${data.location.name}, ${data.location.country}</div>
            </div>
        </div>
        <div class="last-updated">${data.current.last_updated}</div>
        <div class="current-details">
            <p><i class="fa-solid fa-temperature-three-quarters fa-lg" style="color: #232931;"></i>${data.current.feelslike_c}</p>
            <p><i class="fa-solid fa-wind fa-lg" style="color: #232931;"></i>${data.current.wind_mph}</p>
            <p><i class="fa-solid fa-water fa-lg" style="color: #232931;"></i>${data.current.humidity}</p>
        </div>`;
    }
    defaultCurrentWeather();
})()

export default domController;