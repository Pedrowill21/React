import { useEffect, useState } from "react"
import style from "./board.module.css"
import Square from './Square'

const Board = () => {

  const [p1,setP1] = useState([]);
  const [p2,setP2] = useState([]);
  const [turn,setTurn] = useState(true);
  const [winner, setWinner] = useState({})
  
  const positionsWinsGame = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  
    [1, 5, 9],
    [3, 5, 7]
  ]


function checkWin(){
  const plays = {
    player1:p1,
    player2:p2,

  }
  console.log(plays)"
   console.log(playAlreadyWin(plays))
}

  
const playAlreadyWin = (data) => {
  const result = {
    play: '',
    position: [0],
    win: false
  }

  for (const [key, value] of Object.entries(data)) {
    positionsWinsGame.forEach((win) => {
      if (win.every((item) => value.includes(item))) {
        result.play = key
        result.position = win
        result.win = true
      }
    })
  }

  return result
}


 
  

  const playing = (square)=>{
      if(turn){
        setP1([...p1,square])
        setTurn(false)
      }else{
        setP2([...p2,square])
        setTurn(true)
      }
  }

  useEffect(()=>{
      checkWin()
  },[p1,p2])


  return (
    <div className={style.board}>
      <div>
       
      </div>
        
       <Square id={1} circle={turn} playing={playing}/>
       <Square id={2} circle={turn} playing={playing}/>
       <Square id={3} circle={turn} playing={playing}/>
       <Square id={4} circle={turn} playing={playing}/>
       <Square id={5} circle={turn} playing={playing}/>
       <Square id={6} circle={turn} playing={playing}/>
       <Square id={7} circle={turn} playing={playing}/>
       <Square id={8} circle={turn} playing={playing}/>
       <Square id={9} circle={turn} playing={playing}/>
 
        
    </div>
  )
}

export default Board