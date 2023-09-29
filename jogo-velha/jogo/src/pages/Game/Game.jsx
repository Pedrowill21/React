import style from "./Game.module.css"
import Board from "../../components/Board"

const Game = () => {
  return (
    <div className={style.game}>
      <div>
        <h1>Mostre sua estratégia!</h1>
      </div>

      <div>
      <Board/>
      </div>



    </div>
  )
}

export default Game