import React from 'react'
import logo from '../../assets/Logo/Calendly-logo.png'

const Navbar = () => {
  return (
    <div className='flex'>
    <div>
        <img src={logo} alt="" />
    </div>
    <div>
        <ul className='flex'>
            <li>individual</li>
            <li>Home</li>
            <li>team</li>
        </ul>
    </div>
    <div>
        <button>login</button>
        <button>signup</button>
    </div>
    </div>
  )
}

export default Navbar
