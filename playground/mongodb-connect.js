// const MongoClient = require('mongodb').MongoClient;
// var user = {name:'Yul', age:56};
// var {name} = user;
// console.log(name);

const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Yul Williams',
  //   age: 56,
  //   location:'Upper Marlboro, MD'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert into Users collection', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
