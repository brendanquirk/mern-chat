import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext'

const useLogout = () => {
  const { setLoggedInUser } = useAuthContext()

  const logout = async () => {
    try {
      const response = await axios.post('/api/auth/logout')
      localStorage.removeItem('loggedInUser')
      setLoggedInUser(null)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return { logout }
}

export default useLogout
