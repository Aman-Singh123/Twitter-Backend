const express = require('express')
const Authrouter = express.Router()
const AuthController = require('../../controllers/auth-controller')


Authrouter.post('/signup', AuthController.SignupUser)
Authrouter.post('/login', AuthController.loginUser)




module.exports = Authrouter