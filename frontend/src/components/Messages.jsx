import { useState } from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages
