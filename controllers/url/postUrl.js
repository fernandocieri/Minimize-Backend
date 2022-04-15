const urlManager = require("../../managers/url");

async function postUrl(req, res) {
    const url = await urlManager.shortenUrl(req.body.customName, req.body.url);
    res.status(201).json(url).end();
}

module.exports = postUrl;