

import { useState } from "react"
import "./form.css"

const Form = ({recuperarValores})=>{

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')


    return(
        <div onSubmit={(e)=>{
            
            e.preventDefault()
            recuperarValores(nome,email)
            setEmail('')
            setNome('')
            
            
            }}>

            <form>
                <div>
                    <label htmlFor="nome"></label>
                    <input type="text" id="nome" placeholder="Nome" value={nome} onChange={(e)=>{setNome(e.target.value)}} />
                </div>

                <div>
                    <label htmlFor="email"></label>
                    <input type="text" id="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>

                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>

        </div>
    )
}

export default Form