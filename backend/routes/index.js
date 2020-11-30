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

router.patch('/:petName', async function (request, response) {
  try {
    const updatedPet = await Pets.updateOne(
      {name: request.params.petName}, {$set: {adopted: true}}
    );
    response.json(updatedPet);
  } catch (err) {
    response.json({message: err});
  }
})

router.delete('/:petName', async function (request, response) {
  try {
    const removedPet = await Pets.remove({name: request.params.petName});
    response.json(removedPet);
  } catch (err) {
    response.json({message: err});
  }
})

module.exports = router;

