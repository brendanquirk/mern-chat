import useLogout from '../hooks/useLogout'

const LogoutButton = () => {
  const { logout } = useLogout()

  return (
    <button
      className="btn-sm bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
      onClick={logout}
    >
      Logout
    </button>
  )
}

export default LogoutButton
