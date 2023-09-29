import { useEffect, useState } from "react"
import style from "./board.module.css"
import Square from './Square'

const Board = () => {

  const [p1,setP1] = useState([]);
  const [p2,setP2] = useState([]);
  const [turn,setTurn] = useState(true)
  const [win,setWin] = useState(false)
  const winCondition = [
    
    "1,5,9",
    "1,4,7",
    "1,2,3"
  ];
  

  const playing =(square)=>{
      if(turn){
        console.log(square)
        setP1([...p1,square])
        console.log(p1)
        setTurn(false)
      }else{
        setP2([...p2,square])
        console.log(p2)
        setTurn(true)
      }

    


  }

  useEffect(()=>{
    console.log("useEffect")
    console.log(p1)
  },[p1])





  return (
    <div className={style.board}>
      <div>
        {win && (
          <h1>Alguém venceu!</h1>
        )}
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