const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then( (result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name:'Yul'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id:ObjectID('5a1b264a5cbd693100bc1e25')}).then( (result) => {
    console.log(result);
  });
//5a1b3a1756e18f9a152eed5f

  // db.close();
});
