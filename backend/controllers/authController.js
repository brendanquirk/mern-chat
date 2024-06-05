import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import generateTokenAndCreateCooke from '../utils/generateToken.js'

export const registerUser = async (req, res) => {
  try {
    const { username, password, confirmPassword, picture } = req.body

    //check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'passwords do not match' })
    }

    //hashpassword for storage
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    //see if user exists in DB already
    const user = await User.findOne({ username })
    if (user) {
      return res.status(400).json({ error: 'username already exists' })
    }

    //create user
    const newUser = new User({
      username,
      password: hashedPassword,
      picture:
        picture === ''
          ? 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png'
          : picture,
    })

    //store new user in db
    if (newUser) {
      generateTokenAndCreateCooke(newUser._id, res)
      await newUser.save()
      return res.status(201).json({
        message: 'user created successfully',
        username: newUser.username,
        password: newUser.password,
        picture: newUser.picture,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const foundUser = await User.findOne({ username })
    const passwordMatch = await bcrypt.compare(
      password,
      foundUser?.password || ''
    )

    //check if user was found
    if (!foundUser) {
      return res.status(400).json({ error: 'Invalid Username' })
    }

    //check if the found user password matches the one from the body
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Incorrect Password' })
    }

    generateTokenAndCreateCooke(foundUser._id, res)

    res.status(200).json({ message: 'User Logged In', username })
  } catch (error) {
    res.status(500).json({ error: 'Server Error' })
  }
}

export const logOutUser = (req, res) => {
  res.send('Log Out Route')
}
