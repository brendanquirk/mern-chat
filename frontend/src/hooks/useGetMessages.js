import toast from 'react-hot-toast'
import axios from 'axios'
import { useChatContext } from '../context/ChatContext'
import { useEffect, useState } from 'react'

const useGetMessages = () => {
  const { messages, selectedChat, setMessages } = useChatContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMessages = async () => {
      try {
        if (selectedChat?._id) {
          const response = await axios.get(`/api/messages/${selectedChat._id}`)

          setMessages(response.data.messages)
        }
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    if (selectedChat?._id) getMessages()
  }, [selectedChat?._id, setMessages])
  return { messages, loading }
}

export default useGetMessages
