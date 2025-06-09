// const randomNumber = parseInt(Math.random()*100+1);

// const submit = document.querySelector('#subt')
// const userInput = document.querySelector('#guessField')
// const guessSlot = document.querySelector('.guesses')
// const remaining = document.querySelector('.lastResult')
// const lowORhi = document.querySelector('.lowOrHi')
// const startOver = document.querySelector('.resultParas')

// const p = document.createElement('p')

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if(playGame){
//     submit.addEventListener('click', function(e){
//         e.preventDefault();
//         const guess = parseInt(userInput.value)
//         console.log(guess);
//         validateGuess(guess);
//     })
// }

// function validateGuess(guess){        // check for invalid and negative values
//     if(isNaN(guess)){
//         alert('please enter a valid number')
//     } else if(guess < 1){
//         alert('please enter a number more than 1')
//     } else if(guess > 100){
//         alert('please enter a number less than 100')
//     } else {
//         prevGuess.push(guess)
//         if(numGuess===11){
//             cleanUpGuess(guess)
//             displayMessage()
//         }
//     }
// }

// function checkGuess(guess){
//     if(guess === randomNumber){
//         displayMessage(`you guessed it right`)
//         endGame()
//     } else if(guess < randomNumber){
//         displayMessage(`no.is tooo low`)
//     } else if(guess > randomNumber){
//         displayMessage(`number is too high`)
//     }
// }

// function cleanUpGuess(guess){   // value user ne dedi hai
//     userInput.value = ''           // to value clean krdo
//     guessSlot.innerHTML += `${guess}, `  // us value ko show bhi krdo
//     numGuess ++;                      // aur us value ko update (add) bhi krdo
//     remaining.innerHTML = `${11 - numGuess}`
// }

// function displayMessage(message){
//     lowORhi.innerHTML = `<h2>${message}</h2>`
// }

// function endGame(){
//     userInput.value = ''       // clean the value
//     userInput.setAttribute('disabled', '')  //userinput ke andar aur values add na kr paye
//     p.classList.add('button')
//     p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
//     startOver.appendChild(p)
//     playGame = false;
//     newGame()
// }

// function newGame(){
//    const newGameButton = document.querySelector('#newGame')
//    newGameButton.addEventListener('click', function(e){
//     randomNumber=parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess}`;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);
//     playGame = true;
//    })
// }


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowORhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) { // check for invalid and negative values
    if (isNaN(guess)) {
        alert('please enter a valid number');
    } else if (guess < 1) {
        alert('please enter a number more than 1');
    } else if (guess > 100) {
        alert('please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        cleanUpGuess(guess);
        checkGuess(guess); // Now checking the guess properly
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`no.is tooo low`);
    } else if (guess > randomNumber) {
        displayMessage(`number is too high`);
    }

    if (numGuess === 11) {
        displayMessage(`Game Over! The correct number was ${randomNumber}`);
        endGame();
    }
}

function cleanUpGuess(guess) { // value user ne dedi hai
    userInput.value = ''; // to value clean krdo
    guessSlot.innerHTML += `${guess}, `; // us value ko show bhi krdo
    numGuess++; // aur us value ko update (add) bhi krdo
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowORhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = ''; // clean the value
    userInput.setAttribute('disabled', ''); // userinput ke andar aur values add na kr paye
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1); // Random number should be updated
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
