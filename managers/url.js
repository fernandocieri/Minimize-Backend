const Url = require('../models/url');

function formatUrl(customName, shortenedUrl) {
    const newUrl = `${process.env.FRONT_URL}/${customName}/${shortenedUrl}`;
    return newUrl;
}

class UrlManager {

    static async getAllUrls() {
        try {
            const urls = await Url.find();
            return urls;
        } catch (error) {
            return null;
        }
    }

    static async getOriginalUrl(shortenedUrl) {
        try {
            const urlInfo = await Url.findOne({ shortenedUrl: shortenedUrl });
            if (urlInfo) {
                urlInfo.clicks++;
                await urlInfo.save();
                return urlInfo.originalUrl;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }

    static async getUrlClicks(shortenedUrl) {
        try {
            const urlInfo = await Url.findOne({ shortenedUrl: shortenedUrl });
            return urlInfo.clicks;
        } catch (error) {
            return null;
        }
    }

    static async shortenUrl(customName = 'min', originalUrl) {
        try {
            const urlInfo = await Url.findOne({ originalUrl: originalUrl, customName: customName });
            if (urlInfo) {
                const shortenedUrl = formatUrl(urlInfo.customName, urlInfo.shortenedUrl);
                return shortenedUrl;
            }
            const createdUrlInfo = await Url.create({ originalUrl: originalUrl, customName: customName });
            const shortenedUrl = formatUrl(createdUrlInfo.customName, createdUrlInfo.shortenedUrl);
            return shortenedUrl;
        } catch (error) {
            return null;
        }
    }
}

module.exports = UrlManager;