//Imports
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
const app = express()
dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

app.get('/', (req, res) => {
  res.send('Testing base route')
})

//Connection Strings
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('mongodb connected')
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
