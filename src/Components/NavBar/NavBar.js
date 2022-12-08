import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import "./NavBar.css"
import "../../App.css"

import { useSelector } from 'react-redux'
import Search from '../Search/Search'

function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const { amount } = useSelector((state) => {
    return state.movies
  })

  function handleRoute(id){
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById(id)
    if(el){
      el.scrollIntoView({ behavior: 'smooth' });
    }
    }, 1);
    
  }

  console.log(amount)

  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="netflix logo" onClick={() => navigate('/')} />
      {
        location.pathname === '/' ?

      <div class="genere-btns">
        <a href='#Trending'>
          <h3>Trending</h3>
        </a>
        <a href="#Netflix Originals">
          <h3>Netflix originals</h3>
        </a>
        <a href="#Action">
          <h3>Action</h3>
        </a>
        <a href="#Horror">
          <h3>Horror</h3>
        </a>
        <a href='#Romance'>
          <h3>Romance</h3>
        </a>

      </div>
      :
      <div className='route-btns'>
        <h3 onClick={()=>{
          handleRoute("Trending")
        }}>Trending</h3>
        <h3 onClick={()=> handleRoute("Netflix Originals")}
        >Netflix originals</h3>
        <h3 onClick={()=> handleRoute("Action")}
        >Action</h3>
        <h3 onClick={()=> handleRoute("Horror")}
        >Horror</h3>
        <h3 onClick={()=> handleRoute("Romance")}
        >Romance</h3>
      </div>
      }
      <Search />

      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar_img"
        onClick={() => navigate('/login')} />
    </div>
  )
}

export default NavBar