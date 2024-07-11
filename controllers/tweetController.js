const TweetService = require('../service/tweetService')

const TweetsService = new TweetService()


// const multipleuploader = upload.array('image', 10)


class TweetsController {
    static createTweet = async (req, res, next) => {
        try {
            // singleuploader(req, res, function (err, data) {
            //     if (err) { 
            //         return res.status(400).json({ message: err.message })
            //     }
            //     console.log(req.file)
            // })
            let tweetData = req.body;
            if (req.file) {
                tweetData.image = req.file.location
            }

            const response = await TweetsService.create(tweetData)
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