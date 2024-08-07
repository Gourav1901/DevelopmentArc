let timer;
let seconds = 0;
let isrRunning = false;

function formateTime(seconds){
  let mins = Math.floor(seconds/60);
  let secs = seconds % 60;
  if(mins < 10) mins = "0" + mins;

  if(secs < 10) secs = "0" + secs;
  return `${mins}:${secs}`;

}

function updateTimerDisplay(){
  document.getElementById('timer').textContent = formateTime(seconds);
}

function startbtn() {
  if(!isrRunning){
    isrRunning = true;
    timer = setInterval(()=>{
      seconds++;
      updateTimerDisplay();
    },1000);
  }
}

function stopbtn(){
  clearInterval(timer);
    isrRunning = false; 
  
}

function resetbtn(){
    stopbtn();
    seconds = 0;
    updateTimerDisplay()

}


document.getElementById("start").addEventListener('click',startbtn)
document.getElementById("stop").addEventListener('click',stopbtn)
document.getElementById("reset").addEventListener('click',resetbtn)