


const Challenge = ()=>{

    const n1 = 10;
    const n2 = 30;

    return (
        <div>
            <h1>A soma de {n1} mais {n2}</h1>
            <button onClick={()=>console.log(n1 + n2)} >somar</button>
        </div>
    )
}

export default Challenge;

