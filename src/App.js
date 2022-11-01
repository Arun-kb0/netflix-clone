import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Navbar from './Pages/SharedComponets/Navbar'

import {getMovies} from './feature/store/cartSlice'
import {useDispatch,useSelector} from 'react-redux'


function App() {
  const {AllMovies,isLoading} = useSelector((store)=>{
    return store.movies
  })
  const dispatch  = useDispatch()

  useEffect(()=>{
    dispatch(getMovies())
  },[])


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