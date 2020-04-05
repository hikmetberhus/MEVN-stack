const applyRules = require('../helper/validate')

const rules = {
    register: {
        "email": "required|email",
        "name": "required|string|min:3|max:50",
        "surname": "required|string|min:2|max:50",
        "password": "required|string|min:6"
    },
    login: {
        "email": "required|email",
        "password": "required|string|min:6"
    },
    users: {
        "email": "required|email",
        "name": "required|string|min:3|max:50",
        "surname": "required|string|min:2|max:50",
        "password": "required|string|min:6"
    }
}

const register = (req, res, next) => {
    applyRules(req, res, next, rules.register)
}

const login = (req, res, next) => {
    applyRules(req, res, next, rules.login)
}

const users = (req, res, next) => {
    applyRules(req, res, next, rules.users)
}

module.exports = {
    register,
    login,
    users
}