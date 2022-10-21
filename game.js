let alphabet=document.querySelectorAll(".letter");
const Scene=document.getElementById('game-container');
let word=prompt('Enter the word to guess: ').toUpperCase();
console.log(word);
let letters=word.split("");
let lives=0;
//who comes firrst below?
SetScene(letters);
function SetScene(letters) {
    for (let i = 0; i < letters.length; i++) {
        let spot=document.createElement('span').innerHTML=" _ ";
        Scene.append(spot);
    }
}
function UpdateScene(letter,index) {
    for (let i = 0; i < letters.length; i++) {
        if (i===index) {
            Scene.innerHTML+=letter;
            console.log(Scene);
        }
        else {
            Scene.innerHTML+="_";
        }
    }
}
function ValidateLetter() {
    const ClickedLetter=event.target.innerHTML;
    let used=false;
    for (let i = 0; i < letters.length; i++) {
        if (ClickedLetter===letters[i]) {
            console.log(letters[i]+' is used');
            used=true;
            UpdateScene(letters[i],i);
        }
    }
    KeyboardUpdate(used,event.target,);
}

function KeyboardUpdate(key,button) {
    button.disabled=true;
    button.style.color='white';
    if (key===true) {
        console.log("it was used");
        button.style.backgroundColor='rgb(255, 118, 118)';
        updateScene(button);
    }
    else{
        console.log("it was not used");
        button.style.backgroundColor='rgb(146, 124, 124)';
        lives++;
        console.log(lives);
    }
}
function updateScene(button) {
    Scene.innerHTML=(button.innerHTML)
}
