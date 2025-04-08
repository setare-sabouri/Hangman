import React from 'react';
import useAlphabet from '../../Stores/useAlphabet';

const KeyPad = () => {
  const letters = useAlphabet((state) => state.letters); // fixed typo

  return (
    <div className='keypad'>
      {letters.map((letter) => (
        <button key={letter} className='letter'>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default KeyPad;
