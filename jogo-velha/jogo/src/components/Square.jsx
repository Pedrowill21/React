import style from "./Square.module.css";
import { useState } from "react";

const Square = ({id, circle:option, playing}) => {
const [clicked,setClicked] = useState(false);
const [circle, setCircle] = useState()

    function teste(){
        if(clicked == false){
            setClicked(true)
            playing(id)
            setCircle(option)
        }else{
            return
        }
    }


  return (
    <div className={style.Square} onClick={()=> teste()} >
       {circle == false && ( <img src="../../public/circulo.png" alt="x" />)}
       {circle  && ( <img src="../../public/excluir.png" alt="x" />)}

    </div>
  )
}

export default Square