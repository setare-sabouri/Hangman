import React from 'react';
import useAlphabet from '../../../Stores/useAlphabet';
import '../../SinglePlayer/SinglePlayer.scss';
import './WordDisplay.scss'


const WordDisplay = () => {
  const { word, guessedLetters } = useAlphabet((state) => state);

  if (!word) return null;

  const display = word.split('').map((char, idx) =>

    guessedLetters.includes(char) ?
      (<span key={idx} className='letter'>{char}</span>)
      :
      (<span key={idx} className='letter'>_</span>)
  );


  return <div className='word-display'>{display}</div>;
};

export default WordDisplay;
