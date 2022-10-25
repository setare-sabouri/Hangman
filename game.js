'use strict'
const form=document.querySelector('#input-form');

const alphabet=document.querySelectorAll('.letter');
const Scene=document.getElementById('game-container');
const livesDisplay=document.getElementById('display-life');
const againContainer=document.getElementById('again-btn');
let letters=[];
let lives=0;
let word='';
let win=false;
let clickedLetter='empty';
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

form.onsubmit=function(event) {
    event.stopPropagation();
    event.preventDefault();
    let guessingWord=form.elements.wordToGuess.value;
    if (!guessingWord) {
        alert("there is no word to guess !")
    }
    if (guessingWord) {
        letters=guessingWord.toUpperCase().split("");
        form.elements.wordToGuess.value='';
        //     SetScene(letters); 
    }
}
alphabet.forEach(element => {
    element.addEventListener('click', function(event) {
        event.stopPropagation();
        clickedLetter=element.innerHTML;
        playTurn(clickedLetter);
    })
});

function playTurn(clickedLetter) {
    if (validate(clickedLetter)) {
        console.log(clickedLetter+" letter exists");
    }
    else{
        console.log(clickedLetter+"  it does not exist");
            //     lives=5;
    }
}
function validate(clickedLetter) {
    for (let i = 0; i < letters.length; i++) {
        if (clickedLetter===letters[i]) {
            return true;
            // let CurrentSpots=UpdateScene(letters[i],i);
            // setTimeout(() => {
            //     win=WiningCkeck(CurrentSpots);
            // }, 1000);
        }

    }
    // KeyboardUpdate(used,ClickedLetter);
    // losingCheck();
}
// function SetScene(letters) {
//     Scene.innerHTML="";
//     for (let i = 0; i < letters.length; i++) {
//         let spot=document.createElement('span')
//         spot.classList.add('spot');
//         spot.innerHTML=" _ ";
//         Scene.append(spot);
//         //lifes can be aaded here in update visual
//     }
//     // livesDisplay.innerHTML="you have 5 chances";
//     displayLive(lives);
// }



//  function WiningCkeck(spots) {
//     let check=[];
//     for (let i = 0; i < spots.length; i++) {
//         check[i]=spots[i].innerHTML;
//     }
//     if (!check.includes(" _ ")) {
//         alert("YES IT IS "+letters.join('')+" YOU WON!");
//         disableKeys();
//         win=true;
//         playAgain();
//         return win;
//     }
//  }

// function UpdateScene(letter,index) {
//     let CurrentSpots=document.querySelectorAll('.spot');
//     CurrentSpots[index].innerHTML=letter;
//     return CurrentSpots;
// }




// function KeyboardUpdate(state,button) {
//     button.disabled=true;
//     button.style.color='white';
//     if (state===true) {
//         console.log("it was used");
//         button.style.backgroundColor='rgb(255, 118, 118)';
//     }
//     else{
//         console.log("it was not used");
//         button.style.backgroundColor='rgb(146, 124, 124)';
//         lives--;
//     }
// }
// function losingCheck() {
//     if (lives<=0) {
//         alert("GAME OVER ! it was "+word);
//         disableKeys();
//         playAgain();
//     }
//     displayLive(lives);
// }
// function disableKeys() {
//     for (let i = 0; i < alphabet.length; i++) {
//         alphabet[i].disabled=true;
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
// function displayLive(lives) {
//     for (let i = 0; i < lives; i--) {
//         let img=document.createElement("img");
//         img.src="heart.png";
//         livesDisplay.append(img);
//     }

// }