import { useChatContext } from '../context/ChatContext'

const User = ({ user }) => {
  const { selectedChat, setSelectedChat } = useChatContext()

  const isSelected = selectedChat?._id === user._id
  return (
    <div
      className={`flex items-center py-2 hover:bg-gray-700 rounded p-2 mb-2 cursor-pointer ${
        isSelected ? 'bg-orange-400' : ''
      }`}
      onClick={() => setSelectedChat(user)}
    >
      <div className="avatar online mr-2">
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg"
            alt="pfp"
          />
        </div>
      </div>
      <div>{user.username}</div>
    </div>
  )
}

export default User
