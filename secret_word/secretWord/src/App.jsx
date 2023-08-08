
import './App.css'


import StartScreen from './components/StartScreen'


import { useCallback, useEffect, useState } from 'react'


import {wordList} from "./data/words"
import Game from './components/Game'
import GameOver from './components/GameOver'

const stage = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"}

]

function App() {
  const [gameStage,setGameStage] = useState(stage[0].name)
  const [words] = useState(wordList)

  const [pickedWord,setPickedWord] = useState("")
  const [pickedCategory,setPickedCategory] = useState("")
  const [letter,setLetters] = useState([])


  const pickedWordAndCategory = ()=>{
    const categories = Object.keys(words)
    const category =  categories[Math.floor(Math.random() * Object.keys(categories).length)]
    

    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    return {word, category}
  }

  
  const startGame = ()=>{
    
    const {word, category} = pickedWordAndCategory();
    
    



    setGameStage(stage[1].name)
  }

  const verifyLetter = ()=>{
    setGameStage(stage[2].name)
  }
  
  const retry = ()=>{
    setGameStage(stage[0].name)
  }

  return (
    <>
     <div className="app">
      {gameStage ===  "start" && <StartScreen startGame={startGame}/> }
      {gameStage ===  "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage ===  "end" && <GameOver retry={retry}/> }
     </div>
    </>
  )
}

export default App
