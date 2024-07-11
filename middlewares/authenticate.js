const passport = require('passport')

const authenticate = (req, res, next) => {
    passport.authenticate('jwt', {session : false}, (err, user) => { 
        if (err) return res.status(500).json({ message: err.message })
        if (!user) return res.status(401).json({ message: 'Unauthorized' })
        req.user = user
        next()

    })(req,res,next)
}


module.exports = authenticate