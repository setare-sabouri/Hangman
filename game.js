'use strict'
const form=document.querySelector('#input-form');
const alphabet=document.querySelectorAll('.letter');
const Scene=document.getElementById('game-container');
const livesDisplay=document.getElementById('display-life');
const againContainer=document.getElementById('again-btn');
let CurrentSpots=[];
let letters=[];
let lives=0;
let guessingWord='';
let clickedLetter='empty';

form.onsubmit=function(event) {
    event.preventDefault();
    guessingWord=form.elements.wordToGuess.value;
    if (!guessingWord) {
        alert("there is no word to guess !")
    }
    if (guessingWord) {
        letters=guessingWord.toUpperCase().split("");
        form.elements.wordToGuess.value='';
        SetScene(letters); 
    }
}
alphabet.forEach(element => {
    element.addEventListener('click', function(event) {
        event.stopPropagation();
        playTurn(element);
        
    })
});

function playTurn(btn) {
    clickedLetter=btn.innerHTML;
    if (validate(clickedLetter)) {
        console.log(clickedLetter+" letter is used");
        updateKeyboard(btn,true);
        win(CurrentSpots);
    }
    else{
        console.log(clickedLetter+" letter is not used");
        updateKeyboard(btn,false);
        lose();
    }
}

function validate(clickedLetter) {
    let used=false
    for (let i = 0; i < letters.length; i++) {
        if (clickedLetter===letters[i]) {
            UpdateScene(letters[i],i);
            used=true;
        } 
    }
   return used;
}

function UpdateScene(letter,index) {
    CurrentSpots=document.querySelectorAll('.spot');
    CurrentSpots[index].innerHTML=letter;
}

function SetScene(letters) {
    Scene.innerHTML="";
    for (let i = 0; i < letters.length; i++) {
        let spot=document.createElement('span')
        spot.classList.add('spot');
        spot.innerHTML=" _ ";
        Scene.append(spot);
        //lifes can be aaded here in update visual
    }
    livesDisplay.innerHTML="you have 5 chances";
    lives=5;
    // displayLive(lives);
}

function win(spots) {
    let check=[];
    for (let i = 0; i < spots.length; i++) {
        check[i]=spots[i].innerHTML;
    }
    if (!check.includes(" _ ")) {
        alert("YES IT IS "+letters.join('')+" YOU WON!");
        disableKeys();
    }
 }

 function lose() {
    lives--;
    if (lives<=0) {
        alert("GAME OVER ! it was "+ guessingWord);
        disableKeys();
    }
}
function updateKeyboard(button,state) {
    button.disabled=true;
    button.style.color='white';
    //add extra css later
    if (state===true) {
        button.style.backgroundColor='rgb(255, 118, 118)';
    }
    else{
        button.style.backgroundColor='rgb(146, 124, 124)';
    }
}

function disableKeys() {
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i].disabled=true;
    }
}

// function displayLive(lives) {
//     for (let i = 0; i < lives; i--) {
//         let img=document.createElement("img");
//         img.src="heart.png";
//         livesDisplay.append(img);
//     }

// }

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
