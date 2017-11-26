const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id:new ObjectID('5a1b3a1756e18f9a152eed5f')}).toArray().then( (docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch Todos', err);
  // });

  db.collection('Users').find({
    name:'Yul'}).toArray().then( (docs) => {
    console.log('Users')
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log('Unable to fetch Todos', err);
  });


  // db.collection('Todos').find().count().then( (count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) =>{
  //   console.log('Unable to fetch Todos', err);
  // });
  // db.close();
});
