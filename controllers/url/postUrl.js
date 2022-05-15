const urlManager = require("../../managers/url");

async function shortenUrl(req, res) {
    const url = await urlManager.shortenUrl(req.body.customName, req.body.url);
    res.status(201).json(url).end();
}

module.exports = shortenUrl;