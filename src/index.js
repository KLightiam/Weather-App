import './style.css';
import searchWeather from './modules/searchWeather.js';



let searchButton = document.querySelector('button');
searchButton.addEventListener('click',searchWeather)