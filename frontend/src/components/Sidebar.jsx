import UserList from './UserList'
import LogoutButton from './LogOutButton'

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <input
        type="text"
        placeholder="Search users"
        className="w-full bg-gray-700 text-white border border-gray-600 rounded p-2 mb-4"
      />
      <UserList />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
