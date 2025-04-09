import React from 'react';
import useAlphabet from '../../Stores/useAlphabet';
import './SinglePlayer.scss';

const WordDisplay = () => {
  const word = useAlphabet((state) => state.word);
  const guessedLetters = useAlphabet((state) => state.guessedLetters || []);

  if (!word) return null;

  const display = word.split('').map((char, idx) =>
    guessedLetters.includes(char) ? (
      <span key={idx} className='letter'>{char}</span>
    ) : (
      <span key={idx} className='letter'>_</span>
    )
  );

  return <div className='word-display'>{display}</div>;
};

export default WordDisplay;
