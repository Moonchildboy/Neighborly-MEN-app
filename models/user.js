const mongoose = require('mongoose')
const User = require('./user')
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
		},
	password: {
		type: String,
		required: true
		},
	firstName: String,
	lastName: String,
	image: String,
	aboutMe: String,
	unit: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Unit',
	}
})


module.exports = mongoose.model('User', userSchema)