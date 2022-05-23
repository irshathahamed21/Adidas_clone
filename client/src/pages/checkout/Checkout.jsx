import React from 'react'
import styled from "styled-components"



const CheckoutMainDiv = styled.div`
    width:92vw;
    margin:auto ;
`
const CheckoutContainer = styled.div`
    width:60%;
    border:1px solid black;
    
    

`
const CheckoutHeading = styled.h1`

`

const SmallInputBoxContainer = styled.div`
    width:100%;
    /* border:1px solid blue; */
    display:flex;
    gap:2%;
`


const InputSmallBox = styled.input`
    margin-top:35px;
    width:48%;
    padding:0.8% 1.5%;
   
    height:40px;

`

const LargeInputBoxContainer = styled.div`
    width:100%;
    
`

const InputLargeBox = styled.input`
    margin-top:35px;
    width:96.5%;
    padding:0.8% 1.5%;
    height:40px;
`

const Country = styled.div`
    margin-top:35px;

`
const ContactInformationContainer = styled.div`
    margin-top:20;
    
`

const ContactHeading = styled.h1`
  margin-top:20px;

`
const ContactPara = styled.p`
  margin-top:10px;
`

const ContactCheckBoxContainer = styled.div`
    margin-top:40px;
`

const ContactLabel = styled.label`

`
const ContactCheckBox = styled.input`
    margin-top:40px;
`
const ReviewButton = styled.button`
    width:40%;
    background-color:black;
    color:white;
    padding:1% 2%;
`



function Checkout() {
  return (
      <CheckoutMainDiv>
          <CheckoutContainer>
              <CheckoutHeading>
                  SHIPPING ADDRESS
              </CheckoutHeading>
              <SmallInputBoxContainer>
              <InputSmallBox placeholder = "First Name *" />
              <InputSmallBox placeholder = "Last Name *" />
              </SmallInputBoxContainer>
              <LargeInputBoxContainer>
                  <InputLargeBox placeholder = "Street Address *"/>
                  <InputLargeBox placeholder = "Landmark *"/>
              </LargeInputBoxContainer>
              <SmallInputBoxContainer>
              <InputSmallBox placeholder = "Additional info *" />
              <InputSmallBox placeholder = "City *" />
              </SmallInputBoxContainer>
              <SmallInputBoxContainer>
              <InputSmallBox placeholder = "State *" />
              <InputSmallBox placeholder = "Pincode *" />
              </SmallInputBoxContainer>
              <Country>
                  Country: India
              </Country>
              <SmallInputBoxContainer>
              <InputSmallBox placeholder = "Mobile Number *" />
             
              </SmallInputBoxContainer>
              <ContactInformationContainer>
                  <ContactHeading>
                  CONTACT INFORMATION
                  </ContactHeading>
                  <ContactPara>
                  We'll use these details to keep you informed on your delivery.
                  </ContactPara>

                  <ContactCheckBoxContainer>
                   
                    <ContactCheckBox type = "checkbox"  />
                    <ContactLabel>My billing and delivery information are the same.</ContactLabel>

                    <ContactCheckBox type = "checkbox"  />
                    <ContactLabel>I would like to stay up to date with adidas. Read more </ContactLabel>

                    <ContactCheckBox type = "checkbox"  />
                    <ContactLabel>Yes, I am over 18 years old & accept the Terms & Conditions and Privacy Policy. * </ContactLabel>

                    <ReviewButton>
                        Review & Pay
                    </ReviewButton>
                  </ContactCheckBoxContainer>
                
                   

              </ContactInformationContainer>



          </CheckoutContainer>

          
      </CheckoutMainDiv>
    
  )
}

export default Checkout