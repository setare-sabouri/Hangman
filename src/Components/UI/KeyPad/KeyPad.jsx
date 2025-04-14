import React from 'react';
import useAlphabet from '../../../Stores/useAlphabet';
import './Keypad.scss'
import useGame from '../../../Stores/useGame';


const KeyPad = () => {
  const { guessedLetters, addGuess, letters, word, displaylives, lives } = useAlphabet((state) => state)
  const isMobile = useGame((state) => state.isMobile);

  const CheckLetter = (letter) => {
    console.log(word)
    if (!word.includes(letter)) {
      displaylives(lives - 1);
    }
    addGuess(letter)
  }

  return (
    <div className={`keypad ${isMobile ? 'mobile' : ' '}`}>
      {letters.map((letter) => (
        <button
          key={letter}
          className={`${isMobile ? 'mobile' : ' '}  letter ${guessedLetters.includes(letter) ? 'disabled' : ''}`}
          onClick={() => CheckLetter(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default KeyPad;
