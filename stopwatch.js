window.onload = () => {
  let hours = 00;
  let minutes = 00;
  let seconds = 00;
  let tens = 00;
  let addHours = document.getElementById('hours')
  let addMinutes = document.getElementById('minutes')
  let addTens = document.getElementById('tens')
  let addSeconds = document.getElementById('seconds')
  // Now applying the buttons
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');
  // Add interval variable to cycle through the time
  let interval;
  // Declaring button functions
  buttonStart.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  }

    buttonStop.onclick = () => {
    clearInterval(interval);
  }

    buttonReset.onclick = () => {
    clearInterval(interval);
    hours = '00';
    minutes = '00';
    tens = '00';
    seconds = '00';
    addHours.innerHTML = hours;
    addMinutes.innerHTML = minutes;
    addTens.innerHTML = tens;
    addSeconds.innerHTML = seconds;
  }
 // Adding logic to make stopwatch work!
startTimer = () => {
   tens++;

    if(tens <= 9){
    addTens.innerHTML = '0' + tens;
  }
  if(tens > 9){
    addTens.innerHTML = tens;
  }
  // I need the tens to count to 99, add to the seconds and start over at 00
  if(tens > 99){
    console.log('seconds');
    seconds++;
    addSeconds.innerHTML = `0${seconds}`;
    tens = 0;
    addTens.innerHTML = '0' + 0;
  }

  if(seconds > 9){
    addSeconds.innerHTML = seconds;
  }

    if(seconds > 60){
    console.log('minutes');
    minutes++;
    addMinutes.innerHTML = `0${minutes}`;
    seconds = 0;
    addSeconds.innerHTML = '0' + 0;
  }

  if(minutes > 9){
    addMinutes.innerHTML = minutes;
  }

     if(minutes > 60){
    console.log('hours');
    minutes++;
    addHours.innerHTML = `0${hours}`;
    minutes = 0;
    addMinutes.innerHTML = '0' + 0;
  }

  if(hours > 9){
    addHours.innerHTML = hours;
  }

  }
}
