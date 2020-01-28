const mongoose = require('mongoose')
const User = require('./user')

const unitSchema = new mongoose.Schema({
	number: {
		type: String,
		required: true
	},
	tenants: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}],
	// unit = Unit.find(id: {$in: tenants})
	building: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Building'
	}
})

module.exports = mongoose.model('Unit', unitSchema)