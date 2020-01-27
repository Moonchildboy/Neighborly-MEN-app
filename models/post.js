const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({

Post:{ 
 title: String,
 content: String,
 // comments: [Comment.schema],
 building: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Building'
``	}
``}
}) 

module.exports = mongoose.model('Post', postSchema)