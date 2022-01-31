const {Schema, model} = require('mongoose')

const RetweetSchema = new Schema({
    postId: {type: Schema.Types.ObjectId, ref: 'Post', unique: true},
})

module.exports = model('Retweet', RetweetSchema)