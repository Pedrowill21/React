import { useEffect, useState } from "react"
import style from "./board.module.css"
import Square from './Square'
import Modal from "./Modal";

const Board = () => {

  const [p1,setP1] = useState([]);
  const [p2,setP2] = useState([]);
  const [turn,setTurn] = useState(true);
  const [winner, setWinner] = useState({})
  const [clean,setClean] = useState(false)
  
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
 
  const result = playAlreadyWin(plays);

  if(result.win){
    setWinner(result)
  }

  if(p1.length + p2.length == 9 && result.win == false){
    alert("gamer over")
    retry()
  }


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
    if(p1.length >= 3 || p2.length >= 3){
      checkWin()
    }else{
      return
    }
     
  },[p1,p2])


  const retry = ()=>{
   setP1([])
   setP2([])
   setWinner({})
   setClean(!clean)
  }

  return (
    <div className={style.board}>
      <div className={style.info}>

        <div>
          <h2>Próxima jogada {turn ? "Bolinha":"X"}</h2>
        </div>

        {winner.win && (<Modal winner={winner.play == "player1" ? "Bolinha" : "X" } retry={retry} />)}




      
      </div>


        <div className={style.container_square}>
            <Square id={1} circle={turn} playing={playing} clean={clean}/>
            <Square id={2} circle={turn} playing={playing} clean={clean}/>
            <Square id={3} circle={turn} playing={playing} clean={clean}/>
            <Square id={4} circle={turn} playing={playing} clean={clean}/>
            <Square id={5} circle={turn} playing={playing} clean={clean}/>
            <Square id={6} circle={turn} playing={playing} clean={clean}/>
            <Square id={7} circle={turn} playing={playing} clean={clean}/>
            <Square id={8} circle={turn} playing={playing} clean={clean}/>
            <Square id={9} circle={turn} playing={playing} clean={clean}/>
        </div>
   
 
        
    </div>
  )
}

export default Board