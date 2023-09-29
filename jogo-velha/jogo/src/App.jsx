import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game"



function App() {


  return (
      <div className='app'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>}/>

        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
