export const registerUser = async (req, res) => {
  try {
    const { username, password, picture } = req.body
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = (req, res) => {
  res.send('Login Route')
}

export const logOutUser = (req, res) => {
  res.send('Log Out Route')
}
