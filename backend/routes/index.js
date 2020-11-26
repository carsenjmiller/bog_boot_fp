var { response } = require('express');
var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

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

module.exports = router;

function petHandler(request, response) {
  const name = request.query.name //query parameters
  response.status(200) //http status code
  response.send() //http response
}


app.listen(3000)
