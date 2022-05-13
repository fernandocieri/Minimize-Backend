const mongoose = require('mongoose');
const Url = require('../models/url');

mongoose.connect('mongodb://localhost/Minimize'), {
    useNewUrlParser: true, useUnifiedTopology: true
}

function formatUrl(customName, shortenedUrl) {
    const domain = 'http://localhost:3000/';
    const newUrl = `${domain}${customName}/${shortenedUrl}`;
    return newUrl;
}

class UrlManager {

    static async getAllUrls() {
        try {
            const urls = await Url.find();
            return urls;
        } catch (error) {
            console.log(error);
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
            console.log(error);
        }
    }

    static async getUrlClicks(shortenedUrl) {
        try {
            const urlInfo = await Url.findOne({ shortenedUrl: shortenedUrl });
            return urlInfo.clicks;
        } catch (error) {
            console.log(error);
        }
    }

    static async shortenUrl(customName = 'minimize', originalUrl) {
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
            console.log(error);
        }
    }
}

module.exports = UrlManager;