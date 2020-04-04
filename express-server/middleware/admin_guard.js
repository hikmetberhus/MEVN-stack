const jwt = require('jsonwebtoken')

const User = require('../models/Users')

module.exports = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.body.token || req.query.token

    if (token)
    {
        jwt.verify(token, req.app.get('api_secret_key'), (err, decoded) => {
            if (err)
            {
                res.status(401).send({ message: 'Unauthorized | invalid token!'})
                return
            }

            User.findById(decoded._id)
                .then((data) => {
                    if (data.permission === 'admin')
                    {
                        req.decode = decoded
                        next()
                    }else{
                        res.status(401).send({ message: 'Unauthorized | invalid token!'})
                    }
                })
                .catch((err) => {
                    res.status(401).send({ message: 'Unauthorized | invalid token!'})
                })

        })
    }else {
        res.status(401).send({
            message: 'Unauthorized | No token provided!'
        })
    }
}