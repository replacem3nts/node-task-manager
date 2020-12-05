require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndRemove('5fcaa1eeada6ab56976c68d8')
  .then(result => {
    console.log(result);
    return Task.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
