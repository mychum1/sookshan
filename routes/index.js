var express = require('express');
var router = express.Router();
var connection = require('../public/javascripts/mysql/connection');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
