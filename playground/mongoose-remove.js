const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then( (result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5a3ebb88e4dcfc243c0c7700').then((todo) => {
  console.log(todo);
}).catch((e) => console.log(e));
