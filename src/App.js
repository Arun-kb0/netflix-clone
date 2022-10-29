import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Navbar from './Pages/SharedComponets/Navbar'
import { originals, action, horror, trending, romance } from './urls'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>} />
            
          <Route path='/login' element={<Login/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App