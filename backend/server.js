//Imports
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

import { app, server } from './socket/socket.js'

dotenv.config()

const __dirname = path.resolve()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

//Connection Strings
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('mongodb connected')
})

server.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
