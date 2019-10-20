require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//starts the app
const app = express()

//set app to be able to receive json requests
app.use(express.json())
//set able to be access in any domain
app.use(cors())

// Starts the bd connection
mongoose.connect(process.env.MONGOBD_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
//call models schemas after connect
requireDir('./src/models')

//Routes
app.use('/api', require('./src/routes'))

//start app to listen port 3333
app.listen(process.env.PORT ||3333)