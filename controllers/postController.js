const express = require('express')
const router = express.Router()
const Post = require('../models/post')



router.get('/new', (req, res, next) => {
	res.render('posts/new.ejs')
})

router.post('/', async (req, res, next) => {
	console.log(req.body);
	const createdPost = await Post.create(req.body)
		// create date later
	console.log("createdPost:", createdPost);
	res.redirect('posts/')
}) //end of create route

router.get('/', async (req, res, next) => {
	console.log('hitting the index route');
	const allPosts = await Post.find({})
  res.render('posts/index.ejs', {posts: allPosts})
})// end of index route

router.get('/', async (req, res, next) => {
	
}) //end of show route

module.exports = router 

