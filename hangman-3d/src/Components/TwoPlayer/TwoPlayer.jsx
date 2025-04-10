import React, { useEffect, useState } from 'react'
import useScene from '../../Stores/useScene'
import Hearts from '../Heart/Heart'
import './TwoPlayer.scss'
import useAlphabet from '../../Stores/useAlphabet'
import KeyPad from '../UI/KeyPad/KeyPad'
import WordDisplay from '../UI/WordDisplay/WordDisplay'
import RestartLay from '../UI/RestartLay/RestartLay'

const TwoPlayer = () => {
  const { setScene } = useScene((state) => state);
  const { wordMeaning, setWord, setWordMeaning, disableAllLetters, hasWon, resetSeed, lives } = useAlphabet((state) => state);
  const [wordInput, setWordInput] = useState('');
  const [hintInput, setHintInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  
  useEffect(() => {
    setScene(<Hearts />);

    const unsubscribeLose = useAlphabet.subscribe(
      (state) => state.lives,
      (lives) => {
        if (lives <= 0) {
          console.log("oppps, You Lost ")
          disableAllLetters()
        }
      }
    )
    const unSubscribeWon = useAlphabet.subscribe(
      (state) => state.hasWon,
      (hasWon) => {
        if (hasWon) {
          console.log("🎉 YOU WON!");
          disableAllLetters();
        }
      }
    )

    const unSubscribeResetForm = useAlphabet.subscribe(
      (state) => state.resetSeed,
      () => {
       setSubmitted(false)
      }
    )

    return () => {
      unsubscribeLose()
      unSubscribeWon()
      unSubscribeResetForm()
      setScene(null);
    }


  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (wordInput.trim() !== '') {
      setWord(wordInput.toUpperCase());
      setWordMeaning(hintInput || 'No hint :)'); // set empty string if no hint
      setSubmitted(true);
    }
  };

  return (
    <div className='Two-Player-ui'>
      {!submitted ? (
        <form onSubmit={handleSubmit} className='word-form'>
          <label htmlFor="custom-word">Enter a word for your opponent *</label>
          <input
            id="custom-word"
            type="text"
            // value={wordInput}
            onChange={(e) => setWordInput(e.target.value)}
            required
            autoComplete="off"
          />

          <label htmlFor="hint">Enter a Hint (description)</label>
          <input
            id="hint"
            type="text"
            // value={hintInput}
            onChange={(e) => setHintInput(e.target.value)}
            placeholder="(Optional)"
            autoComplete="off"
          />

          <button type="submit">Start Game</button>
        </form>
      ) : (
    <>
        <p>Game Started! 🎮 Good luck 👀</p>
        <p>{wordMeaning}</p>
        <KeyPad/>
        <WordDisplay/>
        {(lives <= 0 || hasWon) && <RestartLay />}

    </>
      )}
    </div>
  )
}

export default TwoPlayer
