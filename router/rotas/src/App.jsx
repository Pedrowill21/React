import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/HOME.JSX'
import About from './pages/About'
import NavBar from '../components/NavBar'
import Products from './pages/Products'

function App() {



  return (
   <div className='app'>
    <h1>React Router</h1>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products/:id' element={<Products/>}  />

    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
