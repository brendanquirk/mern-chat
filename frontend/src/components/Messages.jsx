import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'

const Messages = () => {
  const { messages, loading } = useGetMessages()

  if (loading) {
    return (
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
        <p>Loading Messages...</p>
      </div>
    )
  }

  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
        <p>No Messages Yet</p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
      {messages.map((message) => {
        return <Message key={message._id} message={message} />
      })}
    </div>
  )
}

export default Messages
