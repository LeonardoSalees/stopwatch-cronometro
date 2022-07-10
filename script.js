// variaveis

let milleseconds = 0
let seconds = 0
let minutes = 0
let hours = 0
let timerId

// elements DOM

let spanSeconds = document.getElementById('seconds')

let spanMinutes = document.getElementById('minutes')

let spanHours = document.getElementById('hours')

let spanMilleseconds = document.getElementById('milliseconds')

let startButton = document.getElementById('start-button')

let stopButton = document.getElementById('stop-button')

let resetButton = document.getElementById('reset-button')

// EventListeners

startButton.addEventListener('click', event => {
  startTimer()
  startButton.disabled = true
  stopButton.disabled = false
})

stopButton.addEventListener('click', event => {
  stopTimer()
  startButton.disabled = false
  stopButton.disabled = true
})

resetButton.addEventListener('click', event => {
  stopTimer()
  resetTimer()
  startButton.disabled = false
  stopButton.disabled = true
})

// TIMER

stopButton.disabled = true

function startTimer() {
  timerId = setInterval(countMilliseconds, 1000 / 60)
}

function stopTimer() {
  clearInterval(timerId)
}

function resetTimer() {
  milleseconds = seconds = minutes = hours = 0
  spanMilleseconds.innerHTML = '0' + milleseconds
  spanSeconds.innerHTML = '0' + seconds
  spanMinutes.innerHTML = '0' + minutes
  spanHours.innerHTML = '0' + hours
}
function countMilliseconds() {
  milleseconds++
  if (milleseconds < 10) {
    milleseconds = '0' + milleseconds
  }

  if (milleseconds == 60) {
    countSeconds()
    milleseconds = '00'
  }

  spanMilleseconds.innerHTML = milleseconds
}
function countSeconds() {
  seconds++
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  if (seconds == 60) {
    countMinutes()
    seconds = '00'
  }

  spanSeconds.innerHTML = seconds
}

function countMinutes() {
  minutes++
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  if (minutes == 60) {
    countHours()
    minutes = '00'
  }

  spanMinutes.innerHTML = minutes
}

function countHours() {
  hours++
  if (hours < 10) {
    hours = '0' + hours
  }

  spanHours.innerHTML = hours
}
