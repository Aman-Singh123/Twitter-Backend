const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt')

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    mobile: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

userSchema.pre('save', async (next) => {
    const user = this
    const encrypteredPassword = await bcrypt.hash(user.password, 10)
    user.password = encrypteredPassword
    next()
    
})

//Export the model
module.exports = mongoose.model('User', userSchema);