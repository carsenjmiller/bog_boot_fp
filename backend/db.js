const fs = require('fs');
const mongodb = require('mongodb');


const MongoClient = mongodb.MongoClient;

const client = new MongoClient('mongodb://localhost:27017');
const petsJSON = fs.readFileSync('pets.json').toString();

client.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }

    const database = client.db('petsInfo');

    const petsCollection = database.collection('pets');

    var petObject = JSON.parse(petsJSON);

    //petsCollection.insertMany(petObject);

    petsCollection.find().toArray(function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
});