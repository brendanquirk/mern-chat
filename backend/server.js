//Imports
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

//Connection Strings
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('mongodb connected')
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
