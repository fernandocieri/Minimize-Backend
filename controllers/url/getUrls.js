const urlManager = require("../../managers/url");

async function getUrls(req, res) {
  const urls = await urlManager.getAllUrls(); 
  if (urls) {
    res.status(200).json(urls);
  } else res.status(404).end();
}

module.exports = getUrls;