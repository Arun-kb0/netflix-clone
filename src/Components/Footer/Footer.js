import React from 'react'
import './Footer.css'
import { BsGithub } from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()

    return (
        <div className='footer'>
            <p id='footer-text'>created by Arun KB</p>
            <a id='footer-icon' href='https://github.com/Arun-kb0'>
                <BsGithub />
            </a>
        </div>
    )
}

export default Footer