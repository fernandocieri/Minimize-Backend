let router = require('express').Router();

router.get('/', require('../controllers/url/getUrls'));
router.get('/:shortenedUrl/clicks', require('../controllers/url/getClicks'));
router.get('/:customName/:shortenedUrl', require('../controllers/url/getOriginalUrl'));
router.get('/:originalUrl/shortened', require('../controllers/url/getShortenedUrl'));

router.post('/', require('../controllers/url/postUrl'));

module.exports = router;
