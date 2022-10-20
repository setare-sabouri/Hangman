let alphabet=document.querySelectorAll(".letter");
let word="HYPER";
let letters=word.split("");

function ValidateLetter() {
    const ClickedLetter=event.target.innerHTML;
    let used=false;
    for (let i = 0; i < letters.length; i++) {
        if (ClickedLetter===letters[i]) {
            console.log(letters[i]+' ok');
            used=true;
        }
    }
    KeyboardUpdate(used,event.target);
}

function KeyboardUpdate(key,button) {
    if (key===true) {
        console.log("it was used");
        button.style.backgroundColor='rgb(255, 118, 118)';
        console.log(button);
    }
    else{
        console.log("it was not used");
        button.style.backgroundColor='rgb(146, 124, 124)';
    }
}

