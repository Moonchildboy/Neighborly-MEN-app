const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const Unit = require('../models/unit')
const Building = require('../models/building')



router.get('/new', (req, res, next) => {
	res.render('posts/new.ejs')
})

router.post('/', async (req, res, next) => {
	const unit = await Unit.findOne({tenants: {"$in": req.session.userId}})
	const buildingId = unit.building
	req.body.user = req.session.userId
	req.body.building = buildingId
	const createdPost = await Post.create(req.body)
	res.redirect('posts/')
}) //end of create route

router.get('/', async (req, res, next) => {
	const unit = await Unit.findOne({tenants: {"$in": req.session.userId}})
	if (unit) {
		const buildingId = unit.building
		const allPosts = await Post.find({building: buildingId}).populate('user')
		console.log(allPosts);
	  	res.render('posts/index.ejs', {posts: allPosts})
	}
	else {
		const allPosts = []
		res.render('posts/index.ejs', {posts: allPosts})	
	}
})// end of index route

router.get('/:id/edit', async (req, res, next) => {
	Post.findById(req.params.id, (err, foundPost) => {
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

