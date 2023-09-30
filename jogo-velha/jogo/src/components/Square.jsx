import style from "./Square.module.css";
import { useEffect, useState } from "react";

const Square = ({id, circle:option, playing, clean}) => {
const [clicked,setClicked] = useState(false);
const [circle, setCircle] = useState()

    function teste(){

        if(!clicked){
            setClicked(true)
            playing(id)
            setCircle(option)
        }

    }


   useEffect(()=>{
  
      setCircle()
      setClicked(false)
    
   },[clean])

  return (
    <div className={style.Square} onClick={()=> teste()} >
      {clicked &&(
         circle ? ( <img src="../../public/circulo.png" alt="x" />) : ( <img src="../../public/excluir.png" alt="x" />)
      )}

    </div>
  )
}

export default Square