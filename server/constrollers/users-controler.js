const encriptyon = require('../utilities/encryption')
const User = require('../data/User')

module.exports = {
    registerGet: (req, res) => {
        res.render('users/register')
    },
    registerPost: (req, res) => {
        let reqUser = req.body

        let salt = encriptyon.generateSalt()
        let hashedPassword = encriptyon.generateHashedPassword(salt, reqUser.password)

        User.create({
            username: reqUser.username,
            firstName: reqUser.firstName,
            lastName: reqUser.lastName,
            salt: salt,
            hashedPass: hashedPassword
        }).then(user => {
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err
                    res.render('users/register', user)
                }

                res.redirect('/')
            })
        })
        
    }
}