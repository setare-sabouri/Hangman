import { getWord } from "./API.js"
import { disableKeys, enableleKeys, updateKeyboard } from "./keyboard.js";

const defcontainer = document.querySelector('.def-container');
const alphabet = document.querySelectorAll('.letter');
const livesDisplay = document.querySelector('.display-life');
const Scene = document.querySelector('.game-container');
let CurrentSpots = [];
let lives = 0;
let letters = [];
let guessingWord = '';
const wordEl = document.createElement('p');
disableKeys(alphabet);
initializeScene();

function initializeScene() {

    getWord().then((datas) => {
        let definition = datas.dictionary[0].shortdef;
        if (!definition) {
            wordEl.innerHTML = `No hints found but keep gussing 🕵🏽‍♂️`;
        }
        else {
            wordEl.innerHTML = `HINT : ${definition}`;
        }
        defcontainer.appendChild(wordEl);
        console.log("word is " + datas.word);
        guessingWord = datas.word[0];
        SetScene(guessingWord);
    })
}


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

function playAgain() {
    const againBtn = document.createElement('button');
    againBtn.innerHTML = "PLAY AGAIN";
    againBtn.classList.add('again-btn');
    livesDisplay.style.display = 'none';
    livesDisplay.after(againBtn);
    againBtn.addEventListener('click', function () {
        Scene.innerHTML = "";
        againBtn.remove();
        initializeScene();
    });
}