const Url = require('../models/urlModel');

async function getStats(req, res, next) {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });

    if (!url) return res.status(404).json({ error: 'Short URL not found' });
    res.json({ clicks: url.clicks, lastAccessed: url.lastAccessed });
};

module.exports = getStats;