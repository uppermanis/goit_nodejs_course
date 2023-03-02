require('dotenv').config();
const express = require('express');

const getConnection = require('./database/connection');

const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts');

const app = express();

const { PORT } = process.env

app.use(express.json())

require('./config/config-passport')

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/posts', postsRouter)

app.listen(PORT, async () => {
  console.log('db connecting...')
  await getConnection()
  console.log('db connected.')

  console.log('listening on port ' + PORT)
})