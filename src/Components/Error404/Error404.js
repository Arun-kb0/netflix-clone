import React from 'react'
import { useNavigate } from 'react-router'
import './Error404.css'

function Error404() {
    const navigate = useNavigate()

    return (
        <div className='error-page'>
            <img src={require("./errorImg.jpg")} alt='errorimage' />
            <div className='text'>
                <h1>Lost your way ?</h1>
                <h3>Sorry, we can't find the page. 
                    You'll find loads to home page </h3>

            </div>

            <button className='btn' 
            onClick={()=> navigate('/') }>Home</button>
        </div>
    )
}

export default Error404