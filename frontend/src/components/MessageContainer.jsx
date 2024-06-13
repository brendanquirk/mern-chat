import { useState } from 'react'
import Messages from './Messages'
import { FaPaperPlane } from 'react-icons/fa'
import { useChatContext } from '../context/ChatContext'
import { useAuthContext } from '../context/AuthContext'
import useSendMessage from '../hooks/useSendMessage'

const MessageContainer = () => {
  const { selectedChat } = useChatContext()
  const { sendMessage, loading } = useSendMessage()
  const [newMessage, setNewMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await sendMessage(newMessage)
    setNewMessage('')
  }

  return (
    <div className="flex flex-col h-full">
      {!selectedChat ? (
        <NoChat />
      ) : (
        <>
          <Messages />
          <form
            onSubmit={handleSubmit}
            className="bg-gray-200 py-2 px-4 flex items-center"
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              className="flex-1 bg-white border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
            >
              <FaPaperPlane size={20} />
            </button>
          </form>
        </>
      )}
    </div>
  )
}

const NoChat = () => {
  const { loggedInUser } = useAuthContext()
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h1 className="text-2xl font-bold mb-2">
        Welcome {loggedInUser.username}!
      </h1>
      <p className="text-lg">Select a user to start chatting.</p>
    </div>
  )
}

export default MessageContainer
