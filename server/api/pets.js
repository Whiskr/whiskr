const router = require('express').Router();
const axios = require('axios');

module.exports = router;

router.get('/', (req, res, next) => {
  let queryStr = 'output=full&format=json';
  // res.header('Access-Control-Allow-Headers', 'x-requested-with, x-requested-by');

  Object.keys(req.query).forEach((variable) => {
    if (req.query[variable] && req.query[variable] !== 'undefined') queryStr += `&${variable}=${req.query[variable]}` || '';
  });

  axios.get(`http://api.petfinder.com/pet.getRandom?${queryStr}`).then((allPets) => {
    res.json(allPets.data.petfinder.pet);
    res.end();
  }).catch(next);
});

