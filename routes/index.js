var express = require('express');
var router = express.Router();
var getTitle = require('../lib/gettitle');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',  getTitle() );
});

module.exports = router;
