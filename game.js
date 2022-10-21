let alphabet=document.querySelectorAll(".letter");
const Scene=document.getElementById('game-container');
let livesDisplay=document.getElementById('display-life');
let word=prompt('Enter the word to guess: ').toUpperCase();
console.log(word);
let letters=word.split("");
let lives=5;

//who comes firrst below?
function SetScene(letters) {
    for (let i = 0; i < letters.length; i++) {
        let spot=document.createElement('span');
        spot.classList.add('spot');
        spot.innerHTML=" _ ";
        Scene.append(spot);
    }
    livesDisplay.innerHTML="you have 5 chances";
}
SetScene(letters);

function UpdateScene(letter,index) {
    let CurrentScene=document.querySelectorAll('.spot');
    console.dir(CurrentScene[0].innerHTML+"   ddddd");
    CurrentScene[index].innerHTML=letter;
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