var { response } = require('express');
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017'; //TODO THIS COULD BE WRONG

// Database Name
const dbName = 'petsInfo'; //TODO rename db

// Create a new MongoClient
const client = new MongoClient(url);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// endpoint
router.get('/findDocuments', function petFind(request, response) {
  const name = request.query.name; //query parameter

  // Use connect method to connect to the Server
  client.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    }

      const db = client.db(dbName);

      var result = findDocuments(db, function () {
          client.close();
      });

      response.status(200); //http status code
      response.send(result); //http response
  });

});


// endpoint
router.patch('/updateDocument', function petUpdate(request, response) {

  // Use connect method to connect to the Server
  client.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    }

      const name = request.query.name; //query parameter

      const db = client.db(dbName);

      var result = updateDocument(db, name, function () {
          client.close();
      });

      response.status(200); //http status code
      response.send(result); //http response
  });

});

router.get('/findOne', function findPet(request, response) {

  client.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    }

      const name = request.query.name; //query parameter

      const db = client.db(dbName);

      var result = findOne(db, name, function () {
        client.close();
      });
      
      response.status(200); //http status code
      response.send(result); //http response
  });
});

// function
async function group(client) {
  var cllxn = client.db('petsInfo').collection('petsCollection');
  return await cllxn.aggregate(
    [
      {
        $group:
        {
          _id: { $species: '$species' },
          pets: {
            $push: {
              id: '$id', name: '$name', breed: '$breed', status:
                '$status', gender: '$gender', yearsOld: '$yearsOld', adopted: '$adopted'
            }
          }
        }
      }
    ]
  )
}

// function
const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('pets');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(docs);
      callback(docs);
  });
}

// function
const updateDocument = function (db, name, callback) {
  // Get the documents collection
  const collection = db.collection('pets');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ name: name }
      , { $set: { adopted: true } }, function (err, result) {
          // assert.equal(err, null);
          // assert.equal(1, result.result.n);
          if (err) {
            console.log(err);
            return;
          }
          console.log("adopted is true");
          console.log(result);
          callback(result);
      });
}

const findOne = function (db, name, callback) {
  const collection = db.collection('pets');

  var result = collection.findOne({"name": name});
  console.log(result);
  callback(result);
}

module.exports = router;