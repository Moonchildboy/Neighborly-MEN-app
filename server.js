require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const app = express()
const PORT = process.env.PORT


require('./db/db')


// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))


app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false, 
	saveUninitialized: false
}))







// CONTROLLERS
const authController = require('./controllers/authController')
app.use('/auth', authController)
const postController = require('./controllers/postController')
app.use('/posts', postController)





// ROUTES
app.get('/', (req, res) => {
	res.render('home.ejs')	
})



















app.listen(PORT, () => {
	console.log('Server running on port: ' + PORT);
})