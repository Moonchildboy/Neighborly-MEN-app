const express = require('express')
const router = express.Router()
const Building = require('../models/building')
const Unit = require('../models/unit')
const User = require('../models/user')


router.get('/new', (req, res) => {
	res.render('buildings/new.ejs')	
})

router.get('/unit', async (req, res) => {
	let message = req.session.message
  	let messageStatus = req.session.messageStatus

  	req.session.message = undefined
  	req.session.messageStatus = undefined

	const foundBuildings = await Building.find({}).populate('units')
	const foundUsers = await User.find({})

	res.render('buildings/unit.ejs', {
		users: foundUsers,
		buildings: foundBuildings,
		message: message,
		status: messageStatus
	})	
})

router.post('/', async (req, res, next) => {
	try {
		req.body.landlord = req.session.userId
		const newBuilding = await Building.create(req.body)
		req.session.building = newBuilding
		res.redirect('/buildings/unit')
	} catch(err) {
		next(err)
	}
})

router.post('/unit', async (req, res, next) => {
	try{
		console.log("this is req.body in the post /unit route >>", req.body);
		const newUnit = await Unit.create(req.body)
		req.session.message = 'Unit sucessfully added! Check out to myCommunity to see.'
		req.session.messageStatus = 'good'
		res.redirect('/buildings/unit')
	} catch(err) {
		next(err)
	}
}) // create route to be made into a render
router.get('/unit/:id/edit', async (req, res, next) => {
	try{
		const foundBuildings = await Building.find({}).populate('units')
		const foundUsers = await User.find({})
		const foundUnit = await Unit.findById(req.params.id)
		res.render('buildings/edit.ejs', {
			unit: foundUnit,
			buildings: foundBuildings,
			users: foundUsers
		})
	}catch(err) {
		next(err)
	}
}) 








module.exports = router
