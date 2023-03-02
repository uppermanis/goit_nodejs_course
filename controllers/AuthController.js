const jwt = require('jsonwebtoken');
const User = require('../schemas/user');

async function login(req, res, next) {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user || !user.validPassword(password)) {
    return res
      .status(400)
      .json({ code: 400, data: { message: 'Invalid credentials' }})
  }

  const { _id: id, username } = user

  const token = jwt.sign({ id, username }, process.env.SECRET, { expiresIn: '2h' })

  console.log('login-token', token)

  return res.json({ code: 200, data: { token }})
}

async function register(req, res, next) {
  const {email, password, username, about} = req.body

  const isAlreadyRegistered = await User.exists({ email })

  if(isAlreadyRegistered) {
    return res.status(400).json({
      code: 400,
      data: {message: 'Email already exists.'}
    })
  }

  const entity = new User({ email, username, about })
  entity.setPassword(password)

  await entity.save()

  return res.status(201).end()
}


module.exports = {
  login,
  register,
}