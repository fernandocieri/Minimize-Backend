const mongoose = require('mongoose');
const Url = require('../models/url');

mongoose.connect('mongodb://localhost/Minimize'), {
    useNewUrlParser: true, useUnifiedTopology: true
}

function formatUrl(customName, shortenedUrl) {
    const newUrl = `http://localhost:3003/api/${customName}/${shortenedUrl}`;
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
            const originalUrl = await Url.findOne({ shortenedUrl: shortenedUrl });
            return originalUrl;
        } catch (error) {
            console.log(error);
        }
    }

    static async getShortenedUrl(originalUrl) {
        try {
            const shortenedUrl = await Url.findOne({ originalUrl: originalUrl });
            return shortenedUrl;
        } catch (error) {
            console.log(error);
        }
    }

    static async shortenUrl(customName, originalUrl) {
        try {
            const response = await Url.create({ originalUrl: originalUrl, customName: customName });
            const shortenedUrl = formatUrl(response.customName, response.shortenedUrl);
            return shortenedUrl;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UrlManager;