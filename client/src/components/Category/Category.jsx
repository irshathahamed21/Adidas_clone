import React from 'react'
import "./category.css"

function Category() {
  return (
    <div className='category'>
        <h1>WHO ARE SHOPPING YOU FOR ?</h1>
        <div className="category__container">
        <div className="men">

            <img src="https://ik.imagekit.io/IrshathAhamed21/evergreen-homepage-gender-navigation-men-dt_tcm209-761437_V_Lh3FrrV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652348874824" alt="" />
            <h4>MEN</h4>
        </div>
        <div className="women">
            <img src="https://ik.imagekit.io/IrshathAhamed21/womens_1_tcm209-792193_pApV-pHsYO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652348875590" alt="" />
                <h4>WOMEN</h4>
        </div>
        <div className="kids">
            <img src="https://ik.imagekit.io/IrshathAhamed21/kids_1_tcm209-792188_REaMk3vJH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652348902094" alt="" />
            <h4>KIDS</h4>
        </div>
        </div>

    </div>
  )
}

export default Category