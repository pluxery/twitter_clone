const {Schema, model} = require('mongoose')

const PostSchema = new Schema({
    name: String,
    user: String,
    text: String,
    avatar: String,
    image: String,
    blueMark: Boolean,
    like: Boolean

})

module.exports = model('Post', PostSchema)