const express = require('express')
const Tweetsrouter = express.Router()
const TweetsController = require('../../controllers/tweetController')
const LikeController = require('../../controllers/like-controller')

Tweetsrouter.post('/createTweet', TweetsController.createTweet)
Tweetsrouter.post('/toglelike', LikeController.ToogleLike)

module.exports = Tweetsrouter