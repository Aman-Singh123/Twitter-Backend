const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }

    try {
        const encryptedPassword = await bcrypt.hash(user.password, 10);
        user.password = encryptedPassword;
        next();
    } catch (err) {
        next(err);
    }

})

userSchema.methods.comparePassword = async function compare(password) {
    return await bcrypt.compare(password, this.password);

}

userSchema.methods.genJwt = async function generate() {
    return await jwt.sign({
        id: this._id,
        email: this.email,
    },
        'secretKey',
        {
            expiresIn: '1d',
        }
    )
}

//Export the model
module.exports = mongoose.model('User', userSchema);