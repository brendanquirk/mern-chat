import { createContext, useContext, useState } from 'react'

export const ChatContext = createContext()

export const useChatContext = () => {
  return useContext(ChatContext)
}

export const ChatContextProvider = ({ children }) => {
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
  const [messages, setMessages] = useState([])

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        messages,
        setMessages,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
