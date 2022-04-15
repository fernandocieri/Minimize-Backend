const urlManager = require("../../managers/url");

async function getOriginalUrl(req, res) {
  const originalUrl = await urlManager.getOriginalUrl(req.params.customName, req.params.shortenedUrl); 

  if (originalUrl) {
    res.redirect(originalUrl);
  } else res.status(404).end();
}

module.exports = getOriginalUrl;