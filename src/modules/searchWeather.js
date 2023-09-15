import fetchCity from "./fetchCity";

export default function searchWeather(){
    let city = document.querySelector(`input[type='search']`).value;
    fetchCity(city);
}