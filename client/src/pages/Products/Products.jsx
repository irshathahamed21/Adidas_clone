import React, {useEffect} from 'react'
import styled from "styled-components"
import {useSelector, useDispatch} from "react-redux"

import {setProducts} from "../../store/action"
import Product from '../../components/Product/Product'



const ProductContainer = styled.div`
      margin:10vw 5vw;
`

const ProductListing = styled.div`
    display:flex;
    flex-wrap:wrap;
    width: 100vw;
    margin-top:5vw;
    gap:2vw;

`
const text =styled.p`
    font-size:24px ;

`



function Products() {

  const products = useSelector((state) => (state.allProducts))
  
  const dispatch = useDispatch()


  const getAllProducts = async() => {
    const response = await fetch("http://localhost:3004/data")

    const resp = await response.json()

    console.log(resp)
    
    dispatch(setProducts(resp))


  }


  useEffect(() => {
      getAllProducts()
  },[])
  console.log(products)





  return (
    <>
    <ProductContainer>

   
    <h1>MENS </h1>
    <p>It doesn't get any more sports classic than our range of men's originals, featuring revamped versions of many of the designs that have made adidas synonymous with sports style the world over.</p>
    

    <ProductListing>
    
        <Product/>
     

    </ProductListing>
    

    </ProductContainer>
    
    
    </>
  )
}

export default Products