import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./NavBar.css"
import "../../App.css"

import { useSelector } from 'react-redux'
import Search from '../Search/Search'


function NavBar() {
  const navigate = useNavigate()

  const { amount } = useSelector((state) => {
    return state.movies
  })

  console.log(amount)

  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="netflix logo" />

        <Search />
      


      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=""
        onClick={() => navigate('/login')} />
    </div>
  )
}

export default NavBar