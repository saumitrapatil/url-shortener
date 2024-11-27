const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config()

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on :${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });