import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'

function Navbar() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Navbar