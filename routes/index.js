var express = require('express');
var router = express.Router();
var standupCtrl  = require('../controller/standup.server.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//Get method
router.get('/newnote', function(req, res) {
  return standupCtrl.getNote(req, res);
});
//Post method
router.post('/newnote', function(req, res) {
  return standupCtrl.create(req,res);
});

module.exports = router;
