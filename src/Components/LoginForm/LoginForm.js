import React from 'react'
import './LoginForm.css'

import {loginBackground} from '../../constants/constant'

function LoginForm() {
    return (
        <div>
            <div className='login' style={{backgroundImage:`url(${loginBackground})`}}>
                
                <form className='login-form'>
                    <input type='text' className='email' placeholder='email'/><br/>
                    
                    <input type='text' className='password' placeholder='password'/><br/>
                    
                    <div className='submit-button'>
                    <button type='submit'>Sign in</button>
                    </div>

                    
                </form>
                
                
            </div>


        </div>
    )
}

export default LoginForm