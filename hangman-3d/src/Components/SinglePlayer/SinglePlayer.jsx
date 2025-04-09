import React, { useEffect } from 'react'
import './SinglePlayer.scss'
import useScene from '../../Stores/useScene'
import { getWord } from '../../API';
import useAlphabet from '../../Stores/useAlphabet';
import Hearts from '../Heart/Heart';
import KeyPad from '../UI/KeyPad/KeyPad';
import WordDisplay from '../UI/WordDisplay/WordDisplay';
import RestartLay from '../UI/RestartLay/RestartLay'


const SinglePlayer = () => {
  const { setScene } = useScene((state) => state);
  const { wordMeaning,setWord,setWordMeaning,disableAllLetters,hasWon,resetSeed,lives } = useAlphabet((state) => state);

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

    const unsubscribeLose= useAlphabet.subscribe(
      (state)=>state.lives,
      (lives)=>{
          if(lives<=0){
            console.log("oppps, You Lost ")
            disableAllLetters()
          }         
      }
      )

      const unSubscribeWon= useAlphabet.subscribe(
        (state)=>state.hasWon,
        (hasWon)=>{
            if(hasWon){
              console.log("🎉 YOU WON!");
              disableAllLetters();
            }
        }
        )

        setScene(
          <Hearts />
        );

      return()=>{
        unsubscribeLose()
        unSubscribeWon()
        setScene(null);
      }
  }, [resetSeed]);

 

  return (
      <div className='single-player-ui'>
        <p> Hint : {wordMeaning} </p>
        <KeyPad />
        <WordDisplay/>
       {(lives<=0 || hasWon) &&  <RestartLay/>}
      </div>
  )
}

export default SinglePlayer
