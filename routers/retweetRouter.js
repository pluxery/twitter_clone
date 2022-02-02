const {Router} = require("express");

const retweetRouter = Router()
const Retweet = require('../models/Retweet')
const User = require('../models/User')


retweetRouter.post('/retweets', async (req, res) => {
    try {
        const {userId} = req.body
        const user = await User.findOne({_id: userId}).populate(
            {
                path: 'retweets',
                populate: {
                    path: 'post',
                }
            });
        res.json(user.retweets)

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

})

retweetRouter.post('/retweet', async (req, res) => {
        try {
            const {userId, postId} = req.body
            const retweet = await new Retweet({
                post: postId
            })
            retweet.save()
            const user = await User.findByIdAndUpdate(userId, {$push: {retweets: retweet}}).populate(
                {
                    path: 'retweets',
                    populate: {
                        path: 'post'
                    }
                });

            res.json({retweet, user})


        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
)


module.exports = retweetRouter
