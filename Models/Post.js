const {Schema, model} = require('mongoose')

const PostSchema = new Schema({
    postedByUser: {type: Schema.Types.ObjectId, ref: 'User'},
    text: String,
    image: String,
    likes: {type: Number, default: 0}
})

module.exports = model('Post', PostSchema)