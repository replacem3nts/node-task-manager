require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndRemove('5fcaa1eeada6ab56976c68d8')
//   .then(result => {
//     console.log(result);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, completed) => {
  await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount('5fcab9c591c6d25e73878d37', false)
  .then(count => console.log(count))
  .catch(e => console.log(e));
