const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Comments',CommentSchema)