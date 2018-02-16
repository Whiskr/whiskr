const router = require('express').Router();
const statusCat = require('http-status-cats');

module.exports = router;

router.use('/userAccount', require('./userAccount'));

router.use('/match', require('./match'));
router.use('/pets', require('./pets'));
router.use('/seen', require('./seen'));
router.use('/contact', require('./contact'));
router.use('/zipcode', require('./zipcode'));

router.use(statusCat());

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
