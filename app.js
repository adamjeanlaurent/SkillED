const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require('ejs')
app.set("view engine", "ejs"); 

// TODO: Use correct path for DB
mongoose.connect(MONGO_URI, 
{useNewUrlParser: true});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

// Routes
const landingRouter = require('./routes/landing')

app.use('/', landingRouter)

// Choose port
app.listen(3000, () => console.log('Listening on port 3000'))
