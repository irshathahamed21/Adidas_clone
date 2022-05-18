import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"; 
import { useSelector, useDispatch } from 'react-redux';

const ProductContainer = styled.div`
    width:200px;
    height:400px;

    &:hover {
        border:1px ridge black;
    }

`


const Image = styled.img`

`
const Price = styled.p`

`
const Title = styled.p`
`

const Text = styled.p`

`


function Product() {
    const data = useSelector((state) => (state.allProducts))
    const products = data.products
    
  return (
   <>

        {
            products.map((e) => (
                <ProductContainer key = {e.id}>
                         
                      <Link to = {`/product/${e.id}`}>
                    <Image src = {e.img[0]}/>
                    <Price>{e.price}</Price>
                    <Title>{e.name}</Title>
                    <Text>Men Originals</Text>
                    <Title>online exclusive</Title>  
                    </Link>                
                </ProductContainer>
            ))
        }
    </>



   
  )
}

export default Product