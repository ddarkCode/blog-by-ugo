const {Schema, model} = require('mongoose');
const {hash, compare} = require('bcrypt');

const {PASSWORD_SALT} = process.env;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please Provide Your Username Address']
    },
    email: {
        type: String,
        required: [true, 'Please Provide Your Email Address']
    },
    password: {
        type: String,
        required: [true, 'Please Provide Your Password Address']
    },
    googleId: String
}, {timestamps: true})

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await hash(this.password, +PASSWORD_SALT);
    }
    next();
});


userSchema.methods.confirmPassword = async function(password) {
    return await compare(password, this.password);
}

module.exports = model('User', userSchema);