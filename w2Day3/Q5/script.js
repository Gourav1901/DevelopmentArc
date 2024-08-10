let timer;
let seconds = 0;
let isRunnging = false;


const timerDisplay = document.getElementById('timer')
const startButton  = document.getElementById('startbtn')
const stopButton  = document.getElementById('stopbtn')
const resetButton = document.getElementById('resetbtn')

function updateDisplay(){
  const minutes  = Math.floor(seconds / 60).toString().padStart(2,'0');

  const secs = (seconds%60).toString().padStart(2,'0');
  timerDisplay.textContent = `${minutes}:${secs}`;
}

function startTimer (){
  if(!isRunnging){
    timer = setInterval(()=>{
      seconds++;
      updateDisplay();
    },1000);
    isRunnging = true;
  }
  
}

function stopTimer () {
  clearInterval(timer)
  isRunnging = false;
  
}

function resetTimer () {
  clearInterval(timer)
  seconds = 0;
  isRunnging = false;
  updateDisplay();
}


startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
resetButton.addEventListener('click',resetTimer);

updateDisplay();
