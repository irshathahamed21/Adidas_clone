import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Banner from '../../components/Banner/Banner'
import Category from '../../components/Category/Category'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import TopLeftBar from '../../components/Navbar/TopLeftBar'
import NewArrival from '../../components/NewArrival/NewArrival'

import "./home.css"
function Home() {
  return (
    <div >
       
        <Banner/>
        <Category/>
        {/* <NewArrival/> */}
       

      
    </div>
  )
}

export default Home