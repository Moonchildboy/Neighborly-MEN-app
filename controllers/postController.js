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

	console.log(allPosts);
  res.render('posts/index.ejs', {posts: allPosts})
})// end of index route

router.get('/:id/edit', async (req, res, next) => {
	Post.findById(req.params.id, (err, foundPost) => {
		console.log('hitting the edit route',req.param.id);
	if(err) {
      next(err)
    } else {
      res.render('posts/edit.ejs', { 
        post: foundPost
      })
    }
  })
}) //end of edit route

module.exports = router 

