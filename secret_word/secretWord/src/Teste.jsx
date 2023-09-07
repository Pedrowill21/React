import React from 'react'
import {wordList} from "./data/words"

const Teste = () => {
  const words = wordList;

  function render(palavra){
    console.log(`render, palavra que chega : ${palavra}`)
    palavra = palavra.split('')
    console.log(`render, palavra depois do split : ${palavra}`)
    palavra.map((l)=>{
      console.log(l)
      return <li>{l},</li>
    })
  }
 
  function pegarPalavraECategoria(){
    const lista = Object.keys(words)
    const categoriaAleatoria = lista[Math.floor(Math.random() * Object.keys(lista).length)] 
    console.log(`minha tentativa de pegar uma categoria : ${categoriaAleatoria}`)
    const palavraAleatoria = words[categoriaAleatoria][Math.floor(Math.random() * words[categoriaAleatoria].length)]
    console.log(`tentativa de palavra aleatoria resultou em : ${palavraAleatoria}`)
    return palavraAleatoria
  }


  return (
    <div>
      <h1>tentando Renderizar as letras</h1>
      <div>
        <ul>

          {render(pegarPalavraECategoria())}
        </ul>
      </div>

    </div>
  )
}

export default Teste