import React from 'react'
import styled from "styled-components"


const CartMainDiv = styled.div`
    width:90vw;
    display:flex;
    margin:auto;
    gap:5%;
`

const CartContainer = styled.div`
    width:60%;
    

`

const CartTitle = styled.h1`
    margin-top:15px;
    

`

const CartTotal = styled.p`
    margin-top:15px;

`

const CartPara = styled.p`
     margin-top:15px;

`
const CartItemsContainer = styled.div`
    margin-top:2rem;

`

const CartItem = styled.div`
    display:flex;
    border:1px solid black;
    gap:1.5%;


`
const CartItemImageContainer = styled.div`
    width:30%;
`
const CartItemImage = styled.img`
    width:100%;
    height:100%;

`
const CartItemDetails = styled.div`
    width:55%;
    margin-top:3%;

`

const CartItemPrice = styled.div`
    width:10%;
    margin-top:3%;
    
`
const CartItemQuantity = styled.select`
  width: 30%;
  height:35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border:none;
  border:1px solid black;

       & option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`


const CheckoutContainer = styled.div`
    width:30%;
    border:1px ridge black;
    margin-top:5%;


`

const CheckoutButton = styled.div`
    background-color:black;
    padding:10px 10px;
    // my mistake padding +total width
    color:white;
    font-weight:bold;
    letter-spacing: 2px;
    text-align:left ;
    width:100% - (20px);
    height:40px;
`
const OrderSection = styled.div`
    margin-top: 2rem;
    border:1px ridge black;
    width:89%;
    padding:10px 20px;


    
`

const Item = styled.div`
    display:flex ;
    justify-content:space-between ;
   


    
`
const Delivery = styled.div`
    display:flex ;
    justify-content:space-between ;
    margin-top:10px;
`

const Total = styled.div`
    display:flex ;
    justify-content:space-between ;
    margin-top:10px;
`

const GrandTotal = styled.div`
    display:flex;
    flex-direction:column;

`
const BottomCheckoutContainer = styled.div`
    width:50%;
    margin-top:5%;
`





const data = [{
    "id": 1,
    "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/066cb1d4e2fd4281aceaac8300b7f4c9_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a51495b9f92f465ca774ac8300b80557_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/abed66812f144b909d9bac8300b81a3e_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b6f31e854c3748489c87ac6901450277_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_01_laydown.jpg"
    ],
    "name": "AEROREADY DESIGNED TO MOVE SPORT TEE",
    "category": "Men Training",
    "price": 599,
    "size": [
      32,
      34,
      36,
      38
    ],
    "color": [
      "Scarlet",
      "Red",
      "White"
    ],
    "rating": 4,
    "specifications": [
      "Drawcord on elastic waist",
      "100% recycled polyester doubleknit",
      "Stay-put running shorts",
      "Color: Scarlet / Red / Black"
    ],
    "details": [
      "Attribute",
      "Value",
      "Net Quantity",
      "1 N",
      "Gender",
      "Men",
      "Country of Origin",
      "Thailand"
    ],
    "gender": "men",
    "division": "clothing",
    "productType": "Tshirts",
    "brand": "performance",
    "collection": "superNova",
    "sustainability": "organicCotton"
  },
  {
    "id": 1,
    "img": [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/066cb1d4e2fd4281aceaac8300b7f4c9_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a51495b9f92f465ca774ac8300b80557_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/abed66812f144b909d9bac8300b81a3e_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b6f31e854c3748489c87ac6901450277_9366/AEROREADY_Designed_To_Move_Sport_Tee_Red_GM2108_01_laydown.jpg"
    ],
    "name": "AEROREADY DESIGNED TO MOVE SPORT TEE",
    "category": "Men Training",
    "price": 599,
    "size": [
      32,
      34,
      36,
      38
    ],
    "color": [
      "Scarlet",
      "Red",
      "White"
    ],
    "rating": 4,
    "specifications": [
      "Drawcord on elastic waist",
      "100% recycled polyester doubleknit",
      "Stay-put running shorts",
      "Color: Scarlet / Red / Black"
    ],
    "details": [
      "Attribute",
      "Value",
      "Net Quantity",
      "1 N",
      "Gender",
      "Men",
      "Country of Origin",
      "Thailand"
    ],
    "gender": "men",
    "division": "clothing",
    "productType": "Tshirts",
    "brand": "performance",
    "collection": "superNova",
    "sustainability": "organicCotton"
  }
]
  const {} = data

function Cart() {
  return (
    <>
    <CartMainDiv>
        <CartContainer>
            <CartTitle>YOUR BAG</CartTitle>
            <CartTotal>Total ({0} item)</CartTotal>
            <CartPara>Items in your bag are not reserved — check out now to make them yours.</CartPara>
        
        <CartItemsContainer>

            {
                data.map((e) => (
                    <CartItem>
                        <CartItemImageContainer>
                            <CartItemImage src = {e.img[0]}/>
                        </CartItemImageContainer>
                        <CartItemDetails>
                            <div className=""> {e.name}</div>
                            <div className=""> {e.color[0]}</div>
                            <div className=""> Size:{}</div>
                           
                        <CartItemQuantity>
                           
                               <option value = "1">1 </option>
                               <option value = "2">2 </option>
                               <option value = "3">3 </option>
                               <option value = "4">4 </option>
                        
                           
                        </CartItemQuantity>
                       
                       
                        </CartItemDetails>
                        <CartItemPrice>
                        {e.price}
                        </CartItemPrice>
                    
                    </CartItem>
                ))
            }
           
        </CartItemsContainer>

        <BottomCheckoutContainer>
        <CheckoutButton>
                CHECKOUT
        </CheckoutButton>

        </BottomCheckoutContainer>
        
        
        

        </CartContainer>
        <CheckoutContainer>
            <CheckoutButton>
                CHECKOUT
            </CheckoutButton>
            <OrderSection>
                <Item>
                    <div> {} Item</div>
                    <div> price</div>
                </Item>
                <Delivery>
                <div>Delivery</div>
                <div>Free</div>

                </Delivery>
                <Total>
                    <GrandTotal>
                        <div className="">TOTAL</div>
                        <div className="">(Inclusive of all taxes)</div>
                    </GrandTotal>
                    <div className="">
                        price
                    </div>

                </Total>

            </OrderSection>


        </CheckoutContainer>
    </CartMainDiv>

    </>
  )
}

export default Cart