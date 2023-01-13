var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join('views', '/index.html'));
});
router.get("*", function (req, res) {
  res.sendFile(path.join('views', '/index.html'));
});
module.exports = router;
