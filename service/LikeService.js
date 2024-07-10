const LikeRepository = require('../repositary/LikeRepository')
const TwitterRepostiry = require('../repositary/twitterRepositry')

class LikesService {
    constructor() {
        this.likeRepository = new LikeRepository()
        this.twitterRepostiry = new TwitterRepostiry()

    }



    async toggleLike(modelId, modelType, userId) {

        if (modelType == 'Tweets') {
            var tweet = await this.twitterRepostiry.model.findById(modelId).populate('likes')
        } else if (modelType === 'Comments') {

        } else {
            throw new Error('Invalid model type')
        }

        let exits = await this.likeRepository.findByUserAndLikeable(
            {
                user: userId,
                onModel: modelType,
                likeable: modelId
            }
        )
        if (exits) {
            console.log(exits)
            console.log("exists")
            tweet.likes.pull(exits.id)
            await tweet.save()
            await this.likeRepository.DeleteLikeIffound(exits.id);
            var isRemoved = true
        }
        else {
            console.log("not exists")
            const like = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            })
            tweet.likes.push(like)
            await tweet.save()
            var isRemoved = false
        }
        return isRemoved

    }
}

module.exports = LikesService