const mongoose = require('mongoose')
const config = require('../migrate-mongo-config')

module.exports = () => {
    mongoose.connect(config.mongodb.url + config.mongodb.databaseName , config.mongodb.options)

    mongoose.connection.on('open', () => {
        console.log('Mongodb connected.')
    })

    mongoose.connection.on('error', (err) => {
        console.log('Mongodb connection error: ', err)
    })
}