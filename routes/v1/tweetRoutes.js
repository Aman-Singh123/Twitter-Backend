const express = require('express')
const Tweetsrouter = express.Router()
const TweetsController = require('../../controllers/tweetController')
const LikeController = require('../../controllers/like-controller')
const CommentController = require('../../controllers/comment-Controller')
const authenticate = require('../../middlewares/authenticate')
const upload = require('../../config/fileupload-S3config')

Tweetsrouter.post('/createTweet', authenticate, upload.single('image'), TweetsController.createTweet)
Tweetsrouter.get('/getTweet/:id', authenticate, TweetsController.GetaTweet)
Tweetsrouter.post('/toglelike', authenticate, LikeController.ToogleLike)
Tweetsrouter.post('/comment', authenticate, CommentController.CreateComment)


module.exports = Tweetsrouter