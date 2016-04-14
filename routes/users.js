var express = require('express');
var router = express.Router();

var users = require('../controllers/users');

router.get('/',    users.index);
router.get('/new', users.new);
router.post('/',   users.create);
router.get('/:id', users.show);

module.exports = router;
