var express = require('express');
var router = express.Router();

var User = require('../models/user');
var controller = require('../controllers/users');

/* GET users listing. */
router.get('/', controller.index);

router.get('/:id', controller.show);

router.get('/new', function(req, res, next) {
  res.render('users/new');
});

router.post('/', function(req, res, next) {
  User.create(req.body.user);
  res.redirect('/users');
});

module.exports = router;
