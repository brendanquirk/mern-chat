import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext'

const useSignUp = () => {
  const { setLoggedInUser } = useAuthContext()
  const signup = async ({ username, password, confirmPassword }) => {
    const success = handleInputErrors({ username, password, confirmPassword })
    console.log(success)
    if (!success) return

    try {
      const response = await axios.post('/api/auth/signup', {
        username,
        password,
        confirmPassword,
      })

      localStorage.setItem('loggedInUser', JSON.stringify(response.data))
      setLoggedInUser(response.data)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return { signup }
}

export default useSignUp

const handleInputErrors = ({ username, password, confirmPassword }) => {
  if (!username || !password || !confirmPassword) {
    toast.error('Please fill in all fields')
    return false
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match')
    return false
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters')
    return false
  }

  return true
}
