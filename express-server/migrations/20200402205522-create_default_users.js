const bcrypt = require('bcryptjs')

const User = require('../models/Users')

let password = bcrypt.hashSync('123456', 10)

const admin = new User(
    {
      email: 'admin@mail.com',
      name: 'hikmet',
      surname: 'berhus',
      password: password,
      permission: 'admin'
    }
)


const user = new User(
    {
      email: 'user@mail.com',
      name: 'hikmet',
      surname: 'berhus',
      password: password,
      permission: 'user'
    }
)


module.exports = {
  up(db) {
      db.collection('users').insertOne(user)
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          })
    db.collection('users').insertOne(admin)
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
  },

  down(db) {

    db.collection('users').findOneAndDelete({email: user.email})
        .then((err) => {
          if (!err)
            console.log('Data is successfuly removed.')
        })
    db.collection('users').findOneAndDelete({email: admin.email})
        .then((err) => {
          if (!err)
            console.log('Data is successfuly removed.')
        })
  }
};
