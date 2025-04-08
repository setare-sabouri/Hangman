import React, { useEffect } from 'react'
import './SinglePlayer.scss'
import useScene from '../../Stores/useScene'
import { getWord } from '../../API';
import useGame from '../../Stores/useGame';
import Hearts from '../Lives/Heart';
import KeyPad from './keyPad';
const SinglePlayer = () => {

  const { setScene } = useScene((state) => state);
  const { setWord, setWordMeaning } = useGame((state) => state);
  const { word } = useGame((state) => state);
  const { wordMeaning } = useGame((state) => state);
  const { lives } = useGame((state) => state);
  const { displaylives } = useGame((state) => state);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await getWord();
        setWord(response);
        setWordMeaning(response.meaning[0].shortdef[0]);
      } catch (error) {
        console.error('Error fetching word:', error);
      }
    };

    fetchWord();
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
        <h1 onClick={() => {

          displaylives(lives - 1)
        }} >Hang Man</h1>
        <p >
          Hint : {wordMeaning}
        </p>
        <KeyPad />
      </div>
    </>
  )
}

export default SinglePlayer
