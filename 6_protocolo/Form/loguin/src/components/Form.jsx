import React, { useEffect, useState } from 'react';
import "./Form.css"

const Form = () => {
  const [name,setNome] = useState('')
  const [idade,setIdade] = useState('')
  const [usarios, setUsuarios] = useState(null);


  useEffect(()=>{
    async function get(){
    const dados = await fetch("http://localhost:3000/products");
    const req = await dados.json()
    setUsuarios(req)
    console.log("ok")
  }
  get()
  },[])

 const handleSubmit = async (e)=>{
  e.preventDefault()
  
  const user = {
    name,
    idade
  }
  const url = "http://localhost:3000/products";

  const res = await fetch(url, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)

  })

  const req = await res.json()
  setUsuarios((prevUsuarios)=> [...prevUsuarios, req])
  setIdade("")
  setNome("")
 }

  return (
    <div className='container'>
      <div className='text'>
            <h1>Seja Bem vindo!</h1>
      </div>
      <div className='loguinForm'>
            <form className='form' onSubmit={(e)=> handleSubmit(e)}>
              <input type="text" name='nome' placeholder='Digite seu Nome' value={name} onChange={(e)=>{setNome(e.target.value)}}/>
              <input type="number" name='idade' placeholder='Digite sua idade' value={idade}  onChange={(e)=>{setIdade(e.target.value)}}/>
              <button type='submit'>Concluir</button>
            </form>
      </div>
      <div>
        {usarios != null && (

          <ul>
                  { usarios.map((nome, i)=>{
            return <li key={i}>{`${nome.name} - ${nome.idade}`}</li>
          })}
          </ul>
         
        )}
      </div>
    </div>
  )
}

export default Form