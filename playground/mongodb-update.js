// const MongoClient = require('mongodb').MongoClient;

// destructuring ES6:  example 1
// const {MongoClient} = require('mongodb');

// destructuring ES6:  example 2
const {
  MongoClient,
  ObjectID
} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('59d0b4dcaeabf65b6408c690')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then(
    //   (result) => {
    //     console.log(result);
    //   }
    // );

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("59ce5dff379d5455c0234a78")
    }, {
      $set: {
        name: 'Danilo'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then(
      (result) => {
        console.log(result);
      }
    );

    //db.close();
  });
