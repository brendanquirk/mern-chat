import Message from '../models/messageModel.js'
import Chat from '../models/chatModel.js'
import { getRecieverSocketId } from '../socket/socket.js'
import { io } from '../socket/socket.js'

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body
    const reciverId = req.params.id
    const senderId = req.user._id

    let chat = await Chat.findOne({
      participants: { $all: [senderId, reciverId] },
    })

    if (!chat) {
      chat = await Chat.create({ participants: [senderId, reciverId] })
    }

    const newMessage = new Message({
      senderId,
      reciverId,
      message,
    })

    chat.messages.push(newMessage._id)

    await chat.save()
    await newMessage.save()

    const recieverSocketId = getRecieverSocketId(reciverId)
    if (recieverSocketId) {
      io.to(recieverSocketId).emit('newMessage', newMessage)
    }

    res.status(201).json({ message: newMessage })
  } catch (error) {
    console.log(error)
  }
}

export const getMessages = async (req, res) => {
  try {
    const { id: recieverId } = req.params
    const senderId = req.user._id

    const chat = await Chat.findOne({
      participants: { $all: [recieverId, senderId] },
    }).populate('messages')

    if (!chat) return res.status(200).json({ messages: [] })

    res.status(200).json({ messages: chat.messages })
  } catch (error) {
    console.log(error)
  }
}
