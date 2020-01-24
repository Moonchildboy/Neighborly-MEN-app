# Neighborly-MEN-app

LL == Land Lord
T == Tenant

USER STORIES ::

	 Registration:

		renders forms:
			registration page:
				- takes user name
				- takes password
				- specify user type (LL or T)

	If LL:
		redirected to their bldg. form (LL view)
				- addr.
				- units. 

		redirected to their prof. form (LL view)
			prof(new):
				- takes image 
				- takes desc.
				- name 

		redirects to prof. show page
			prof(show): 
				- name 
				- about me
				- reviews
				- ratings
				- addresses
	
	LL Login: 
		redirected to the main feed (LL view)
			feed: 
				- contains announcements, etc, from all users
				-  

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





