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

    //db.collection('Todos').find().toArray().then(
    //db.collection('Todos').find({ completed: false}).toArray().then(
    // db.collection('Todos').find({
    //   _id: new ObjectID('59ce6a81d98d2c8ef7405f81')
    // }).toArray().then(
    //   (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //   }, (err) => {
    //    console.log('Unable to fetch todos', err);
    //   }
    // );


    // db.collection('Todos').find().count().then(
    //   (count) => {
    //     console.log(`Todos count: ${count}`);
    //
    //   }, (err) => {
    //     console.log('Unable to fetch todos', err);
    //   }
    // );

    db.collection('Users').find({ name: "Danilo"}).count().then(
      (count) => {
        console.log(`Users count for 'Danilo': ${count}`);

      }, (err) => {
        console.log('Unable to fetch todos', err);
      }
    );

    db.collection('Users').find({ name: "Danilo"}).toArray().then(
      (docs) => {
        console.log(JSON.stringify(docs, undefined, 2));

      }, (err) => {
        console.log('Unable to fetch todos', err);
      }
    );

    //db.close();
  });
