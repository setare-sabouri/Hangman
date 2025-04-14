import React from 'react';
import useAlphabet from '../../../Stores/useAlphabet';
import '../../SinglePlayer/SinglePlayer.scss';
import './WordDisplay.scss'
import useGame from '../../../Stores/useGame';

const WordDisplay = () => {
  const { word, guessedLetters } = useAlphabet((state) => state);
  const isMobile = useGame((state) => state.isMobile);
  if (!word) return null;

  const display = word.split('').map((char, idx) =>

    guessedLetters.includes(char) ?
      (<span key={idx} className={`letter ${isMobile ? 'mobile' : ''}`}>{char}</span>)
      :
      (<span key={idx} className={`letter ${isMobile ? 'mobile' : ''}`}>_</span>)
  );


  return <div className={`word-display ${isMobile ? 'mobile' : ''}`}>{display}</div>;
};

export default WordDisplay;
