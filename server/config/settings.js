const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'localhost/generictemplate',
        port: 3000
    },
    staging: {
    },
    production: {
        port: process.env.PORT
    }
}