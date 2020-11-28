const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017'; //TODO THIS COULD BE WRONG

// Database Name
const dbName = 'myproject'; //TODO rename db

// Create a new MongoClient
const client = new MongoClient(url);

const findOne = function (db, callback) {

}

const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('petCollection');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following pets");
        console.log(docs)
        callback(docs);
    });
}

const updateDocument = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a: 2 }
        , { $set: { b: 1 } }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
}

function petFind(request, response) {
    const name = request.query.name //query parameter

    // Use connect method to connect to the Server
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        findDocuments(db, function () {
            client.close();
        });
    });

    response.status(200) //http status code
    response.send() //http response
}


function petUpdate(request, response) {
    const name = request.query.name //query parameter

    // Use connect method to connect to the Server
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        updateDocument(db, function () {
            client.close();
        });
    });

    response.status(200) //http status code
    response.send() //http response
}