const mongoose = require('mongoose')


// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
 // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})


// mongoose.connect(
//     process.env.MONGO_URI,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }
//   )
//   .then(() => {
//     console.log('Connected to MongoDB:', process.env.MONGO_URI);
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error.message);
//   });



mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected to mongo: ', process.env.MONGO_URI))