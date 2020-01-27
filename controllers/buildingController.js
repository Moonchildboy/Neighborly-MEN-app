const express = require('express')
const router = express.Router()
const Building = require('../models/building')
const Unit = require('../models/unit')


router.get('/new', (req, res) => {
	res.render('buildings/new.ejs')	
})

router.get('/unit', (req, res) => {
	res.render('buildings/unit.ejs')	
})

router.post('/', async (req, res, next) => {
	try {
		req.body.landlord = req.session.userId
		const newBuilding = await Building.create(req.body)
		console.log(newBuilding);
		res.redirect('/buildings/unit')
	} catch(err) {
		next(err)
	}
})

router.post('/unit', async (req, res, next) => {
	try{
		const NewUnit = await Unit.create(req.body)
		console.log(NewUnit);
		res.redirect('/buildings/unit')
	}catch(err) {
		next(err)
	}
})





module.exports = router
