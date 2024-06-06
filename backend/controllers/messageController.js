import Message from '../models/messageModel.js'

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body
    const reciverId = req.params.id
    const senderId = req.user._id
  } catch (error) {
    console.log(error)
  }
}
