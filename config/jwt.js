const jwt = require('passport-jwt')
const UserModel = require('../models/User')

const jwtStrategy = jwt.Strategy
const ExtractJwt = jwt.ExtractJwt
var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretKey'
}

const passportAuth = (passport) => {
    passport.use(new jwtStrategy(opts,  async (jwt_payload, done) => {
        console.log(jwt_payload)
        const user = await UserModel.findById(jwt_payload.id)
        if (user) { 
            return done(null, user)
        } else {
            return done(null, false)
        }
        
    }))
}

module.exports = passportAuth