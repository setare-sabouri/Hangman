import React from 'react';
import useAlphabet from '../../Stores/useAlphabet';
import useGame from '../../Stores/useGame'
const KeyPad = () => {
  const { guessedLetters, addGuess, letters, word } = useAlphabet((state) => state)
  const { lives, displaylives } = useGame()
  const CheckLetter = (letter) => {
    console.log(word)
    console.log(letter)

    if (!word.includes(letter)) {
      displaylives();
      console.log("not a part of it ")
    }

    addGuess(letter)
  }

  return (
    <div className='keypad'>
      {letters.map((letter) => (
        <button
          key={letter}
          className={`letter ${guessedLetters.includes(letter) ? 'disabled' : ''}`}
          onClick={() => CheckLetter(letter)}

        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default KeyPad;
