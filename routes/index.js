var express = require('express');
var router = express.Router();
const mysqlConnection  = require('../db/database.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ express: 'Hello From Express' });
});

module.exports = router;
