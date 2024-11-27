const { nanoid } = require("nanoid");
const URL = require('../models/urlModel');
const validUrl = require('valid-url');

async function shortenUrl(req, res) {
    const { originalUrl } = req.body;
    if (!originalUrl) return res.status(400).json({ error: 'URL is required' });
    if (!validUrl.isUri(originalUrl)) return res.status(400).json({ error: 'Invalid URL format' });

    const shortId = nanoid(8);
    await URL.create({ originalUrl, shortId });

    res.status(201).json({ shortId: shortId });
};

module.exports = shortenUrl;