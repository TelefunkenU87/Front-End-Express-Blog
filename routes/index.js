var express = require('express');
var router = express.Router();
let repo = require('../models/postRepository');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { 
    title: 'tele-funk home',
  posts: repo.getPosts()
 });
});

module.exports = router;
