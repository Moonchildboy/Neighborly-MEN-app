const express = require('express')
const router = express.Router()
const Building = require('../models/building')
const Unit = require('../models/unit')
const User = require('../models/user')


router.get('/new', (req, res) => {
	res.render('buildings/new.ejs')	
})

router.get('/unit', async (req, res) => {
	const foundBuildings = await Building.find({})
	const foundUsers = await User.find({})
	res.render('buildings/unit.ejs', {
		users: foundUsers,
		buildings: foundBuildings
	})	
})

router.post('/', async (req, res, next) => {
	try {
		req.body.landlord = req.session.userId
		const newBuilding = await Building.create(req.body)
		console.log(newBuilding);
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
		//find building to push new Unit into by id
		const foundBuilding = await Building.findById(req.body.buildings)
		console.log('');
		foundBuilding.units.push(newUnit)
		foundBuilding.save()
		res.redirect('/buildings/unit')
	} catch(err) {
		next(err)
	}
}) // create route to be made into a render




module.exports = router
