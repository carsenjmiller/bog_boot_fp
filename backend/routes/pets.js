const express = require('express');
const bodyParser = require('body-parser');
const app = express();

function petEndpoint(request, response) {
    const name = request.query.name //query parameters
    response.status(200) //http status code
    response.send() //http response
    //this is a comment
}