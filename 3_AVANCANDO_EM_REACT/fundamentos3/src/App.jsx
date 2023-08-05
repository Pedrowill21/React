import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageData from '../components/ManageData'
import ListRender from '../components/ListaRender'

function App() {

  let listaDeNome= ["pedro","lucio","davi","luuis","matheus","luisa","bruno"];

  return (
    <div>
      <img src="/jordan-andrews-tgDl3D1KPrQ-unsplash.jpg" alt="garoto"  style={{width:"400px"}}/>
      <ManageData/>
      <ListRender list={listaDeNome}/>
    </div>
  )
}

export default App
