const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizedWord = ''
let maskedWord = ''
let numberOfGuesses = 0

const newGame= () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizedWord = words [random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
    numberOfGuesses = 0
}

const win = () => {
    alert(`Arvasit oikein, sana on ${randomizedWord}. Arvauskertoja oli yhteensä ${numberOfGuesses}.`)
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0; i < randomizedWord.length; i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        e.preventDefault() //Prevent form submission.
        numberOfGuesses= numberOfGuesses + 1
        const guess = input.value
        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()){
                win()
            }
        } else {
            alert("Arvasit väärin!")
        }
        input.value = ''
    }
    span.innerHTML = numberOfGuesses
})