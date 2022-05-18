
import React, { useEffect } from 'react'

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { selectProduct, removeProduct } from '../../store/action';

import styled from 'styled-components';

const ProductDetailsContainer = styled.div`
      width:100vw;
`

const ProductDescription = styled.div`
      width:70vw;
`
const ProductImage = styled.img`
      width:600px;
      height:600px;

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



  return (

    <>
    
    </>
  )
}

export default ProductDetails