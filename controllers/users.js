var User = require('../models/user.js');
var controller = {};

controller.index = function(req, res, next) {
  User.find({}, function(err, docs){
    res.send(docs);
  })
};

controller.show = function(req, res, next) {
  User.findOne({_id: req.params.id}, function(err, doc){
    res.send(doc);
  });
}

module.exports = controller;
