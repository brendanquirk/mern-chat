import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
  const { setLoggedInUser } = useAuthContext()

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login/', {
        username,
        password,
      })
      localStorage.setItem('loggedInUser', JSON.stringify(response.data))
      setLoggedInUser(response.data)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return { login }
}

export default useLogin
