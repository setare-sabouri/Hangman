import React, { use } from 'react'
import useAlphabet from '../../../Stores/useAlphabet'
import './RestartLay.scss'
const RestartLay = () => {
  const resetGame = useAlphabet((state) => (state.resetGame))
  return (

    <div className='restart-container'>
      <button className='restart' onClick={resetGame} >
        Play Again
      </button>
    </div>
  )
}

export default RestartLay
