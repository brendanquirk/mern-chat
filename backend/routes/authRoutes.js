import express from 'express'
import {
  logOutUser,
  loginUser,
  registerUser,
} from '../controllers/authController.js'

const router = express.Router()

router.post('/signup', registerUser)

router.post('/login', loginUser)

router.post('/logout', logOutUser)

export default router
