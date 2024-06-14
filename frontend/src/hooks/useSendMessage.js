import toast from 'react-hot-toast'
import axios from 'axios'
import { useChatContext } from '../context/ChatContext'
import { useState } from 'react'

const useSendMessage = () => {
  const { messages, selectedChat, setMessages } = useChatContext()
  const [loading, setLoading] = useState(true)

  const sendMessage = async (message) => {
    try {
      console.log(message)
      const response = await axios.post(
        `/api/messages/send/${selectedChat._id}`,
        { message }
      )

      setMessages([...messages, response.data.message])
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { sendMessage, loading }
}

export default useSendMessage
