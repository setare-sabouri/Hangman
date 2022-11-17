export function disableKeys(alphabet) {
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i].disabled = true;
    }
}

export function enableleKeys(alphabet) {
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i].disabled = false;
        alphabet[i].style.backgroundColor = '';
        alphabet[i].style.color = '';
    }
}

export function updateKeyboard(button, state) {
    button.disabled = true;
    button.style.color = 'white'; //add class deactive instead
    // add extra css later here & do classadd instead
    if (state === true) {
        button.style.backgroundColor = 'rgb(255, 118, 118)';
    } else {
        button.style.backgroundColor = 'rgb(146, 124, 124)';
    }
}