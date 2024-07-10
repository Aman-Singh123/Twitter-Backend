const CommentRepositary = require('../repositary/comment-repository');
const CrudRepository = require('../repositary/crudRepositary');
const TwitterRepostiry = require('../repositary/twitterRepositry');

class CommentService  {
    constructor() {
        this. commentRepo = new CommentRepositary()
        this.tweetRepo = new TwitterRepostiry()
    }

    async CreateComment(modelId, modelType, userId, content) {
        if (modelType === 'Tweets') {
            var commentable = await this.tweetRepo.get(modelId)
            console.log("asasdf",commentable)


        } else if (modelType === 'Comments') {
            var commentable = await this.commentRepo.get(modelId)


        } else {
            throw new Error('Model Type is not valid')
        }
        const comment = await this.commentRepo.create({
            content: content,
            user: userId,
            onModel: modelType,
            commentable: modelId,
            likes: [],
            comments: []
        })

        commentable.comments.push(comment)
        await commentable.save()
        return comment
    }
}

module.exports = CommentService