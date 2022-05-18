import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"; 
import { useSelector, useDispatch } from 'react-redux';

const ProductContainer = styled.div`
    width:303px;
    height:400px;
    text-decoration:none;
    
    &:hover {
        border:1px ridge black;
    }
   

`
const Image = styled.img`
      width :100%;
      height:303px;

`

const Price = styled.p`
    font-size:16px;
    margin-top:10px;
   


`
const Title = styled.p`
    font-size:12px;
    margin-top:10px;
`

const Text = styled.p`
    font-size: 12px;
    margin-top:10px;

`


function Product() {
    const data = useSelector((state) => (state.allProducts))
    const products = data.products
    
  return (
   <>

        {
            products.map((e) => (
                <ProductContainer key = {e.id}>
                         
                      <Link style={{textDecoration: 'none'}} to = {`/product/${e.id}`}>
                    <Image  src = {e.img[0]} />
                    <Price>{e.price}</Price>
                    <Title>{e.name}</Title>
                    <Text>{e.collection}</Text>  
                    </Link>                
                </ProductContainer>
            ))
        }
    </>



   
  )
}

export default Product