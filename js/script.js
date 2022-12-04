//Значения
let second = 0;
let minute = 0;
let hour = 0;

//Кнопки
let start = document.querySelector('.start');
let lap = document.querySelector('.new-lap');
let reset = document.querySelector('.reset');

//Инфо
let secondElem = document.querySelector('.second');
let minuteElem = document.querySelector('.minute');
let hourElem = document.querySelector('.hour');

let timer;
let count = 0;

//---------------------------------------------------------------------------------------



//Кнопка старт стоп
start.addEventListener('click',() => {
	if(start.classList.contains('start')) {
		start.textContent = 'STOP';
		start.classList.add('stop');
		start.classList.remove('start');
		lap.addEventListener('click',lapTimer)
		startTimer()
	}else {
		stopTimer()
	}
})

reset.addEventListener('click',() => {
	resetTimer();
})

function startTimer() {
	timer = setInterval(() => {
		second++;
		if(second >= 60) {
			minute++;
			second = 0;
		}
		if(minute >= 60) {
			minute = 0;
			hour++;
		}
		infoTimer();
	}, 1000);
}

function stopTimer() {
	lap.removeEventListener('click',lapTimer)
	clearInterval(timer);
	start.textContent = 'START';
	start.classList.remove('stop');
	start.classList.add('start');
}

function resetTimer() {
	stopTimer();
	second = 0;
	minute = 0;
	hour = 0;
	infoTimer();
	lapReset();
}

function infoTimer() {
	secondElem.textContent = second;
	minuteElem.textContent = minute;
	hourElem.textContent = hour;
}

//Круги

function lapTimer() {
	count++;
	document.querySelector('.lap__info').insertAdjacentHTML(
		'beforeend',
		`<div class="lap__row">Lap ${count}:${hour} ${minute} ${second}</div>`
	)
}

function lapReset() {
	count = 0;
	document.querySelector('.lap__info').textContent = '';
}