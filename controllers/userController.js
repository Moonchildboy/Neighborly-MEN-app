const express = require('express')
const router = express.Router()
const User = require('../models/user')






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









module.exports = router
