let router = require('express').Router();

router.get('/', require('../controllers/url/getUrls'));
router.get('/:customName/:shortenedUrl/clicks', require('../controllers/url/getClicks'));
router.get('/:shortenedUrl', require('../controllers/url/getOriginalUrl'));

router.post('/', require('../controllers/url/postUrl'));

module.exports = router;
