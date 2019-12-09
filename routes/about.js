let express = require('express'),
    router = express.Router();

/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('about', { 
        title: "About Me"
     });
});

module.exports = router;
