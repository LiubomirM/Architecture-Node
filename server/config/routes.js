const controllers = require('../constrollers')
const auth = require('./auth')

module.exports = (app) => {
    app.get('/', controllers.home.index)
    app.get('/about', controllers.home.anout)

    // access authentication rules
    // app.get('/about', auth.isAuthenticated, controllers.home.anout)
    // app.get('/about', auth.isInRole('Admin'), controllers.home.anout)
    

    app.get('/users/register', controllers.users.registerGet)
    app.post('/users/register', controllers.users.registerPost)
    app.post ('/users/logout', controllers.users.logout)
    app.get ('/users/login', controllers.users.loginGet)
    app.post ('/users/login', controllers.users.loginPost)

    app.all('*', (req, res) => {
        res.status(404)
        res.send('404 Not Found!')
        res.end()
    })
}