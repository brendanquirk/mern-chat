import express from 'express'
import {
  logOutUser,
  loginUser,
  registerUser,
} from '../controllers/auth.controller.js'

const router = express.Router()

router.get('/signup', registerUser)

router.get('/login', loginUser)

router.get('/logout', logOutUser)

export default router
