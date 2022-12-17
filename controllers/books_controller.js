// dependencies
const express = require('express')
// const bakerSeedData = require('../models/baker_seed.js')
const Book = require('../models/book.js')
const book = express.Router()

// index route
book.get('/', (req, res) => {
    Book.find()
    .then(foundBooks => {
        res.send(foundBooks)
    })
})

//Seed

book.get('/seed', (req, res) =>{
    Book.insertMany(bookSeedData)
    .then(sucess => {
        res.send("Books seeded successfully")
    })
})   



// export
module.exports = book                    

