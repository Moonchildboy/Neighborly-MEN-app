const express = require('express')
const router = express.Router()
const User = require('../models/user')






router.get('/register', (req, res) => {
	res.render('register.ejs')
})






router.post('/register', async (req, res, next) => {
	console.log(req.body);
	res.redirect('/auth/register')
})












module.exports = router 