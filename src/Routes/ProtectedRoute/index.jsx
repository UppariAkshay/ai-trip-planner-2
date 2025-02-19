import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const { isSignedIn } = useUser()
    console.log(isSignedIn)
    const navigate = useNavigate()

  return (
    <>
    {!isSignedIn ? navigate('/login') : children}
    </>
    
  )
}

export default ProtectedRoute