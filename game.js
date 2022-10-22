let form=document.getElementById("input-form");
let wordInput=document.getElementById("word-input");
let alphabet=document.querySelectorAll('.letter');
const Scene=document.getElementById('game-container');
let livesDisplay=document.getElementById('display-life');

// let word=prompt('Player 1 --> Enter the word to guess: ').toUpperCase();
function play(params) {
    let word=wordInput.value;
    if (word) {
        let letters=word.toUpperCase().split("");
        let lives=5;
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


function UpdateScene(letter,index) {
    let CurrentScene=document.querySelectorAll('.spot');
    CurrentScene[index].innerHTML=letter;
    //  here you neew to check if currentstate includes "_ " or not 
    // if (CurrentScene.includes(" _ ")) {
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
        for (let i = 0; i < alphabet.length; i++) {
            alphabet[i].disabled=true;
        }
    }
    livesDisplay.innerHTML=lives;
    
}
//use confirm too go for a new game