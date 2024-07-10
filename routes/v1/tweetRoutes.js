const express = require('express')
const Tweetsrouter = express.Router()
const TweetsController = require('../../controllers/tweetController')
const LikeController = require('../../controllers/like-controller')
const CommentController = require('../../controllers/comment-Controller')

Tweetsrouter.post('/createTweet', TweetsController.createTweet)
Tweetsrouter.get('/getTweet/:id', TweetsController.GetaTweet)
Tweetsrouter.post('/toglelike', LikeController.ToogleLike)
Tweetsrouter.post('/comment', CommentController.CreateComment)


module.exports = Tweetsrouter