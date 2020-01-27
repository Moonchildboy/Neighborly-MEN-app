const mongoose = require('mongoose')
const buildingSchema = new mongoose.Schema({
	address: {
		type: String,
		required: true
		},
	floors: Number,
	landlord: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
})

module.exports = mongoose.model('Building', buildingSchema)