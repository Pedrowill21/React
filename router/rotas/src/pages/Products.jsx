import React from 'react'

import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Products = () => {
    const {id}= useParams()
    const url = "http://localhost:3000/products/" + id;
    const {data:products, loading, error} = useFetch(url)



  return (
    <>
    <p> ID do |Produto : {id}</p>
    {error && <p>ocorreu um erro</p>}
    {loading && <p>Carregando</p>}
    {products && (
      <div>
        <h1>{products.name}</h1>
        <p>R$: {products.price}</p>
      </div>
    )}
    </>
  )
}

export default Products