# Neighborly-MEN-app

LL == Land Lord
T == Tenant
==========================================================
USER STORIES ::
==========================================================


Registration:

		renders forms:
			registration page (new):
				- takes user name
				- takes password
				- specify user type (LL or T)
		then, 

	If LL:
		redirected to their bldg. form (new)
				- addr.
				- units. 
		then, 

	If LL or T:	
		redirected to their prof. form 
			prof(edit):
				- takes image 
				- takes desc.
				- name 

Logged in: 

		rendered prof. show page
			Nav: occupants :: feed :: new 
			 :: my prof
			my prof(show): 
				- img
				- name 
				- about me
				- reviews
				- ratings
				- addresses
				- edit btn
		clicked feed, 

		feed renders
			Nav: occupants :: new post :: my prof 
			feed (index): 
				- contains announcements, etc, from all users
				- make comments on anonymous posts
				- ...
		clicked occupants, 

		render of occupants index page 
	If T: 
			Nav: feed :: new post :: my prof
			occupants (index): 
				- LL prof page
				- View individual tenants profiles
				- list of units containing residents
				- contact entire units anonymously * 
	If LL: 
			Nav: feed :: new post :: my prof :: edit page
			occupants (index): 
				- list of units containing residents
				- edit btn (+ - residents and/or units)


==========================================================
MODELS ::
==========================================================

User 
* username: String
* password: String
* firstName: String
* lastName: String
* image: String (upload file later)
* aboutMe: String
* unit: {
	objectid
	ref: unit
}

Post
* title: String
* content: String
* comments: [Comment.schema]
* building: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Building'
} 
* date: Date

Comment
* content: String
* date

Building 
* address: String
* landlord: {
	ref: 'User'
}

Unit {
	nameNumber: String
	building: {
		objectid
		ref building
	}
}

Review {
	reviewer: {
		objectid
		ref: User
	}
	reviewee: {
		objectid
		ref: User
	}
	date: Date
}






