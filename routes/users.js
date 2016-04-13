var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, docs){
    res.send(docs);
  });
});

router.get('/new', function(req, res, next) {
  res.render('users/new');
});

router.post('/', function(req, res, next) {
  User.create(req.body.user);
  res.redirect('/users');
});

module.exports = router;
