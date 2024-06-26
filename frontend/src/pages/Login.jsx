import { useState } from 'react'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const { login } = useLogin()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-lg min-w-96  mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-neutral-200">
          Login
          <span className="text-orange-400 ml-2">MERN-Chat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full input input-bordered h-10 mt-4"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full input input-bordered h-10 mt-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            className="w-full btn h-10 mt-4 mb-4"
            value="Login"
          />
          <a href="/signup" className="text-neutral-200 hover:text-orange-400">
            Register Here
          </a>
        </form>
      </div>
    </div>
  )
}

export default Login
