import React from 'react'
import Navbar from '../../Components/Navbar'
import { useUser,SignIn,SignUp   } from '@clerk/clerk-react'
import { replace, useNavigate } from 'react-router-dom'

function Login() {
    const { isSignedIn } = useUser()
    const navigate = useNavigate()

    if (isSignedIn) navigate('/')

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-[40px] mb-10'>Login To Plan your Trip within seconds</h1>
        <SignIn />
    </div>
  )
}

export default Login