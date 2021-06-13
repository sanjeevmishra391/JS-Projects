class Timer {
  //constructor to initialise variables
  constructor(durationInput, startButton, pauseButton, reloadButton, markButton, callBacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.reloadButton = reloadButton;
    pauseButton.classList.add("disabledbtn");
    this.markButton = markButton;
    this.initialTime = this.durationInput.value;

    if(callBacks) {
      this.onStart = callBacks.onStart;
      this.onTick = callBacks.onTick;
      this.onComplete = callBacks.onComplete;
    }

    startButton.addEventListener("click", this.start);
    pauseButton.addEventListener("click", this.pause);
    durationInput.addEventListener("blur", this.onDurationChange);
    reloadButton.addEventListener("click", this.reload);
    markButton.addEventListener("click", this.mark);
  }

  //function to start the timer on clicking start button
  start = () => {
    if(this.onStart) {
      this.onStart(this.timeRemaining);
    }

    this.tick();
    if(ticking) {
      startButton.disabled = true;
      startButton.classList.add("disabledbtn");
      pauseButton.classList.remove("disabledbtn");
      this.interval = setInterval(this.tick, 50);
    } else {
      ticking=true;
    }
  }

  //function to pause the timer on clicking the pause button
  pause = () => {
    ticking = false;
    startButton.disabled = false;
    startButton.classList.remove("disabledbtn");
    pauseButton.classList.add("disabledbtn");
    clearInterval(this.interval);
  }

  //function to change the timer details on changing the timer
  onDurationChange = () => {
    this.pause();
    this.initialTime = this.timeRemaining;
  }

  //function to update the timer with every tick when timer is running
  tick = () => {
    if(this.timeRemaining<=0) {
      this.pause();
      if(this.onComplete) {
        this.onComplete();
      }
    } else {
      ticking = true;
      this.timeRemaining = this.timeRemaining-0.05;
      if(this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  }

  //function to reload the timeRemaining
  reload = () => {
    ticking = false;
    this.pause();
    this.durationInput.value = 10;
    this.onStart(10);
    this.onTick(10);
    this.initialTime = 10;
    const ul = document.querySelector(".marks");
    while(ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }

  //function to mark the time
  mark = () => {
    if(ticking) {
      const ul = document.querySelector(".marks");
      let li = document.createElement("li");
      li.classList.add("item");
      li.innerHTML = `${(this.timeRemaining)}`;
      ul.appendChild(li);
    }
  }

  //function to get the time remaining
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  //function to set the time timeRemaining
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}

//-------------------------------------------------------------------

const durationInput = document.querySelector('#timerText');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const reloadButton = document.querySelector("#reload");
const markButton = document.querySelector("#mark");
const circle = document.querySelector(".circle");
const perimeter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', perimeter);
var ticking = false;
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, reloadButton, markButton, {
  onStart(startDuration) {
    duration = startDuration;
  },
  onTick(time) {
    circle.setAttribute('stroke-dashoffset', perimeter*time/duration - perimeter);
  },
  onComplete() {
  }
});
