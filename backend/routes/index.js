var { response } = require('express');
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'petsInfo'; //TODO rename db

// Create a new MongoClient
const client = new MongoClient(url);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// endpoint
router.get('/findDocuments', async function petFind(request, response) {
  const name = request.query.name; //query parameter

  // Use connect method to connect to the Server
  client.connect(async function (err) {
    if (err) {
      console.log(err);
      return;
    }

    const db = client.db(dbName);

    var result = await findDocuments(db, function () {
      client.close();
    });

    response.status(200); //http status code
    response.send(result); //http response
  });

});


// endpoint
router.patch('/updateDocument', async function petUpdate(request, response) {

  // Use connect method to connect to the Server
  client.connect(async function (err) {
    if (err) {
      console.log(err);
      return;
    }

    const name = request.query; //query parameter

    const db = client.db(dbName);

    var result = await updateDocument(db, name, function () {
      client.close();
    });

    response.status(200); //http status code
    response.send(result); //http response
  });

});

router.get('/findOne', async function findPet(request, response) {

  client.connect(async function (err) {
    if (err) {
      console.log(err);
      return;
    }

    const name = request.query; //query parameter

    const db = client.db(dbName);

    var result = await findOne(db, name, function () {
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
                '$status', gender: '$gender', yearsOld: '$yearsOld', adopted: '$adopted', imgSrc: '$imgSrc'
            }
          }
        }
      }
    ]
  )
}

// function
const findDocuments = async function (db, callback) {
  try {
    // Get the documents collection
    const collection = db.collection('pets');
    // Find some documents
    const results = await collection.find({}).toArray(function (err, docs) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(docs);
      callback(docs);
    });
    return results;
  } catch (err) {
    console.log(err);
    return false;
  }
}

// function
const updateDocument = async function (db, name, callback) {
  try {
    // Get the documents collection
    const collection = db.collection('pets');
    // Update document where a is 2, set b equal to 1
    const results = await collection.updateOne(name
       , { $set: {adopted: true}}, function (err, result) {
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
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
  
}

// const findOne = async function (db, name, callback) {
//       const collection = db.collection('pets');

//       var result = await collection.findOne({name}).toArray();
//       console.log(result);
//       callback(result);
//       return true;
// }

const findOne = async function (db, name, callback) {
  try {
    const collection = db.collection('pets');

    var result = await collection.find(name).toArray();
    console.log(result);
    callback(result);
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
}
//router.use(bodyParser.text());

module.exports = router;