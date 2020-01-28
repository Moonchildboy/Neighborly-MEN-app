const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Unit = require('../models/unit')
const Building = require('../models/building')



router.get('/', async (req, res, next) => {
	try{
		const user = await User.findById(req.session.userId)
		console.log(user.unit);
		console.log(user);
		res.render('users/show.ejs', {user: user})
	} catch(err) {
		next(err)
	}
})


// my community

router.get('/community', async (req, res, next) => {
	try{


		res.render('users/community.ejs')
	}catch(err) {
		next(err)
	}
})








module.exports = router
