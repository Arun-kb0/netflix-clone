import React, { useState } from 'react'
import './Search.css'
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux'
import { filter } from '../../feature/store/cartSlice'
import { useNavigate } from 'react-router-dom'




function Search() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [value, setValue] = useState("")

  return (
    <section className='Search-bar' >
      <div>
        <input type='text' placeholder='Search ' className='Search-input'
          onChange={(e) => {
            setValue(e.target.value)
            if (e.target.value === '') navigate(-1)
          }}

          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // console.log("search-btn " + value)
              dispatch(filter({ value }))
              navigate('/search')
            }
          }}
        />

      </div>


      <div className='icon'
        onClick={() => {
          // console.log("search-btn " + value)
          dispatch(filter({ value }))

          navigate('/search')
        }}
      >
        <BsSearch />
      </div>
    </section>

  )
}

export default Search