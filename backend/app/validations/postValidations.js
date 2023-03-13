const {body, param} = require("express-validator");
module.exports = {
    data: () => {
        return [
            //contenu
            body('content').isString().notEmpty().isLength({max:40})
        ]

    },
    get: () => {
        return [
            param('userId').isInt().notEmpty()
        ]
    }
}