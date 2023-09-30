import style from "./Modal.module.css"

const Modal = ({winner, retry}) => {
  return (
    <div className={style.container}>
        <div className={style.modal}>
            <h1>{winner}  Ganhou!</h1>
            <h2>Parabéns {winner}, você dominou completamente o jogo!!!</h2>
            <button onClick={()=>{
              retry()
            }}>Jogar Novamente</button>
        </div>
    </div>
  )
}

export default Modal