const cors = require("cors");
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(cors());

app.use(express.json({extended: true}))


app.use('/sign', require('./routers/authRouter'))
app.use('/post', require('./routers/postRouter'))
app.use('/retweet', require('./routers/retweetRouter'))

const PORT = 5000 || process.env.PORT
const uri ='mongodb+srv://sema:123@cluster0.2hlcl.mongodb.net/Twitter2?retryWrites=true&w=majority'


async function start() {
    try {
        await mongoose.connect(uri), {
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