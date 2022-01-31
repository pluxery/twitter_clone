const {Router} = require("express");

const retweetRouter = Router()
const Retweet = require('../Models/Retweet')
const Post = require('../Models/Post')


retweetRouter.get("/", async (req, res) => {
    try {
        const retweets = await Retweet.find({}).populate({
            path: 'postId',
            populate: {
                path: 'postedByUser'
            }
        });
        res.json(retweets)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

retweetRouter.post("/", async (req, res) => {
    try {
        const retweet = await new Retweet({
            postId: req.body.postId
        })
        retweet.save()
        res.json(retweet)

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})


module.exports = retweetRouter
