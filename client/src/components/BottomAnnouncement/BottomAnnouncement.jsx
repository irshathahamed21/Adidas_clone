import React from 'react'


import styled from "styled-components"


const ParentContainer = styled.div`
    width:80vw;
    background-color:yellow;
    display:flex;
    
    padding:5vw 10vw;
    
`
const Heading = styled.h1`
    color:black;
    
`

const Button = styled.button`
    background-color:black ;
    color:white;
    padding:10px 20px;
    text-align:left ;
    width:120px;
    font-size: 14px;
    font-weight:bold;
`


function BottomAnnouncement() {
  return (
    <ParentContainer>
        <Heading>
        JOIN ADIDAS AND GET 15% OFF
        </Heading>
        <Button>
            SIGN UP
        </Button>


    </ParentContainer>
   
  )
}

export default BottomAnnouncement