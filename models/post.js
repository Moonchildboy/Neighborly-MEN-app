const mongoose = require('mongoose')
const Comment = require('./comment')
const postSchema = new mongoose.Schema({
	title: String,
	content: String,
	date: {
		type: Date,
		default: Date.now
	},
	comments: [Comment.schema],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	building: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}) 

module.exports = mongoose.model('Post', postSchema)