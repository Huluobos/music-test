var express = require('express');
var router = express.Router();
var path = require("path")


// welcome
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../welcome/rukou.html'))
});

module.exports = router;
