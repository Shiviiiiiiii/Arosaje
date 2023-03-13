const {body,param} = require('express-validator')

module.exports = {
    data: () => {
        return [
            //lastname
            body('lastname').isString(),
            //firstname
            body('firstname').isString().notEmpty(),
            //password
            body('password').isString().notEmpty(),
            //email
            body('email').isEmail().notEmpty(),
        ]
    },
    put: () => {
        return [
            //lastname
            body('lastname').isString(),
            //firstname
            body('firstname').isString().notEmpty(),
            //email
            body('email').isEmail().notEmpty(),
            //password
            body('password')
        ]
    },
    get: () => {
        return [
            param('id').isInt().notEmpty()
        ]
    }
}