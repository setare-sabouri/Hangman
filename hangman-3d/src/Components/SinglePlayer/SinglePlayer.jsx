import React, { useEffect } from 'react'
import './SinglePlayer.scss'
import useScene from '../../Stores/useScene'
import { Text } from '@react-three/drei';
import { getWord } from '../../API';
import useGame from '../../Stores/useGame';
import Hearts from '../Lives/Heart';

const SinglePlayer = () => {
  // const [word, setWord] = useState(null);
  const { setScene } = useScene((state) => state);

  const { setWord, setWordMeaning } = useGame((state) => state);
  const { word } = useGame((state) => state);
  const { wordMeaning } = useGame((state) => state);

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
  if(word && wordMeaning) {
    console.log(wordMeaning);
    setScene(
      <Hearts/>
    );
    return () => setScene(null);
  }
  }, [word])

  return (

    <>
      <div className='single-player-ui'>
        <h1>Hang Man</h1>
        <p>
          Hint : {wordMeaning}
        </p>
      </div>
   // a hint of the word which comes from API
    //display alphabet 
    // a small canvas to show 3D lives 
    </>
  )
}

export default SinglePlayer
