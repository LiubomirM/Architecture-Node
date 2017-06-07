let env = process.env.NODE_ENV || 'development'
let settings = require('./server/config/settings')[env]
const express = require('express')
let app = express()

require('./server/config/database')(settings)
require('./server/config/express')(app)
require('./server/config/routes')(app)

app.listen(settings.port)

console.log('Server listening on port: ' + settings.port)