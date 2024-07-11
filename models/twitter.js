const mongoose = require('mongoose')

const Twiterschema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [350, "Tweets can't be more than 350 characters "],
        index: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Likes'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comments'
        }
    ],
    image: {
            type: String
    }
}, {
    timestamps: true
})

// Twiterschema.virtual('contentWithEmail').get(function process() {
//     return `${this.content} \nCreated by ${this.userEmail}`
// })


// Twiterschema.pre('save', function (next) {
//     console.log('inside a hook')
//     this.content = this.content.trim() + '....'
//     next()

// })

module.exports = mongoose.model('Tweets', Twiterschema)
