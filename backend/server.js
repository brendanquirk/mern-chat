import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import authRoutes from './routes/authRoutes.js'
const app = express()
dotenv.config()

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Testing base route')
})

app.use('/api/auth', authRoutes)

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('mongodb connected')
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
