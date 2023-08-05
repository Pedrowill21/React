



const ListRender = (props)=>{
    return(
        props.list.map((nome)=>(
            <h2>{nome}</h2>
        ))
    )

}



export default ListRender