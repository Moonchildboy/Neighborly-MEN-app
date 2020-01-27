const express = require('express')
const router = express.Router()
const User = require('../models/user')






router.get('/register', (req, res) => {
	let message = req.session.message
  	let messageStatus = req.session.messageStatus

  	req.session.message = undefined
  	req.session.messageStatus = undefined

	res.render('register.ejs', {
		message: message,
		status: messageStatus
	})
})




router.post('/register', async (req, res, next) => {
	console.log(req.body);
	const desiredUsername = req.body.username
	const desiredPassword = req.body.password

	const userWithUsername = await User.findOne({
		username: desiredUsername
	})

	if (userWithUsername) {
		console.log('username exists');
		req.session.message = `Username ${desiredUsername} is taken.`
		req.session.messageStatus = 'bad'
		res.redirect('/auth/register')
	} else {
		const createdUser = await User.create(req.body)
		console.log(createdUser);
		req.session.userId = createdUser._id
		req.session.username = createdUser.username
		req.session.message = (`Welcome to Neighborlie, ${createdUser.username}.`)
		req.session.loggedIn = true
		req.session.messageStatus = "good"
		res.redirect('/')
	}
})


router.get('/login', (req, res) => {
	res.render('login.ejs')
})

router.post('/login', async (req, res, next) => {
	try{
		const user = await User.findOne({ username: req.body.username })

		if(!user) {
			console.log('bad username');
			res.redirect('/auth/login')
		} else {
			if (user.password == req.body.password) {
				req.session.loggedIn = true
			    req.session.userId = user._id
			    req.session.username = user.username
			    res.redirect('/posts')
			} else {
				console.log("bad password")
				res.redirect('/auth/login')
			}
		}
	}catch(err) {
		next(err)
	}
})














module.exports = router 