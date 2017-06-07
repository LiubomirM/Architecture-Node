const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

let env = process.env.NODE_ENV || 'development'
let port = process.env.PORT || 3000

let app = express()

app.get('/', (req, res) => {
    mongoose.connect('mongodb://localhost:27017/generictemlate')
        .then(() => {
            console.log('Mongo is ready')

            res.send('Hi!')
        })   
})

app.listen(port)

console.log('Server listening on port: ' + port)