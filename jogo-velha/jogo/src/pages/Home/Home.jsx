import {Link} from "react-router-dom";
import style from "./Home.module.css"

const Home = () => {
  return (
    <div>
          <div>
            <h1>Jogo da velha</h1>
            <h2><strong>"Desafie sua mente e habilidade estratégica no Jogo da Velha: O Clássico que Nunca Sai de Moda!"</strong></h2>
          </div>
          <div className={style.img_container}>
              <img src="../../public/destaque.png" alt="game"/>
          </div>
          <div>
            <Link to="/game">Jogar</Link>
          </div>

          
          
    </div>
  )
}

export default Home