const mongodb = require('mongodb');
const { db } = require('./song');


const MongoClient = mongodb.MongoClient;

const client = new MongoClient('mongodb://localhost:27017');

client.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }

    const database = client.db('petsInfo');

    const petsCollection = database.collection('pets');

    
});