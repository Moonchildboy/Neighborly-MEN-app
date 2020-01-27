const express = require('express')
const router = express.Router()
const Post = require('../models/post')


router.get('/', (req, res, next) => {
	// const allPosts = await Post.find({}).populate('...')
  res.render('posts/index.ejs')
})

module.exports = router 