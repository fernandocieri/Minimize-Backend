const urlManager = require('../../managers/url');

async function getClicks(req, res) {
    const clicksTotal = await urlManager.getUrlClicks(req.params.shortenedUrl);
    
    if (clicksTotal >= 0) {
        res.status(200).json(clicksTotal);
    } else res.status(404).end();
}

module.exports = getClicks;