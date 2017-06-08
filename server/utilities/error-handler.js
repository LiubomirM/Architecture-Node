module.exports = {
    handleMongooseError: (err) => {
        let firstKey = Object.keys(err.errors)[0]
        let message = err.errors[firstKey].message
        return message
    }
}

//to use it go to the controler, requre errorHandler, in catch statement create message = errorHandler.handleMongooseError(err) and add messagte to globalError