const {Schema, model} = require('mongoose')

const RetweetSchema = new Schema({
    post: {type: Schema.Types.ObjectId, ref: 'Post'}
})

module.exports = model('Retweet', RetweetSchema)