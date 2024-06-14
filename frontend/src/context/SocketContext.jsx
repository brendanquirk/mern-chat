import { createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import io from 'socket.io-client'

export const SocketContext = createContext()

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])

  const { loggedInUser } = useAuthContext()

  useEffect(() => {
    if (loggedInUser) {
      const socket = io('https://mern-chat-socket-k7j9.onrender.com/', {
        query: {
          userId: loggedInUser._id,
        },
      })
      setSocket(socket)

      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users)
      })

      //closes connection when component is unmounted
      return () => socket.close()
    } else {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [loggedInUser])

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  )
}
