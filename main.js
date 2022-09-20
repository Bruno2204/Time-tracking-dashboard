import data from './data.json' assert {type: 'json'}

let dailyArray = data.map(item => item.timeframes.daily);
let weeklArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let dailyBtn = document.querySelector('#daily')
let weeklyBtn = document.querySelector('#weekly')
let monthlyBtn = document.querySelector('#monthly')

let secondSections = document.querySelector('.second-section')

let bgcolors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)',
]

dailyBtn.addEventListener('click', () => {
    drawElements(dailyArray);
});

weeklyBtn.addEventListener('click', () => {
    drawElements(weeklArray);
});

monthlyBtn.addEventListener('click', () => {
    drawElements(monthlyArray);
});
function drawElements(array){
    secondSections.innerHTML = '';
    array.forEach((item,index) => {

        let title = data[index].title;
        let titleLowerCase = title.toLocaleLowerCase();
        if(titleLowerCase == 'self care'){
            titleLowerCase = 'self-care';
        }
        secondSections.innerHTML += `<div class="card">
        <div class="card__background" style="background-color: ${bgcolors[index]}">
          <img class="card__image" src="/images/icon-${titleLowerCase}.svg" alt="">
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${data[index].title}</p>
            <img src="./images/icon-ellipsis.svg" alt="">
          </div>
          <div class="card_hours">
            <p class="card_hour">${item.current}hrs</p>
            <p class="card_previous">Previous - ${item.previous}hrs</p>
          </div>
        </div>
      </div>`
    })
}