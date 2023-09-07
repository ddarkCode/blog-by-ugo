const {Schema, model} = require('mongoose')

const blogSchema = new Schema({
    title: {
        type: String,
        min: 20,
        required: [true, 'Please Provide The Title of Your Post']
    },
    description: {
        type: String,
        required: [true, 'Please Provide The Description of Your Post']
    },
    content: {
        type: String,
        required: [true, 'Please Provide Content For Your Post']
    },
    author: {
        type: String,
        default: "Jane Doe"
    },
    
}, { timestamps: true })


module.exports = model('Blog', blogSchema);