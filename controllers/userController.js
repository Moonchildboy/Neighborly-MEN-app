const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Unit = require('../models/unit')
const Building = require('../models/building')


router.get('/', async (req, res, next) => {
	try{
		const user = await User.findById(req.session.userId)
		res.render('users/show.ejs', {user: user})
	} catch(err) {
		next(err)
	}
})


// my community

router.get('/community', async (req, res, next) => {
	try{
		const unit = await Unit.findOne({tenants: {"$in": req.session.userId}})
		if (unit) {
			const buildingId = unit.building
			const building = await Building.findById(buildingId)
			console.log(building);
			const unitsInBuilding = await Unit.find({building: buildingId}).populate('tenants')
			console.log("units in building", unitsInBuilding);
			res.render('users/community.ejs', {
				units :unitsInBuilding,
				address: building.address
			})
		} else {
			const unitsInBuilding = []
			const address = ''
			res.render('users/community.ejs', {
				units :unitsInBuilding,
				address: address
			})
		}
	}catch(err) {
		next(err)
	}
})








module.exports = router
