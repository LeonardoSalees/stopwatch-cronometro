// variaveis

let seconds = 0
let minutes = 0
let hours = 0
let timerId

// elements DOM

let spanSeconds = document.getElementById('seconds')

let spanMinutes = document.getElementById('minutes')

let spanHours = document.getElementById('hours')

let startButton = document.getElementById('start-button')

let stopButton = document.getElementById('stop-button')

let resetButton = document.getElementById('reset-button')

// EventListeners

startButton.addEventListener('click', event => {
  startTimer()
  startButton.disabled = true
})

stopButton.addEventListener('click', event => {
  stopTimer()
  startButton.disabled = false
})

resetButton.addEventListener('click', event => {
  stopTimer()
  resetTimer()
  startButton.disabled = false
})

// TIMER

function startTimer() {
  timerId = setInterval(countSeconds, 1000)
}

function stopTimer() {
  clearInterval(timerId)
}

function resetTimer() {
  seconds = minutes = hours = 0
  spanSeconds.innerHTML = '0' + seconds
  spanMinutes.innerHTML = '0' + minutes
  spanHours.innerHTML = '0' + hours
}

function countSeconds() {
  seconds++
  if (seconds < 10) {
    seconds = '0' + seconds
    console.log(seconds)
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
