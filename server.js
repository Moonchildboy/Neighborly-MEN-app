require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')


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
const buildingController = require('./controllers/buildingController')
app.use('/buildings', buildingController)
// const userController = require('./controllers/userController')
// app.use('/users', userController)





// ROUTES
app.get('/', (req, res) => {
	res.render('home.ejs')	
})




















app.listen(PORT, () => {
	console.log('Server running on port: ' + PORT);
})