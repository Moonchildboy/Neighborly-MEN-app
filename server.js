require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT



// MIDDLEWARE
app.use(express.static('public'))

// CONTROLLERS
const authController = require('./controllers/authController')
app.use('/auth', authController)

// ROUTES




app.get('/', (req, res) => {
	res.render('home.ejs')	
})



















app.listen(PORT, () => {
	console.log('Server running on port: ' + PORT);
})