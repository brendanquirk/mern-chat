import express from 'express'
import {
  logOutUser,
  loginUser,
  registerUser,
} from '../controllers/authController.js'

const router = express.Router()

router.post('/signup', registerUser)

router.get('/login', loginUser)

router.get('/logout', logOutUser)

export default router
