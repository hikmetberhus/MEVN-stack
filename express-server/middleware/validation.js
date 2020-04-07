const {validator, applyRules} = require('../helper/validate')

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
    },
    isRight: {
        "question_id": "required",
        "answer": "required|min:1|max:1"
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

const isRight = (req, res, next) => {
    applyRules(req, res, next, rules.isRight)
}

module.exports = {
    register,
    login,
    users,
    isRight
}