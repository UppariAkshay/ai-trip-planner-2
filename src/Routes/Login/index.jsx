import React from 'react'
import Navbar from '../../Components/Navbar'
import { useUser,SignIn,SignUp   } from '@clerk/clerk-react'
import { replace, useNavigate } from 'react-router-dom'

function Login() {
    const { isSignedIn } = useUser()
    const navigate = useNavigate()

    if (isSignedIn) navigate('/')

  return (
    <div className='flex justify-between'>
        <SignIn />
    </div>
  )
}

export default Login