import React, { useEffect } from 'react'
import './SinglePlayer.scss'
import useScene from '../../Stores/useScene'
import { getWord } from '../../API';
import useAlphabet from '../../Stores/useAlphabet';
import Hearts from '../Heart/Heart';
import KeyPad from '../UI/KeyPad/KeyPad';
import WordDisplay from '../UI/WordDisplay/WordDisplay';
import RestartLay from '../UI/RestartLay/RestartLay'
import useGame from '../../Stores/useGame';

const SinglePlayer = () => {
  const { setScene } = useScene((state) => state);
  const { wordMeaning, setWord, setWordMeaning, disableAllLetters, hasWon, resetSeed, lives } = useAlphabet((state) => state);
  const { isMobile, setIsMobile } = useGame((state) => state)


  console.log(isMobile)


  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await getWord();
        setWord(response.word[0].toUpperCase());
        setWordMeaning(response.meaning[0].shortdef[0]);
      } catch (error) {
        console.error('Error fetching word:', error);
      }
    };
    fetchWord();

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

    setScene(
      <Hearts />
    );
    setIsMobile(isMobile);

    return () => {
      unsubscribeLose()
      unSubscribeWon()
      setScene(null);
    }
  }, [resetSeed]);



  return (
    <div className={`single-player-ui ${isMobile ? 'mobile' : ' '}`}>
      <p> Hint : {wordMeaning} </p>
      <KeyPad />
      <WordDisplay />
      {(lives <= 0 || hasWon) && <RestartLay />}
    </div>
  )
}

export default SinglePlayer
