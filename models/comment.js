const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Tweets', 'Comments']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'likes'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comments'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('Comments', CommentSchema)