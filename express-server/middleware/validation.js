const validator = require('../helper/validate')

const applyRules = (req, res, next, rules, customMessage) => {
    validator(req.body, rules, customMessage, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                })
        } else {
            next()
        }
    })
}

const register = (req, res, next) => {
    let validationRule = {
        "email": "required|email",
        "name": "required|string|min:3|max:50",
        "surname": "required|string|min:2|max:50",
        "password": "required|string|min:6"
    }

    applyRules(req, res, next, validationRule)
}

const login = (req, res, next) => {
    let validationRule = {
        "email": "required|email",
        "password": "required|string|min:6"
    }

    applyRules(req, res, next, validationRule)
}

module.exports = {
    register,
    login
}