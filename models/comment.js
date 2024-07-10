const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment: {
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

    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Comments', CommentSchema)