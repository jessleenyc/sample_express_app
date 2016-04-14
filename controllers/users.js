var User = require('../models/user.js');
var controller = {};

controller.index = function(req, res, next) {
  User.find({}, function(err, docs) {
    if (err) return console.error(err);
    res.send(docs);
  })
};

controller.show = function(req, res, next) {
  User.findOne({_id: req.params.id}, function(err, doc) {
    if (err) return console.error(err);
    res.send(doc);
  });
}

controller.new = function(req, res, next) {
  if (err) return console.error(err);
  res.render('users/new');
}

controller.create = function(req, res, next) {
  User.create(req.body.user);
  res.redirect('/users');
}

module.exports = controller;
