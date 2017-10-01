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

    // deleteMany
    db.collection('Users').deleteMany({ name: 'Danilo'}).then(
      (result) => {
        console.log(result);
      }
    );

    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch'}).then(
    //   (result) => {
    //     console.log(result);
    //   }
    // );

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('59ce67ded8be905faba72cf5') }).then(
      (result) => {
        console.log(result);
      }
    );

    //db.close();
  });
