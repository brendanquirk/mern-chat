import { useChatContext } from '../context/ChatContext'
import { useSocketContext } from '../context/SocketContext'

const User = ({ user }) => {
  const { selectedChat, setSelectedChat } = useChatContext()
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(user._id)

  const isSelected = selectedChat?._id === user._id
  return (
    <div
      className={`flex items-center py-2 hover:bg-gray-700 rounded p-2 mb-2 cursor-pointer ${
        isSelected ? 'bg-orange-400' : ''
      }`}
      onClick={() => setSelectedChat(user)}
    >
      <div className={`avatar mr-2 ${isOnline ? 'online' : ''}`}>
        <div className="w-7 h-7 rounded-full overflow-hidden">
          {user.picture === '' ? (
            <img
              className="w-full h-full object-cover"
              src="https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg"
              alt="pfp"
            />
          ) : (
            <img
              className="w-full h-full object-cover"
              src={user.picture}
              alt="pfp"
            />
          )}
        </div>
      </div>
      <div>{user.username}</div>
    </div>
  )
}

export default User
