const User = require('../models/Users')

const user = new User({
  email: 'hikmetberhus@gmail.com',
  name: 'hikmet',
  surname: 'berhus',
  password: '123456',
})

module.exports = {
  up(db) {

    db.collection('users').insertOne(user)
        .then((err, data) => {
          if (err)
            console.log(err)

          console.log(data)
        })
  },

  down(db) {

    db.collection('users').findOneAndDelete({email: user.email})
        .then((err) => {
          if (!err)
            console.log('Data is successfuly removed.')
        })
  }
};
