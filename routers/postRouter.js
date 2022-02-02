const {Router} = require("express");

const postRouter = Router();
const Post = require("../models/Post");
const User = require("../models/User");

postRouter.get("/", async (req, res) => {
    try {
        const posts = await Post.find({}).populate('postedByUser');
        return res.json(posts)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

postRouter.post("/", async (req, res) => {
    try {
        const {text, postedByUser} = req.body
        const newPost = await new Post({
            text: text,
            postedByUser: postedByUser,
        }).populate('postedByUser');
        newPost.save()
        return res.json(newPost);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

postRouter.get('/:id', async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id}).populate('postedByUser')
        return res.res.json(post)
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

postRouter.post('/search', async (req, res) => {
    try {
        const posts = await Post.find({text: {$regex: req.body.text}}).populate('postedByUser')
        return res.json(posts);
    } catch (err) {
        res.status(400).json({message: err.message});
    }

})
postRouter.get('/liked/:userId', async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.userId}).populate({
            path: 'likedPosts', populate: {
                path: 'postedByUser'
            }
        })
        return res.json(user.likedPosts);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

postRouter.post('/like', async (req, res) => {
    try {
        const {userId, postId} = req.body
        await User.findByIdAndUpdate(userId, {$addToSet: {likedPosts: postId}}).populate('likedPosts')
        const countLikes = await Post.findByIdAndUpdate(postId, {$addToSet: {countLikes: userId}})
        return res.json(countLikes);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})


module.exports = postRouter