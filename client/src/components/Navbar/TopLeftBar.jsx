import React from 'react'
import Signup from '../Sign up/Signup'

import "./navbar.css"

function TopLeftBar() {
  return (
    <div className='topLeftBar'>
      <div className="topLeftBar__links">help</div>
      <div className="topLeftBar__links">return</div>
      <div className="topLeftBar__links">order tracker</div>
      <div className="topLeftBar__links"><Signup/></div>
    </div>
  )
}

export default TopLeftBar