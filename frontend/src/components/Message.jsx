import { useAuthContext } from '../context/AuthContext'
import { useChatContext } from '../context/ChatContext'

const Message = ({ message }) => {
  const { loggedInUser } = useAuthContext()
  const { selectedChat } = useChatContext()
  const userPFP =
    loggedInUser.picture === ''
      ? 'https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg'
      : loggedInUser.picture
  const chatPFP =
    selectedChat.picture === ''
      ? 'https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg'
      : selectedChat.picture
  const isOwnMessage = message.senderId === loggedInUser._id

  return (
    <div
      className={`flex items-center ${
        isOwnMessage ? 'justify-end' : 'justify-start'
      } w-full mb-4`}
    >
      {!isOwnMessage && (
        <div className="chat-image avatar mr-2">
          <div className="w-10 rounded-full">
            <img src={chatPFP} alt="avatar" />
          </div>
        </div>
      )}
      <div className="max-w-xs">
        <div className={`chat ${isOwnMessage ? 'chat-end' : 'chat-start'}`}>
          <div
            className={`chat-bubble ${
              isOwnMessage
                ? 'bg-blue-400 text-white'
                : 'bg-slate-400 text-white'
            }`}
          >
            <p className="text-sm">{message.message}</p>
          </div>
        </div>
      </div>
      {isOwnMessage && (
        <div className="chat-image avatar ml-2">
          <div className="w-10 rounded-full">
            <img src={userPFP} alt="avatar" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Message
