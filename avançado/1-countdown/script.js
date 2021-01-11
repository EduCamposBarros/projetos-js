const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const anoNovo =  '1 Jan 2022';

function countdown(){
    const dataAnoNovo = new Date(anoNovo);
    const dataAtual = new Date();

    const segundosTotal = (dataAnoNovo - dataAtual) / 1000;

    const dias = Math.floor(segundosTotal / 3600 / 24);

    const horas = Math.floor(segundosTotal / 3600) % 24;

    const minutos = Math.floor(segundosTotal / 60)% 60;

    const segundos = Math.floor(segundosTotal) % 60;

    daysEl.innerHTML = dias;
    hoursEl.innerHTML = formatTime(horas);
    minsEl.innerHTML = formatTime(minutos);
    secsEl.innerHTML = formatTime(segundos);

};

function formatTime(time){
    return time <10 ? (`0${time}`) : time;
};

//Chamado da função
setInterval(countdown, 1000);

countdown();
