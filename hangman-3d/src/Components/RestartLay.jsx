import React, { use } from 'react'
import useGame from '../Stores/useGame'
const RestartLay = () => {
    const resetGame =useGame((state)=>(state.resetGame))
  return (
    <div className='restart' onClick={resetGame}>
      <h1>
      Restart
      </h1>
    </div>
  )
}

export default RestartLay
