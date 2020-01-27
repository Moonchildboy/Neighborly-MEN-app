const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
		},
	password: {
		type: String,
		required: true
		},
	firstName: {
		type: String,
		required: true
		},
	lastName: {
		type: String,
		required: true
		},
	image: String,
	aboutMe: String,
	unit: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Unit',
	}
})


module.exports = mongoose.model('User', userSchema)