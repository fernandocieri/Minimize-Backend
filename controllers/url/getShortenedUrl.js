const urlManager = require("../../managers/url");

async function getShortenedUrl(req, res) {
  const shortenedUrl = await urlManager.getShortenedUrl(req.query.originalUrl); 

  if (shortenedUrl) {
    res.status(200).json(shortenedUrl);
  } else res.status(404).end();
}

module.exports = getShortenedUrl;