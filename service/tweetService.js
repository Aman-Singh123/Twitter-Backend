const TwitterRepostiry = require('../repositary/twitterRepositry')
const HastagRepostiry = require('../repositary/hastag')

class TweetService {
    constructor() {
        this.twitterRepostiry = new TwitterRepostiry()
        this.hastagRepostiry = new HastagRepostiry()
    }

    async create(data) {
        const content = data.content
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
        // console.log("tags is ",tags)
        const hashtags = tags.map(tag => tag.substring(1).toLowerCase())
        // console.log(hashtags)
        const tweet = await this.twitterRepostiry.create(data)
        // console.log("tweets is ",tweet)
        let alreadyPresentTags = await this.hastagRepostiry.findByName(hashtags)
        let tagTitle = alreadyPresentTags.map(tags => tags.title)
        // console.log("alreadyPresentTags is ", tagTitle)
        let newTags = hashtags.filter(tag => !tagTitle.includes(tag))
        newTags = newTags.map(tag => {
            return ({
                title: tag, tweets: [tweet.id]
            })
        })
        let createdtags = await this.hastagRepostiry.bulckcreate(newTags)
        // console.log("createdtags is ",createdtags)

        // if we have already present tags then save the id 

        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id)
            tag.save()
        })



        // todo create hashtags and add here 
        /***
         *  bluck create in moongose 
         * filter title of hashtags based on multiple tags 
         * how to add tweet id inside all hashtags 
         * 
         */

        return tweet

    }

    async GetTweet(id) {
        try {
            const tweet = await this.twitterRepostiry.getwithComments(id)
            return tweet
            
        } catch (error) {
            console.log(error)
        }
        
    }

}


module.exports = TweetService