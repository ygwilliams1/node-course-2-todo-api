const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a1e11050ba5f62065ce13cc')
  // }, {
  //   $set:{
  //     completed:true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({name:'Jen'},
  {$set:{name:'Yul'}, $inc:{age:1}}, {
        returnOriginal:false
  }).then( (result) => {
    console.log(result);
  });

  // db.close();
});
