import React from 'react'
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {Link} from "react-router-dom"

import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to = {"/"}>

      <img src="data:image/png;base64,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" alt="logo" />
        </Link >
      </div>

      <div className="navbar__middle">
        <div className="navbar__middle__links">
          <Link to = {"/products"}>
          MEN
          </Link>
        </div>
        <div className="navbar__middle__links">
          WOMEN
        </div>
        <div className="navbar__middle__links">
          KIDS
        </div>
        <div className="navbar__middle__links">
          SPORTS
        </div>
        <div className="navbar__middle__links">
          BRANDS
        </div>
        <div className="navbar__middle__links">
          COLLECTIONS
        </div>
        <div className="navbar__middle__links">
          OUTLET
        </div>

      </div>

      <div className="navbar__right">

        <div className="navbar__right__childrens">
            <input type="text"  placeholder='Search' />
        </div>
        <div className="navbar__right__childrens">
          {/* <PermIdentityIcon/> */}
        </div>
        <div className="navbar__right__childrens">
          {/* <FavoriteBorderIcon/> */}
        </div>
        <div className="navbar__right__childrens">
          {/* < ShoppingBagOutlinedIcon/> */}
        </div>

      </div>
    </div>
  )
}

export default Navbar
