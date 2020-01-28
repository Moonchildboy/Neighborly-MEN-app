const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Unit = require('../models/unit')


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


// my community

router.get('/community', async (req, res, next) => {
	try{
		// find the unit that has logged in user as a tenant

		// bldg = unit.building

		// get all units that have this building .. populate(tenant) another query
		
		const unit = await Unit.find({tenants: {"$in": req.session.userId}})
		console.log(req.session.userId);
		console.log('this is the unit>>>>>');
		console.log(unit);
		console.log(unit[0].building);
		res.render('users/community.ejs')
	}catch(err) {
		next(err)
	}
})








module.exports = router
