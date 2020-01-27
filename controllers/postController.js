const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
	// const allPosts = await Post.find({}).populate('...')
  res.render('posts/index.ejs')
})