const TweetModel = require('../models/twitter')
const CrudRepository = require('./crudRepositary')

class TwitterRepostiry extends CrudRepository {
    constructor() { 
        super(TweetModel)
    }

    async create(data) {
        try {
            const tweet = await TweetModel.create(data)
            return tweet
        } catch (error) {
            console.log(error)

        }
    }

    async getwithComments(id) {
        try {
            const tweet = await TweetModel.findById(id).populate('comments').lean()
            return tweet
        }
        catch (error) {
            console.log(error)
        }
    }

    async update(tweetid, data) {
        try {
            const tweet = await TweetModel.findByIdAndUpdate(tweetid, data, { new: true })
            return tweet
        }
        catch (error) {
            console.log(error)
        }
    }


    async getAll(offset, limit) {
        try {
            const tweets = await TweetModel.find().skip(offset).limit(limit).lean()
            return tweets
        }
        catch (error) {
            console.log(error)
        }
    }


}

module.exports = TwitterRepostiry