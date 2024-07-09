const express = require('express')
const Tweetsrouter = express.Router()
const TweetsController = require('../../controllers/tweetController')

Tweetsrouter.post('/createTweet' , TweetsController.createTweet)

module.exports = Tweetsrouter