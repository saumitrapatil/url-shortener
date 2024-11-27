const Url = require('../models/urlModel');

async function redirectToOriginal(req, res) {
    const { shortId } = req.params;
    const url = await Url.findOneAndUpdate(
        { shortId },
        { $inc: { clicks: 1 }, lastAccessed: new Date() },
        { new: true }
    );

    if (!url) return res.status(404).json({ error: 'Short URL not found' });
    res.redirect(url.originalUrl);
};

module.exports = redirectToOriginal;