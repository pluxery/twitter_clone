const {Schema, model} = require('mongoose')

const PostSchema = new Schema({
    postedByUser: {type: Schema.Types.ObjectId, ref: 'User'},
    text: String,
    image: String,
    likes: [{type: Schema.Types.ObjectId, unique: true, ref: 'User'}]
})

module.exports = model('Post', PostSchema)