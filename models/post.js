const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
	title: String,
	content: String,
	date: {
		type: Date,
		default: Date.now
	},
	// comments: [Comment.schema],
	building: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Building'
		}
}) 

module.exports = mongoose.model('Post', postSchema)