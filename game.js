'use strict' 
const form = document.querySelector('#input-form');
const alphabet = document.querySelectorAll('.letter');
const Scene = document.querySelector('.game-container');
const livesDisplay = document.querySelector('.display-life');
let CurrentSpots = [];
let letters = [];
let lives = 0;
let guessingWord = '';
disableKeys();
// initialize func to reset & play again
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
function SetScene(guessingWord) {
    enableleKeys();
    letters = guessingWord.toUpperCase().split("");
    Scene.innerHTML = "";
    for (let i = 0; i < letters.length; i++) {
        let spot = document.createElement('span')
        spot.classList.add('spot');
        spot.innerHTML = "___";
        Scene.append(spot);
    }
    lives=5;
    displaylives(lives);
}
function displaylives(lives) { 
    if (lives === 5) {
        for (let i = 0; i < lives; i++) {
            let img = document.createElement('img');
            img.src = "heart.png";
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
function updateKeyboard(button, state) {
    button.disabled = true;
    button.style.color = 'white'; //add class deactive instead
    // add extra css later here & do classadd instead
    if (state === true) {
        button.style.backgroundColor = 'rgb(255, 118, 118)';
    } else {
        button.style.backgroundColor = 'rgb(146, 124, 124)';
    }
}
function UpdateScene(letter, index) {
    CurrentSpots = document.querySelectorAll('.spot');
    CurrentSpots[index].innerHTML = letter;
}

function win() {
    let check = [];
    for (let i = 0; i < CurrentSpots.length;i++) { // it iterates every turn !! how to stop this ?
        check[i] = CurrentSpots[i].innerHTML;
    }
    if (!check.includes("___")) { //myb deleting the check[] is solution ?
        alert("YES IT IS " + letters.join('') + " YOU WON!");
        disableKeys();
        playAgain();
    }
}

function lose() {
    lives--;
    displaylives(lives);
    //set time out or ?? to show the last live
    if (lives <= 0) {
        alert("GAME OVER ! it was " + guessingWord);
        disableKeys();
        playAgain();
    }
}

function disableKeys() {
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i].disabled = true;
    }
}


function enableleKeys() {
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i].disabled=false;
        alphabet[i].style.backgroundColor='';
        alphabet[i].style.color='';
    }
}

function playAgain() {
    const againBtn=document.createElement('button');
    againBtn.innerHTML="PLAY AGAIN";
    livesDisplay.style.display='none';
    //classlist.add to style
    livesDisplay.after(againBtn);
    againBtn.addEventListener('click',function () {
        Scene.innerHTML="";
        enableleKeys();
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
