const cors = require("cors");
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json({extended: true}))

app.use(cors());

app.use('/sign', require('./routers/authRouter'))
app.use('/post', require('./routers/postRouter'))
app.use('/retweet', require('./routers/retweetRouter'))

const PORT = process.env.PORT || 5000
const uri ='mongodb+srv://sema:123@cluster0.2hlcl.mongodb.net/Twitter2?retryWrites=true&w=majority'


async function start() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()