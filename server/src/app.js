const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// connecting to Database
const mongoose = require('mongoose')
const db = "mongodb+srv://admin:zFGRKXn4aHKfKdX@myproject-k5h8e.mongodb.net/Cinda?retryWrites=true"

mongoose.connect(db, err => {
    if (err) {
      console.error('Error!' + err)
    } else {
      console.log('Connected to Database')
    }
  });

// import API Routers
const main = require('./roters/main')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Set API Routes
app.use('/api', [
    main
])

// Catch all other routes and return the index file
app.get('/*', (req, res) => {
    res.send("Error!");
});

app.listen(process.env.PORT || 8081)