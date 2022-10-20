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
    KeyboardLoader(used);
}

function KeyboardLoader(key) {
    if (key===true) {
        console.log("it was used");
    }
    else{
        console.log("it was not used");
    }
}

