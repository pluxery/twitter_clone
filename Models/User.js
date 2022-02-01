const {Schema, model, Types} = require('mongoose')

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

    age: {type: Number, min: 14, max: 99},
    sex: {type: String, enum: ['man', 'girl']},
    city: {type: String, min: 2, max: 30},
})

module.exports = model('User', UserSchema)
