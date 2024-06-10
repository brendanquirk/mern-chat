import express from 'express'
import { sendMessage, getMessages } from '../controllers/messageController.js'
import isUserLoggedIn from '../middleware/checkLoggedInUser.js'

const router = express.Router()

router.get('/:id', isUserLoggedIn, getMessages)
router.post('/send/:id', isUserLoggedIn, sendMessage)

export default router
