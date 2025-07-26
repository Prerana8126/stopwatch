const clock = document.querySelector('.clock');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.querySelector('.laps');

let msec = 0, secs = 0, mins = 0, hour = 0;
let timerId = null;

startBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerId);
  msec = secs = mins = hour = 0;
  clock.innerHTML = '00:00:00:00';
  laps.innerHTML = ''; // clear lap list if needed
});

lapBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  const number = document.createElement('span');
  const timeStamp = document.createElement('span');

  li.className = 'lap-item';
  number.className = 'number';
  timeStamp.className = 'time-stamp';

  number.innerText = `#${laps.querySelectorAll('.lap-item').length + 1}`;
  timeStamp.innerText = `${hour < 10 ? '0' + hour : hour}:` +
                        `${mins < 10 ? '0' + mins : mins}:` +
                        `${secs < 10 ? '0' + secs : secs}:` +
                        `${msec < 10 ? '0' + msec : msec}`;

  li.append(number, timeStamp);
  laps.append(li);
});

function startTimer() {
  msec++;
  if (msec === 100) { // adjust if using ms up to 1000
    msec = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
      if (mins === 60) {
        mins = 0;
        hour++;
      }
    }
  }

  const msecsString = msec < 10 ? `0${msec}` : msec;
  const secsString = secs < 10 ? `0${secs}` : secs;
  const minsString = mins < 10 ? `0${mins}` : mins;
  const hourString = hour < 10 ? `0${hour}` : hour;

  clock.innerHTML = `${hourString}:${minsString}:${secsString}:${msecsString}`;
    li.className = 'lap-item';

  const number = document.createElement('span');
  number.className = 'number';
  number.innerText = `#${laps.querySelectorAll('.lap-item').length + 1}`;

  const timeStamp = document.createElement('span');
  timeStamp.className = 'time-stamp';
  timeStamp.innerText = `${hour < 10 ? '0' + hour : hour}:` +
                        `${mins < 10 ? '0' + mins : mins}:` +
                        `${secs < 10 ? '0' + secs : secs}:` +
                        `${msec < 10 ? '0' + msec : msec}`;

  li.append(number, timeStamp);
  laps.append(li);
}
