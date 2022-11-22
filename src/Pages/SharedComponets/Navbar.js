import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import Search from '../../Components/Search/Search'

function Navbar() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Navbar