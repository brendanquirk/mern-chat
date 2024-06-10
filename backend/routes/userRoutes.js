import express from 'express'
import isUserLoggedIn from '../middleware/checkLoggedInUser.js'

import { getUsers } from '../controllers/userController.js'

const router = express.Router()

router.get('/', isUserLoggedIn, getUsers, (req, res) => {})

export default router
