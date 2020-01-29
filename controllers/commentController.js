const express = require('express')
const router = express.Router()
const Post = require('../models/post')


router.post('/:postId', async (req, res, next) => {
  console.log(req.body);
  const post = await Post.findById(req.params.postId)
  const commentToAdd = {
    text: req.body.text,
    user: req.session.userId
  }
  post.comments.push(commentToAdd)
  await post.save() 
  res.redirect('/posts')
})



module.exports = router 
