const bcrypt = require('bcryptjs')

/* Models */
const User = require('../models/Users')

exports.index = (req, res) =>{
    User.find({permission: 'admin'})
        .then((users) => {
            if (!users)
            {
                res.status(204).send({message: 'Users not found!' })
            }

            res.status(200).send({ users })
        })
        .catch((err) => {
            res.status(500).send({message: err.message })
        })
}

exports.show = (req, res) => {
    let user_id = req.params.id

    User.findById(user_id)
        .then((user) => {
            if (!user)
            {
                res.status(204).send({message: 'User not found!' })
                return
            }

            res.status(200).send({ user })
        })
        .catch((err) => {
            res.status(500).send({message: err.message})
        })
}

exports.create = (req, res) => {
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
                password: hash,
                permission: 'admin'
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

exports.update = (req, res) => {
    let user_id = req.params.id
    let {email, name, surname, password} = req.body

    if (!user_id)
    {
        res.status(400).send({message: 'Bad request. Id is the required parameter!'})
        return
    }

    if(!email || !name || !surname || !password)
    {
        res.status(400).send({ message: 'Content can not be empty!'})
        return
    }

    bcrypt.hash(password, 10).then((hash) => {
        User.findByIdAndUpdate(user_id, {
            email,
            name,
            surname,
            password: hash
        }, (err) => {
            if (err)
            {
                res.status(500).send({message: err.message})
                return
            }

            res.status(200).send({
                success: true,
                message: 'User update successfully.'
            })
        })
    })
}

exports.destroy = (req, res) => {
    let user_id = req.params.id

    if (!user_id)
    {
        res.status(400).send({message: 'Bad request. Id is the required parameter!'})
        return
    }

    User.findByIdAndRemove(user_id)
        .then(() => {
            res.status(200).send({
                success: true,
                message: 'User destroyed successfully.'
            })
        })
        .catch((err) => {
            res.status(500).send({message: err.message})
        })
}