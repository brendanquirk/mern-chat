import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useChatContext } from '../context/ChatContext'

const useGetChats = () => {
  const { chats, setChats } = useChatContext()

  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await axios.get('/api/users/')
        setChats(response.data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    getChats()
  }, [])
  return { chats }
}

export default useGetChats
