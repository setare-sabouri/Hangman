import React from 'react'
import useScene from '../../Stores/useScene'
import { useEffect } from 'react'
import Hearts from '../Heart/Heart'
import './TwoPlayer.scss'
const TwoPlayer = () => {


  const { setScene } = useScene((state) => state);



  useEffect(() => {
    if (true) {
      setScene(
        <Hearts />
      );
      return () => setScene(null);
    }
  }, [])

  return (
    <div className='Two-Player-ui'>

      <h1>Hang Man</h1>
      <p >
        Hint :
      </p>


    </div>
  )
}

export default TwoPlayer
