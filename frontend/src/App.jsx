import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import { useAuthContext } from './context/AuthContext'

const App = () => {
  const { loggedInUser } = useAuthContext()
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={!loggedInUser ? <Navigate to="/login" /> : <Home />}
        />
        <Route
          path="/signup"
          element={loggedInUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={loggedInUser ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
