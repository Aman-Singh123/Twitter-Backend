const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum :['Tweets','Comments']
    },
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Likes',likeSchema)