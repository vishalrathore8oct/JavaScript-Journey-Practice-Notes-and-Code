let randomNumber = parseInt(((Math.random() * 100) + 1))

const submitBtn = document.querySelector("#submit-button")
const userInput = document.querySelector("#guess-field")
const guessSlot = document.querySelector(".guesses")
const remainingSlot = document.querySelector(".remaining")
const lowOrHigh = document.querySelector(".low-high")
const resultParas = document.querySelector(".lower-text-content")
const p = document.createElement("p")

let numberOfGuesses = 1
let playGame = true

if (playGame) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const guesses = parseInt(userInput.value)
        validateGuess(guesses)
    })
}

function validateGuess(guessess) {
    if (isNaN(guessess)) {
        alert("please enter the valid Number")
    } else if (guessess < 1) {
        alert("please enter the value greater than 1")
    } else if (guessess > 100) {
        alert("please enter the value less than 100")
    } else {
        if (numberOfGuesses === 10) {
            displayMessage(`gama over, random number was ${randomNumber}`)
            displayGuess(guessess)
            endGame()
        } else {
            displayGuess(guessess)
            compareGuess(guessess)
        }
    }
}

function compareGuess(guesses) {
    if (guesses === randomNumber) {
        displayMessage("your Guess is Correct")
        endGame()
    } else if (guesses < randomNumber) {
        displayMessage("Number is too Low")
    } else if (guesses > randomNumber) {
        displayMessage("Number is too Hight")
    }
}

function displayGuess(guesses) {
    userInput.value = ""
    guessSlot.innerHTML += `${guesses}, `
    remainingSlot.innerHTML = `${10 - numberOfGuesses}`
    numberOfGuesses++

}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.innerHTML = `<h2 id="newGame" style="cursor:pointer;" >Start a new Game</h2>`
    resultParas.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener("click", () => {
        randomNumber = parseInt(((Math.random() * 100) + 1))
        numberOfGuesses = 1
        userInput.value = ""
        guessSlot.innerHTML = ""
        remainingSlot.innerHTML = 10
        userInput.removeAttribute("disabled")
        resultParas.removeChild(p)
        displayMessage(" ")
        playGame = true
    })
}

