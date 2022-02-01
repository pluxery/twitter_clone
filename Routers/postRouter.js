const {Router} = require("express");

const postRouter = Router();
const Post = require("../Models/Post");
const User = require("../Models/User");

postRouter.get("/", async (req, res) => {
    try {
        const posts = await Post.find({}).populate('postedByUser');
        res.json(posts)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

postRouter.post("/", async (req, res) => {
    try {
        const newPost = await new Post(req.body);
        newPost.save()
        return res.status(200).json(newPost);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

postRouter.get('/:id', async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id}).populate('postedByUser')
        res.json(post)
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

postRouter.post('/search', async (req, res) => {
    try {
        const posts = await Post.find({text: {$regex: req.body.text}}).populate('postedByUser')
        return res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({message: err.message});
    }

})

postRouter.post('/like_post/:id', async (req, res) => {
    try {
        const {userId} = req.body
        const post = await Post.findByIdAndUpdate(req.params.id, {$push: {likes: userId}})
        return res.status(200).json(post.likes.length);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

module.exports = postRouter