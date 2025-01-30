import React from 'react'
import applogo from '../../assets/applogo/appLogo.png'

function Navbar() {
  return (
    <nav className='flex justify-between'>
        <img src={applogo} className='rounded-full px-5 py-5 h-25' />
        <ul className='flex justify-between items-center'>
            <li>
                <button className='px-2 py-3 mr-3 w-20 bg-indigo-600 text-white rounded-md'>
                Login
                </button>
            </li>
            <li>
                <button className='px-2 py-3 w-20 bg-violet-600 text-white rounded-md'>Register</button>
            </li>
            
        </ul>
    </nav>
  )
}

export default Navbar