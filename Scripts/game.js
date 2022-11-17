import { disableKeys, enableleKeys, updateKeyboard } from "./keyboard.js";
const form = document.querySelector('#input-form');
const alphabet = document.querySelectorAll('.letter');
const Scene = document.querySelector('.game-container');
const livesDisplay = document.querySelector('.display-life');
let CurrentSpots = [];
let letters = [];
let lives = 0;
let guessingWord = '';
disableKeys(alphabet);
// import { setScore, getScore } from "../Scripts/Data.js";
// setScore("seti", 60);
// console.log(getScore("seti"));
// initialize func to reset & play again
function SetScene(guessingWord) {
    enableleKeys(alphabet);
    livesDisplay.innerHTML = ''; //remove all children
    letters = guessingWord.toUpperCase().split("");
    Scene.innerHTML = "";
    for (let i = 0; i < letters.length; i++) {
        let spot = document.createElement('span')
        spot.classList.add('spot');
        spot.innerHTML = "___";
        Scene.append(spot);
    }
    lives = 5;
    displaylives(lives);
}


form.onsubmit = function (event) {
    event.preventDefault(); // is this needed ?
    guessingWord = form.elements['wordToGuess'].value;
    if (!guessingWord) {
        alert("PLAYER 1 Enter a word to guess !")
    }
    if (guessingWord) {
        form.elements['wordToGuess'].value = '';
        SetScene(guessingWord);
        form.style.display = "none";
    }
}
function displaylives(lives) {
    livesDisplay.style.display = 'flex';
    if (lives === 5) {
        for (let i = 0; i < lives; i++) {
            let img = document.createElement('img');
            img.src = "../heart.png";
            livesDisplay.prepend(img);
        }
    }
    else {
        livesDisplay.removeChild(livesDisplay.lastElementChild);
    }

}

alphabet.forEach(element => {
    element.addEventListener('click', function (event) {
        event.stopPropagation();
        playTurn(element);
    })
});

function playTurn(btn) {
    const clickedLetter = btn.innerHTML;
    if (validate(clickedLetter)) {
        updateKeyboard(btn, true);
        win();
    } else {
        updateKeyboard(btn, false);
        lose();
    }
}

function validate(clickedLetter) {
    let used = false;
    for (let i = 0; i < letters.length; i++) { //use word.include as update
        if (clickedLetter === letters[i]) {
            UpdateScene(letters[i], i);
            used = true;
        }
    }
    return used;
}

function UpdateScene(letter, index) {
    CurrentSpots = document.querySelectorAll('.spot');
    CurrentSpots[index].innerHTML = letter;
}

function win() {
    let check = [];
    for (let i = 0; i < CurrentSpots.length; i++) { // it iterates every turn !! how to stop this ?
        check[i] = CurrentSpots[i].innerHTML;
    }
    if (!check.includes("___")) { //myb deleting the check[] is solution ?
        alert("YES IT IS " + letters.join('') + " YOU WON!");
        disableKeys(alphabet);
        playAgain();
    }
}

function lose() {
    lives--;
    displaylives(lives);
    //set time out or ?? to show the last live
    if (lives <= 0) {
        alert("GAME OVER ! it was " + guessingWord);
        disableKeys(alphabet);
        playAgain();
    }
}


function playAgain() {
    const againBtn = document.createElement('button');
    againBtn.innerHTML = "PLAY AGAIN";
    againBtn.classList.add('again-btn');
    livesDisplay.style.display = 'none';
    livesDisplay.after(againBtn);
    againBtn.addEventListener('click', function () {
        Scene.innerHTML = "";
        form.style.display = "block";
        againBtn.remove();
    });
}


// function playTurn() {
//     const letter = event.target.innerHTML;

//     if (word.includes(letter)) {
//         // correct guess
//     } else {
//         // incorrect guess
//     }

//     if (hasWon()) {
//         // show winning message
//         // play again
//     } else if (hasLost()) {
//         // loose message
//         // play again
//     } else {
//         // do nothing
//     }


// }

