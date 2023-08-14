

import React from 'react'

import "./lista.css"

function lista({usuarios}) {


        

  return (
    <div style={{display:'flex', justifyContent:"center",flexDirection:"column",alignContent:"center"}}>
        <h3>Usuarios: {usuarios.length}</h3>
        
            <ul style={{display:'flex', justifyContent:"center",flexDirection:"column",alignContent:"center", }}>
                {usuarios.map((nome,i)=>{return( <li key={i}>{nome}</li> )})}
            </ul>
    

    </div>
  )
}

export default lista