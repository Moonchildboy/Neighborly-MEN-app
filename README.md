# Neighborly-MEN-app
































































==========================================================
MODELS
==========================================================

User 
* username: String
* password: String
* isLandLord: Boolean

Post
* title: String
* content: String
* comments: [Comment.schema]

Comment
* content: String

Building 
* address: String
* units: [{
	unitNum: Number,
	occupants: [String]
}]

Profile
* name: String
* image: String (upload file later)
* aboutMe: String
* reviews: [Comment.schema]
* building: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Building'
} 





