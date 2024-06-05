import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  picture: {
    type: String,
    default: '',
  },
})

const User = mongoose.model('user', userSchema)

export default User
