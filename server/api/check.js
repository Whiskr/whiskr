const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // Comment out this line:
  // res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: 'samsepi0l'
  }, {
  	id: 2,
  	username: 'D0loresH4ze'
  }]);
});

module.exports = router;
