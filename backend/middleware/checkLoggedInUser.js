import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const isUserLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.jwt

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized Request' })
    }

    const decodedToken = jwt.veryify(token, process.env.JWT_SECRET)

    if (!decodedToken) {
      return res.status(401).json({ message: 'Invalid Request' })
    }

    const user = await User.findById(decodedToken.userId).select('-password')
    if (!user) {
      return res.status(404).json({ message: 'User Not Found' })
    }

    req.user = user

    next()
  } catch (error) {
    console.log(error)
  }
}

export default isUserLoggedIn
