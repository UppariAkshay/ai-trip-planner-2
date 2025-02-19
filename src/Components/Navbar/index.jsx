import React from 'react'
import applogo from '../../assets/applogo/appLogo.png'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


function Navbar() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  return (
    <nav className='flex justify-between'>
      <div className='flex items-center h-[30px'>
        <img src={applogo} className='rounded-full px-5 py-5 h-25' />
        <p className='text-transparent bg-clip-text text-[30px] font-bold bg-gradient-to-r from-violet-600 to-indigo-600'>Trip Planner</p>
      </div>
        
        <ul className='flex justify-between items-center'>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* <li>
                <button className='px-2 py-3 mr-3 w-20 bg-indigo-600 text-white rounded-md'>
                Login
                </button>
            </li>
            <li>
                <button className='px-2 py-3 w-20 bg-violet-600 text-white rounded-md'>Register</button>
            </li> */}
            
        </ul>
    </nav>
  )
}

export default Navbar