import React, {useEffect} from 'react'
import styled from "styled-components"
import {useSelector, useDispatch} from "react-redux"

import {setProducts} from "../../store/action"
import Product from '../../components/Product/Product'



const ProductContainer = styled.div`
     
      width:100vw;
      margin-top:5vw;
     
      // border:2px solid green;

`

const ProductHeading = styled.div`
    display:flex;
    justify-content:space-between;
    & h1 {
      margin-left:2.5vw;
    }

`
const FilterContainer = styled.div`

`


const ProductListing = styled.div`
    display:flex;
    flex-wrap:wrap;
    width: 95%;
    gap:8px;
    // border:1px solid black;
    margin:auto ;
    margin-top:2vw;
    

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

   <h1>All Products</h1>

    <ProductListing>
    
        <Product/>
     

    </ProductListing>
    

    </ProductContainer>
    
    
    </>
  )
}

export default Products