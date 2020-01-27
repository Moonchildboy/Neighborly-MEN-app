const express = require('express')
const router = express.Router()
const User = require('../models/user')






router.get('/register', (req, res) => {
	res.render('register.ejs')
})




router.post('/register', async (req, res, next) => {
	console.log(req.body);
	const desiredUsername = req.session.username
	const desiredPassword = req.session.password

	const userWithUsername = await User.findOne({
		username: desiredUsername
	})

	if (userWithUsername) {
		console.log('username exists');
	}
	req.session.message = `Username ${desiredUsername} is taken.`
	req.session.messageStatus = 'bad'
	res.redirect('/auth/register')
	
})












module.exports = router 