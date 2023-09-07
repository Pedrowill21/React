import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Form from './components/Form'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      
      <Routes>
        <Route path='/form' element={<Form/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
