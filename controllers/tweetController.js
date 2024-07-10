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

    static async GetaTweet(req, res, next) {
        try {
            const response = await TweetsService.GetTweet(req.params.id)
            res.status(200).json({
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