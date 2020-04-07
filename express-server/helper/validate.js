const Validator = require('validatorjs')

const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages)
    validation.passes(() => callback(null, true))
    validation.fails(() => callback(validation.errors, false))
}

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

module.exports = {
    validator,
    applyRules
}
