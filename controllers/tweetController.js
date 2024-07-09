const TweetService = require('../service/tweetService')

const TweetsService = new TweetService()

class TweetsController {
    static createTweet = async (req, res, next) => {
        try {
            const response = TweetsService.create(req.body)
            res.status(201).json({
                status: 'success',
                data: response
            })

            
        }
        catch (error) { 
            return res.status(500).json({
                status: 'fail',
                message: error.message,
                data: {}

            })
        }
    }
}

module.exports = TweetsController