const express = require('express')
const router = express.Router()
const Post = require('../models/post')



router.get('/new', (req, res, next) => {
	res.render('posts/new.ejs')
})

router.post('/', async (req, res, next) => {
	const createdPost = await Post.create({
		title: req.body.title,
		content: req.body.content
		// create date later
	})
	res.redirect('posts/index.ejs')
}) //end of create route

router.get('/', (req, res, next) => {
	// const allPosts = await Post.find({}).populate('...')
  res.render('posts/index.ejs')
})// end of index route

module.exports = router 

