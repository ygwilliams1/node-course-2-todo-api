const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a2354466c9895a01b8d262c';

var uid = '5a2f3a85283d59477d5ce4e6';

// if (!ObjectId.isValid(id)) {
//   console.log('Id not valid');
// }
//
// // Todo.find({
// //   _id:id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //   _id:id
// // }).then((todo) => {
// //   console.log('Todo', todo);
// // });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById(uid).then((user) => {
  if(!user) {
    console.log('User not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
