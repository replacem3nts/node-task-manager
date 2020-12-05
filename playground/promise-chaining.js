require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5fc94d3b5d41e349748d9e09', { age: 14 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 14 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
