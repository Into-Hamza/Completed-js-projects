const form = document.querySelector(".form")
const submitButton = document.querySelector(".guessSubmit")
const userGuess = document.querySelector(".guessField")
const errormsg = document.querySelector(".resultParas")
const prevguess = document.querySelector(".guesses")
const remainguess = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const newGame = document.querySelector("#newGame")

let randomNumber = Math.floor((Math.random()*99) +1)
console.log(randomNumber)

let p = document.createElement('p')
// let prevValArr = [];
let remainingGuess = 10;
let canPlay = true;


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let value = parseInt(userGuess.value)
    verifyVal(value)
    userGuess.value = ''
    // lowOrHi.innerHTML = ''
})

userGuess.addEventListener("focus",()=>{
    p.innerHTML = ''
    errormsg.appendChild(p)
})

function verifyVal(number){
    if (number === '' || number <=0 || isNaN(number)) {
        p.innerHTML = "It's not a valid number"
        errormsg.appendChild(p)
    } else if (number >=100) {
        p.innerHTML = "Choose less than 100"
        errormsg.appendChild(p)
    }else{
        checkVal(number)
    }
}

function checkVal(number){
    if (number < randomNumber) {
        p.innerHTML = `Number is greater than ${number}`
        errormsg.appendChild(p)
        displayVal(number)
        
    }
    else if (number > randomNumber) {
        p.innerHTML = `Number is shorter than ${number}`
        errormsg.appendChild(p)
        displayVal(number)
    }
    else{
        displayMsg(number)
    }
    
    
}
function displayVal(number){
    // prevValArr.push(number)
    if (remainingGuess === 1) {
        endGame()
    }else{
        lowOrHi.innerHTML = `Remaining attempts are ☝`
        prevguess.innerHTML += `${number} `
        remainingGuess--
        remainguess.innerHTML = `${remainingGuess}`
    }
    
}
function displayMsg(number){
    lowOrHi.innerHTML = `CONGRATS ${number} is the corrects 🎊🥳🎉`
    endGame()
}
function endGame(){
    userGuess.setAttribute('disabled', '')
    submitButton.style.display = 'none'
    newGame.style.display = 'block'
}
newGame.addEventListener("click", function (){
    submitButton.style.display = 'inline-block'
    newGame.style.display = 'none'
    userGuess.removeAttribute('disabled')
    randomNumber = parseInt(Math.floor((Math.random()*99) +1))
    console.log(randomNumber);
    remainingGuess = 10
    remainguess.innerHTML = `${remainingGuess}`
    prevguess.innerHTML = ''
    lowOrHi.innerHTML = ''
    errormsg.removeChild(p)
    canPlay = true
},{capture:true})

