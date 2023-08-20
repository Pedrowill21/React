
import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/" >Home</Link>
        <br />
        <Link to="/about" >Aboute</Link>


    </nav>
  )
}

export default NavBar