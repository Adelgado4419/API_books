//dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')


//config
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )


//middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))



app.get('/', (req, res) =>{
    res.send('Welcome to books api')
})


//landing page
const booksController = require('./controllers/books_controller.js')
app.use('/breads', breadsController)


// 404 catch all has to be after landing page
app.get('*', (req, res) => {
    res.send('404')
})


app.listen(PORT, () => {
    console.log('listening on port', PORT);
})
