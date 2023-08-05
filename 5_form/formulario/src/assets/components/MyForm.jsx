

import "./MyForm.css"



import React from 'react'

const MyForm = () => {
  return (
    <div>
        <form>
            <div>

            <label htmlFor="name">Nome:</label>
            <input type="text" placeholder='Digite seu nome' name='name' />

            </div>
                <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm