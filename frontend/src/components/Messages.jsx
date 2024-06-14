import { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import useListenMessages from '../hooks/useListenMessages'

const Messages = () => {
  const { messages, loading } = useGetMessages()
  useListenMessages()

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (!loading) {
      scrollToBottom()
    }
  }, [messages, loading])

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
      <div ref={messagesEndRef} />
    </div>
  )
}

export default Messages
