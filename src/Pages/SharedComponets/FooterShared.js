import React from 'react'
import Footer from '../../Components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function FooterShared() {
  return (
    <div>
        <Footer/>
        <Outlet/>
    </div>
  )
}

export default FooterShared