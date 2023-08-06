

import "./GameOver.css"
import React from 'react'

function GameOver({retry}) {
  return (
    <div>
      <h1>Game Over</h1>
        <button onClick={retry}>Tentar de novo</button>
    </div>
  )
}

export default GameOver