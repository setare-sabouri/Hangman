let form=document.getElementById("input-form");
let wordInput=document.getElementById("word-input");
let alphabet=document.querySelectorAll('.letter');
const Scene=document.getElementById('game-container');
let livesDisplay=document.getElementById('display-life');
let letters=[];
let lives=0;
// let word=prompt('Player 1 --> Enter the word to guess: ').toUpperCase();
function play(params) {
    let word=wordInput.value;
    if (word) {
        letters=word.toUpperCase().split("");
        lives=5;
        // form.reset();
        SetScene(letters);  
    }
    else{
        alert("Player 1 enter the word to guess");
    }
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
}
 function WiningCkeck(spots) {
    let check=[];
    for (let i = 0; i < spots.length; i++) {
        check[i]=spots[i].innerHTML
    }
    if (!check.includes(" _ ")) {
        console.log("YES IT IS "+letters.join('')+" YOU WON!");
        disableKeys();
    }
 }

function UpdateScene(letter,index) {
    let CurrentSpots=document.querySelectorAll('.spot');
    CurrentSpots[index].innerHTML=letter;
    WiningCkeck(CurrentSpots);
    // if (CurrentSpots.include(" _ ")) {
    //     alert("YOU WIN");
    //     alphabet[i].disabled=true;
    // }
}

function ValidateLetter() {
    const ClickedLetter=event.target.innerHTML;
    let used=false;
    for (let i = 0; i < letters.length; i++) {
        if (ClickedLetter===letters[i]) {
            used=true;
            UpdateScene(letters[i],i);
        }
    }
    KeyboardUpdate(used,event.target);
    checkState();
}

function KeyboardUpdate(key,button) {
    button.disabled=true;
    button.style.color='white';
    if (key===true) {
        console.log("it was used");
        button.style.backgroundColor='rgb(255, 118, 118)';
    }
    else{
        console.log("it was not used");
        button.style.backgroundColor='rgb(146, 124, 124)';
        lives--;
    }
}
function checkState() {
    
    if (lives<=0) {
        alert("GAME OVER");
        disableKeys();
    }
    livesDisplay.innerHTML=lives;
    
}
function disableKeys() {
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i].disabled=true;
    }
}
//use confirm too go for a new game