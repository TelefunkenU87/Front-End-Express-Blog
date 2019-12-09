let express = require('express'),
    router = express.Router(),
    repo = require('../models/postRepository');

/* GET blog page */
router.get('/', (req, res, next) => {
    res.render('blog', {
        title: 'blog',
        posts: repo.getPosts()
    });
});

module.exports = router;