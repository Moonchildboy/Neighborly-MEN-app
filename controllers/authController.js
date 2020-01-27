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
		messageStatus: messageStatus
	})
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
		req.session.message = `Username ${desiredUsername} is taken.`
		req.session.messageStatus = 'bad'
		res.redirect('/auth/register')
	} else {
		const createdUser = await User.create({
      	username: desiredUsername,
      	password: desiredPassword
    })
		console.log(createdUser);
		req.session.userId = createdUser._id
		req.session.username = createdUser.username
		req.session.message = (`Welcome to Neighborlie ${createdUser.username}`)
		req.session.loggedIn = true
		req.session.messageStatus = "good"
		res.redirect('/')
	}

})


router.get('/login', (req, res) => {
	res.render('login.ejs')
})

router.get('/login', async (req, res, next) => {
	try{
		const user = await User.findOne({ username: req.body.username })

		if(!user) {
			console.log('bad username');
			res.redirect('/auth/login')
		}
	}catch(err) {
		next(err)
	}
})














module.exports = router 