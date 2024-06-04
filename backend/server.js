import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Testing base route')
})

app.get('/api/auth/signup', (req, res) => {
  res.send('Sign Up Page')
})

app.get('/api/auth/login', (req, res) => {
  res.send('Login Page')
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
