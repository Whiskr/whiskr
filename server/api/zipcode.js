const router = require('express').Router();
const axios = require('axios');
const {GOOGLE_GEO_API_KEY} = require('../../secrets');

module.exports = router;

router.get('/', (req, res, next) => {
  console.log("SECRET", GOOGLE_GEO_API_KEY);
  res.send("hey");
})