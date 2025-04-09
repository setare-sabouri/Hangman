import React, { useEffect } from 'react'
import './SinglePlayer.scss'
import useScene from '../../Stores/useScene'
import { getWord } from '../../API';
import useGame from '../../Stores/useGame';
import useAlphabet from '../../Stores/useAlphabet';
import Hearts from '../Lives/Heart';
import KeyPad from './keyPad';
import WordDisplay from './WordDisplay';
import RestartLay from '../RestartLay';


const SinglePlayer = () => {

  const { setScene } = useScene((state) => state);
  const { wordMeaning,word,setWord,setWordMeaning,disableAllLetters,guessedLetters,hasWon } = useAlphabet((state) => state);
  const { lives,resetLives } = useGame((state) => state);

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

    const unSubscribeLose= useGame.subscribe(
      (state)=>state.lives,
      (lives)=>{
          if(lives<=0){
            console.log("oppppps lives are done now",lives)
            disableAllLetters()
          }
          else return
         
      }
      )

      
      const unSubscribeWon= useAlphabet.subscribe(
        (state)=>state.hasWon,
        (hasWon)=>{
            if(hasWon){
              console.log("🎉 YOU WON!");
              resetLives()
      
              disableAllLetters();
              console.log(lives)
            }
            else return
           
        }
        )

    

      return()=>{
        unSubscribeLose()
        unSubscribeWon()
      }
  }, []);

  useEffect(() => {
    if (word && wordMeaning) {
      setScene(
        <Hearts />
      );
      return () => setScene(null);
    }
  }, [word])

  return (

    <>
      <div className='single-player-ui'>
        <h1>Hang Man</h1>
        <p >
          Hint : {wordMeaning}
        </p>
        <KeyPad />
        <WordDisplay/>
       {(lives<=0 || hasWon) &&  <RestartLay/>}
      </div>
    </>
  )
}

export default SinglePlayer
