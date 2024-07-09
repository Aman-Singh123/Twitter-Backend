const mongoose = require('mongoose')


const hasTagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweets'
        }
    ]
}, {
    timestamps: true
})


hasTagSchema.pre('save', function (next) {
    this.title = this.title.toLowerCase()
    next()
})

module.exports = mongoose.model('hastags', hasTagSchema)
