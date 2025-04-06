import React from 'react'
import { Link } from 'react-router-dom'

const GamePage = () => {
  return (
    <div>
    <h1>Game Page with 2 options</h1>
    <Link to="/game/twoPlayer">
      <button>Two Player Game</button>
    </Link>
    <Link to="/game/onePlayer">
      <button>One Player Game</button>
    </Link>
    </div>
  )
}

export default GamePage
