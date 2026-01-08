console.log("hitesh")

let value = parseInt((Math.random() * 1000 + 1).toFixed(2))
console.log(value)

const userInput = document.querySelector(".guessField")
const submit = document.querySelector(".guessSubmit")
const preGuess = document.querySelector(".guesses")
const power = document.querySelector(".lastResult")
const HINT = document.querySelector(".lowOrHi")
const hint = document.querySelector("#hint")

let restrat = document.createElement('button')

let preArray = []

let playGame = true;

let numGuess = 1;
power.innerText = numGuess


if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault()
    let guess = parseInt(userInput.value);
    console.log(guess);
    Validity(guess)
  })
}

function Validity(guess) {
  if (isNaN(guess)) {
    alert(`you enter Invalid format`)
    userInput.value = ''
  }
  else if (guess < 1) {
    alert(`Guess between 1 to 100 `)
    userInput.value = ''
  }
  else if (guess > 1000) {
    alert(`Guess between 1 to 100 `)
    userInput.value = ''
  } else {
    if (numGuess === 10) {
      alert(`Game over try again , random number is ${value}`)
      endGame()
    } else {
      guessInfo(guess)
      displayHint(guess)
      if (guess === value) {
        endGame()
        alert(`congratulation you won`)
      }
    }
  }
}

function displayHint(guess) {
  if (guess < value) {
    hint.innerText = (" TOO LOW")
    console.log('l')
  }
  else if (guess > value) {
    hint.innerText = (" TOO HIGH")
    console.log('h')
  }
}

function guessInfo(guess) {
  preArray.push(guess);
  preGuess.innerText = `${preArray},`
  //console.log(preArray)
  userInput.value = '';
  power.innerHTML = numGuess++;
}

function endGame() {
  userInput.value = ``;
  userInput.setAttribute('disabled', '')
  submit.setAttribute('disabled', '')
  power.innerText = '';
  preGuess.innerText = "";
  hint.innerText = "";
  HINT.innerText = "";
  HINT.append(restrat)
  playGame = false;
  newGame()
}



function newGame() {
  restrat.innerText = `[START AGAIN]`
  restrat.style.fontSize = '20px'
  restrat.addEventListener('click', function (e) {
    value = parseInt((Math.random() * 100 + 1).toFixed(2))
    submit.removeAttribute('disabled')
    HINT.innerText = 'HINT:'
    HINT.append(hint)
    numGuess = 1;
    preArray = [];
    userInput.removeAttribute('disabled');
    playGame = true;
  })
}