const mongoose = require('mongoose');
const nanoid = require('nanoid');

const url = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortenedUrl: {
        type: String,
        required: true,
        default: () => nanoid.nanoid(8)
    },
    customName: {
        type: String,
        required: true,
        default: 'minimize'
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Url', url);