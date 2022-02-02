const {Schema, model} = require('mongoose')

const PostSchema = new Schema({
    postedByUser: {type: Schema.Types.ObjectId, ref: 'User'},
    text: String,
    image: String,
    countLikes: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

module.exports = model('Post', PostSchema)