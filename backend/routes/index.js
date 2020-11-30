var express = require('express');
var router = express.Router();
const Pets = require('../model/pet');

var mongoose = require('mongoose');
const { request } = require('../app');
mongoose.connect("mongodb+srv://Deepsikha:Deep2018@cluster0.yqbhm.mongodb.net/Pets?retryWrites=true&w=majority", () => console.log("connected"));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.post('/addPet', async (req, res) => {
    const pet = new Pets({
        _id: req.body._id,
        name: req.body.name,
        breed: req.body.breed,
        status: req.body.status,
        gender: req.body.gender,
        yearsOld: req.body.yearsOld,
        adopted: req.body.adopted,
        species: req.body.species,
        imgSrc: req.body.imgSrc
    });
    try {
        const savedPet = await pet.save();
        res.json(savedPet);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/findDocuments', async function (request, response) {
    try {
        // const pets = await Pets.find();
        // console.log(pets);
        // response.send(pets);

        const petsGroup = await Pets.aggregate(
                  [
                    {
                      $group:
                      {
                        _id: '$species',
                        pets: {
                          $push: {
                            id: '$id', name: '$name', breed: '$breed', status:
                              '$status', gender: '$gender', yearsOld: '$yearsOld', adopted: '$adopted', imgSrc: '$imgSrc'
                          }
                        }
                      }
                    }
                  ]);
                  console.log(petsGroup);
                  response.send(petsGroup);
    } catch {
        response.send("error");
    }
});

// function
// async function group(client) {
//     var cllxn = client.db('petsInfo').collection('petsCollection');
//     return await cllxn.aggregate(
//       [
//         {
//           $group:
//           {
//             _id: { $species: '$species' },
//             pets: {
//               $push: {
//                 id: '$id', name: '$name', breed: '$breed', status:
//                   '$status', gender: '$gender', yearsOld: '$yearsOld', adopted: '$adopted', imgSrc: '$imgSrc'
//               }
//             }
//           }
//         }
//       ]
//     )
//   }

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// // endpoint
// // router.get('/findDocuments', async function (request, response) {
// //     var result = await findDocuments(client);

// //     response.status(200); //http status code
// //     response.send(result); //http response
// //   });


// // endpoint
// router.patch('/updateDocument', async function petUpdate(request, response) {

//   // Use connect method to connect to the Server
//   client.connect(async function (err) {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     const name = request.query; //query parameter

//     const db = client.db(dbName);

//     var result = await updateDocument(db, name, function () {
//       client.close();
//     });

//     response.status(200); //http status code
//     response.send(result); //http response
//   });

// });

// router.get('/findOne', async function findPet(request, response) {

//   client.connect(async function (err) {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     const name = request.query; //query parameter

//     const db = client.db(dbName);

//     var result = await findOne(db, name, function () {
//       client.close();
//     });

//     response.status(200); //http status code
//     response.send(result); //http response
//   });
// });

// // function
// async function group(client) {
//   var cllxn = client.db('petsInfo').collection('petsCollection');
//   return await cllxn.aggregate(
//     [
//       {
//         $group:
//         {
//           _id: { $species: '$species' },
//           pets: {
//             $push: {
//               id: '$id', name: '$name', breed: '$breed', status:
//                 '$status', gender: '$gender', yearsOld: '$yearsOld', adopted: '$adopted', imgSrc: '$imgSrc'
//             }
//           }
//         }
//       }
//     ]
//   )
// }

// // function
// // const findDocuments = async function (client) {
// //   try {
// //     // Get the documents collection
// //     const collection = client.db("Pets").collection('PetsCollection');
// //     // Find some documents
// //     const results = await collection.find({}).toArray();
// //     return results;

// //   } catch (err) {
// //     console.log(err);
// //     return false;

// //   }
// // }

// // function
// const updateDocument = async function (db, name, callback) {
//   try {
//     // Get the documents collection
//     const collection = db.collection('pets');
//     // Update document where a is 2, set b equal to 1
//     const results = await collection.updateOne(name
//        , { $set: {adopted: true}}, function (err, result) {
//         // assert.equal(err, null);
//         // assert.equal(1, result.result.n);
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log("adopted is true");
//         console.log(result);
//         callback(result);
//       });
//     return true;
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
  
// }

// // const findOne = async function (db, name, callback) {
// //       const collection = db.collection('pets');

// //       var result = await collection.findOne({name}).toArray();
// //       console.log(result);
// //       callback(result);
// //       return true;
// // }

// const findOne = async function (db, name, callback) {
//   try {
//     const collection = db.collection('pets');

//     var result = await collection.find(name).toArray();
//     console.log(result);
//     callback(result);
//     return true;
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// }

module.exports = router;

