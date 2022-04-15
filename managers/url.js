const mongoose = require('mongoose');
const Url = require('../models/url');

mongoose.connect('mongodb://localhost/Minimize'), {
    useNewUrlParser: true, useUnifiedTopology: true
}

function formatUrl(customName, shortenedUrl) {
    const newUrl = `http://localhost:3003/api/url/${customName}/${shortenedUrl}`;
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

    static async getOriginalUrl(customName, shortenedUrl) {
        try {
            const urlInfo = await Url.findOne({ shortenedUrl: shortenedUrl });
            return urlInfo.originalUrl;
        } catch (error) {
            console.log(error);
        }
    }

    static async getUrlClicks(shortenedUrl) {
        const urlInfo = await Url.findOne({ shortenedUrl: shortenedUrl });
        return urlInfo.clicks;
    }

    static async getShortenedUrl(originalUrl) {
        try {
            const urlInfo = await Url.findOne({ originalUrl: originalUrl });
            return urlInfo.shortenedUrl;
        } catch (error) {
            console.log(error);
        }
    }


    static async shortenUrl(customName, originalUrl) {
        try {
            const createdUrlInfo = await Url.create({ originalUrl: originalUrl, customName: customName });
            const shortenedUrl = formatUrl(createdUrlInfo.customName, createdUrlInfo.shortenedUrl);
            return shortenedUrl;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UrlManager;