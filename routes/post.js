let express = require('express'),
    router = express.Router(),
    repo = require("../models/postRepository");

/* GET post by permalink */
router.get('/:permalink', (req, res, next) => {
    let post = repo.getPostByPermalink(req.params.permalink);
    res.render('post', { title: post.title, post: post});
});

module.exports = router;