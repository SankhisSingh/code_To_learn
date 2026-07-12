const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn=document.getElementById("lapBtn");
const lapList=document.getElementById("lapList");
let lapCount=1;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay() {

    const formattedHours =
        hours < 10 ? "0" + hours : hours;

    const formattedMinutes =
        minutes < 10 ? "0" + minutes : minutes;

    const formattedSeconds =
        seconds < 10 ? "0" + seconds : seconds;

    display.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

}
lapBtn.addEventListener("click",function(){
    const li=document.createElement("li");
    li.textContent=`Lap ${lapCount}-${display.textContent}`;
    lapList.appendChild(li);
    lapCount++;
});

startBtn.addEventListener("click", function () {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);

});
stopBtn.addEventListener("click",function(){
    clearInterval(timer);
    timer = null;
});
resetBtn.addEventListener("click",function(){

    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

});