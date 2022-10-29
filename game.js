'use strict' const form = document.querySelector('#input-form');
const alphabet = document.querySelectorAll('.letter');
const Scene = document.querySelector('.game-container');
const livesDisplay = document.querySelector('.display-life');
const againBtnn = document.getElementById('again-btn');
let CurrentSpots = [];
let letters = [];
let lives = 0;
let guessingWord = '';
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
    }
}

function SetScene(guessingWord) {
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

function displaylives(lives) { // it adds everytime !! how to stop this ?
    if (lives === 5) {
        for (let i = 0; i < lives; i++) {
            let img = document.createElement('img');
            img.src = "heart.png";
            livesDisplay.prepend(img);
        }
    } 
    else { 

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
        win(CurrentSpots);
    } else {
        updateKeyboard(btn, false);
        lose();
    }
    // display lives (check if needed)
}

function validate(clickedLetter) {
    let used = false
    for (let i = 0; i < letters.length; i++) {
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


function win(spots) {
    let check = [];
    for (let i = 0; i < spots.length; i++) {
        check[i] = spots[i].innerHTML;
    }
    if (!check.includes("___")) {
        alert("YES IT IS " + letters.join('') + " YOU WON!");
        disableKeys();
    }
}

function lose() {
    lives--;
    // displaylive(lives);
    if (lives <= 0) {
        alert("GAME OVER ! it was " + guessingWord);
        disableKeys();
    }
}
function updateKeyboard(button, state) {
    button.disabled = true;
    button.style.color = 'white';
    // add extra css later here
    if (state === true) {
        button.style.backgroundColor = 'rgb(255, 118, 118)';
    } else {
        button.style.backgroundColor = 'rgb(146, 124, 124)';
    }
}

function disableKeys() {
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i].disabled = true;
    }
}


// function enableleKeys() {
//     for (let i = 0; i < alphabet.length; i++) {
//         alphabet[i].disabled=false;
//         alphabet[i].style.backgroundColor='';
//         alphabet[i].style.color='';
//     }
// }
// function playAgain() {
//     let toPlay=confirm("DO YOU WANT TO PLAY AGAIN ?");
//     if (toPlay) {
//         Scene.innerHTML="";
//         enableleKeys();
//     }
// }


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
