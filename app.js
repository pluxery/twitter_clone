const cors = require("cors");
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(cors());

app.use(express.json({extended: true}))

app.use('/sign', require('./Routers/authRouter'))
app.use('/post', require('./Routers/postRouter'))
app.use('/retweet', require('./Routers/retweetRouter'))

const PORT = 5000
const URI ='mongodb+srv://sema:123@cluster0.2hlcl.mongodb.net/Twitter?retryWrites=true&w=majority'


async function start() {
    try {
        await mongoose.connect(URI), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()