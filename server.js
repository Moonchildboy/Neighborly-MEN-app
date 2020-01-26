require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT






// middleware
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))












// controllers
const authController = require('./controllers/authController')
app.use('/auth', authController)





app.get('/', (req, res) => {
	res.render('home.ejs')	
})



















app.listen(PORT, () => {
	console.log('Server running on port: ' + PORT);
})