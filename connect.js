const mongoose = require('mongoose');

async function connectDB(url) {
    try {
        await mongoose.connect(url);
        console.log('Connected to the database');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;