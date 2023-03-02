const passport = require('passport')
const passportJWT = require('passport-jwt')

const User = require('../schemas/user')

const secret = process.env.SECRET

const params = {
  secretOrKey: secret,
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
}

passport.use(
  new passportJWT.Strategy(params, async (payload, done) => {
    const user = await User.findOne({ _id: payload.id })

    if (!user) {
      return done(new Error('User not found'))
    }

    return done(null, user)
  }),
)
