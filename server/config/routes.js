const controllers = require('../constrollers')

module.exports = (app) => {
    app.get('/', controllers.home.index)
    app.get('/about', controllers.home.anout)

    app.get('/users/register', controllers.users.registerGet)
    app.post('/users/register', controllers.users.registerPost)

    app.all('*', (req, res) => {
        res.status(404)
        res.send('404 Not Found!')
        res.end()
    })
}