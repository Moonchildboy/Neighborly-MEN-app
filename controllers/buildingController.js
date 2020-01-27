const express = require('express')
const router = express.Router()
const User = require('../models/building')


router.get('/new', (req, res) => {
	res.render('buildings/new.ejs')	
})





module.exports = router
