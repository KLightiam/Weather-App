
let resultDiv = document.querySelector('.result');
export default function populatePage(country,cityName,tempInCelsius,weatherText){
    resultDiv.textContent = "";
    let args = [...arguments];
    args.forEach(value => {
        let div = document.createElement('div');
        div.textContent = value;
        resultDiv.appendChild(div);
    })
}