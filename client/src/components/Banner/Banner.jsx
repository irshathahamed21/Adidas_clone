import React from 'react'

import "./banner.css"

function Banner() {
  return (
      
      <>
      <div className="banner__one">
        <img src= "https://ik.imagekit.io/IrshathAhamed21/yoga-ss22-make_space-launch-hp-mh-posterimage-d_tcm209-868230_U3h2rm0AR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652336810471" 
        alt = "banner2"
        />
        <div className="banner__para">
          <h1>MAKE SPACE</h1>
          <p>A high performance yoga collection – inspired by the elements and made in part with Parley Ocean Plastic</p>
          <button>SHOP NOW</button>

        </div>
        

      </div>

      <div className="banner__two">
         <img src= "https://ik.imagekit.io/IrshathAhamed21/sustainability-ss22-rfto-educate-hp-mh-03-d_tcm209-880288_qI-YcdQOf.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1652336811487" 
        alt = "banner3"
        />
          <div className="banner__para">
          <h1>TOGETHER, LET’S </h1>
          <h1>RUN</h1>
          <p>A high performance yoga collection – inspired by the elements and made in part with Parley Ocean Plastic</p>
          <button>SHOP NOW</button>

        </div>

      </div>

      <div className="popular__right__now">
          <h1>POPULAR RIGHT NOW</h1>
          <div className="popular__button__parent">
          <button className="popular__buttons">FACE COVER</button>
          <button className="popular__buttons">WHITE SNEAKER</button>
          <button className="popular__buttons">SUPER STAR</button>
          <button className="popular__buttons">ADIDAD ORIGINALS</button>
          <button className="popular__buttons">ULTRABOOST</button>
          </div>
      </div>
      </>
      
  )
}

export default Banner