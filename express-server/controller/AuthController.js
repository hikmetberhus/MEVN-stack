const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

/* Models */
const User = require('../models/Users')

exports.register = (req, res) => {
    let {email, name, surname, password} = req.body

    if(!email || !name || !surname || !password)
    {
        res.status(400).send({ message: 'Content can not be empty!'})
        return
    }

    bcrypt.hash(password, 10)
        .then((hash) => {
            let user = new User({
                email,
                name,
                surname,
                password: hash
            })

            user.save()
                .then((data) => {
                    res.status(201).send(data)
                })
                .catch((err) => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the users."
                    })
                })
        })
}

exports.login = (req, res) => {
    let {email, password} = req.body

    if (!email || !password)
    {
        res.status(400).send({ message: 'Email or Password cannot be empty!'})
        return
    }

    User.findOne({ email }, (err, user) => {
        if (err)
        {
            res.status(500).send({
                message: err.message || "Some error occurred while finding the user."
            })

            return
        }

        if (!user)
        {
            res.status(400).send({
                message: 'Authentication failed, user not found!'
            })
        }else{
            bcrypt.compare(password, user.password).then((result) => {
                if (!result)
                {
                    res.status(400).send({
                        message: 'Authentication failed, wrong password!'
                    })
                }else{
                    let payload = {
                        _id: user._id
                    }

                    let token = jwt.sign(payload, req.app.get('api_secret_key'), {
                        expiresIn: 720 // 12 hour
                    })

                    res.status(200).send({
                        user: {
                            _id: user._id,
                            email: user.email,
                            surname: user.surname,
                        },
                        token
                    })
                }
            })
        }
    })
}