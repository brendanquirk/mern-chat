import { useState } from 'react'
import useSignUp from '../hooks/useSignUp'

const SignUp = () => {
  const { signup } = useSignUp()

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(newUser)
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-lg min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-neutral-200">
          SignUp
          <span className="text-orange-400 ml-2">MERN-Chat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full input input-bordered h-10 mt-4"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full input input-bordered h-10 mt-4"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full input input-bordered h-10 mt-4"
            value={newUser.confirmPassword}
            onChange={(e) =>
              setNewUser({ ...newUser, confirmPassword: e.target.value })
            }
          />
          <input
            type="submit"
            className="w-full btn h-10 mt-4 mb-4"
            value="SignUp"
          />
          <a href="/login" className="text-neutral-200 hover:text-orange-400">
            Login Here
          </a>
        </form>
      </div>
    </div>
  )
}

export default SignUp
