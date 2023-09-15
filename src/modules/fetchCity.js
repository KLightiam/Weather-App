import backgroundImg from './../images/beautiful-mountains.jpg';
import populatePage from './populatePage';

let resultDiv = document.querySelector('.result');
export default async function fetchCity(city){
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9fd654780204455294f105817232908&q=${city}`);
    let weatherData = await response.json();
    let country = weatherData.location.country;
    let cityName = weatherData.location.name;
    let tempInCelsius = weatherData.current.temp_c +'° celsius';
    let weatherText = weatherData.current.condition.text;
    let weatherImg = weatherData.current.condition.icon;
    resultDiv.style.backgroundImage = `url('${backgroundImg}')`;
    // resultDiv.textContent = cityName + ' ' + tempInCelsius +'celsius';
    populatePage(country,cityName,tempInCelsius,weatherText);
}