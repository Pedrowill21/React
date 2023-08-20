import { useState,useEffect,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from "../components/form"
import Lista from '../components/lista'

function App() {
  let [usuarios,setUsuarios] = useState([])

 const recuperarValores = (n,e)=>{

    if(!usuarios.includes(n) && n != ""){
      setUsuarios([...usuarios,n])
    }

    if(usuarios.length == 10){
      alert("memoria cheia")
    }
    

  }

  
console.log(fetch("./data/produtos.js"))

  return (
    <div className='app'>
      <h1>Teste</h1>
      <Formulario recuperarValores={recuperarValores}/>
      
    <Lista usuarios={usuarios}/>

      
    </div>
  )
}

export default App
