import express from 'express'
import { sendMessage } from '../controllers/messageController.js'
import isUserLoggedIn from '../middleware/checkLoggedInUser.js'

const router = express.Router()

router.post('/send/:id', isUserLoggedIn, sendMessage)

export default router
