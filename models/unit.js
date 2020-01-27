const mongoose = require('mongoose')
const User = require('./user')
const unitSchema = new mongoose.Schema({
	number: {
		type: Number,
		required: true
		},
	tenants: [String]
})
module.exports = mongoose.model('Unit', unitSchema)