
import React, { useEffect } from 'react'

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { selectProduct, removeProduct } from '../../store/action';

import styled from 'styled-components';

const ProductDetailsContainer = styled.div`
      width:95vw;
      margin:auto;
      border:1px solid black;
      display: flex;
      
      
      
      
`

const ProductDescription = styled.div`
      width:65%;
      height:700px;
      border:1px solid blue;
`
const ProductImage = styled.img`
      width:100%;
      height:600px;
      border:1px solid green;
      
`

const ProductFixed = styled.div`
      width:25%;
      height:fit-content;
      border:1px solid red;
      position:fixed;
      margin-left:65%;
      border-left:1px ridge black;
      padding:3% 3%;
      overflow-x: hidden;
      z-index: 1; /* Stay on top */
    


`
const Rating = styled.div`
    font-size:16px;
   
`

const Title = styled.h1`

`

const Price = styled.div`
    font-size:16px;
    margin-top:10px;

`

const Mrp = styled.span`
  font-size:18px;
  font-weight:bold ;
`

const Inclusive = styled.div`
    
`

const Available = styled.div`
     margin-top:10px;
`

const SizeBox = styled.div`
     margin-top:10px;
`
const AddToSection = styled.div`
      display:flex;
      margin-top:10px;

`

const AddToBag = styled.div`
      width:60%;
      margin-top:10px;
     

`
const AddtoBagButton = styled.button`
      padding:5px 10px;
      background-color:black ;
      color:white;
      font-weight: 700;
      letter-spacing:2px;
      text-align:left;
      width:100%;
      height:50px;

  `


function ProductDetails() {

  const { productId } = useParams()

  const product = useSelector((state) => (state.selectedProduct))
  const {id, img, price,name, category,size,color, rating, gender } = product
  const dispatch = useDispatch()
  
  const getProductDetails = async (id) => {
    const dat = await fetch(`http://localhost:3004/data/${productId}`)

    const res = await dat.json()

    console.log("resp", res)

    dispatch(selectProduct(res))

  }


  useEffect(() => {
    if (productId && productId !== "") {
      getProductDetails(productId)
    }

    // return () => {
    //   dispatch(removeProduct())
    // }
  }, [productId])

  // console.log("product", product.selectProduct)


  if(productId) {

  return (

    <>
    < ProductDetailsContainer>
    <ProductDescription>

    <ProductImage src = {img} />


    </ProductDescription>

    <ProductFixed>
      <Rating> {gender}</Rating>
      <Title>{name}</Title>
      <Price>MRP: <Mrp>{price}</Mrp></Price>
      <Inclusive>(Inclusive of all taxes)</Inclusive>
      <Available>Availabe</Available>

      <AddToBag>
        <AddtoBagButton>
        ADD TO BAG
        </AddtoBagButton>
      </AddToBag>




    </ProductFixed>
    
    
    
    </ProductDetailsContainer>

    
    </>
  )
  }

}

export default ProductDetails