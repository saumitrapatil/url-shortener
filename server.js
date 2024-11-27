const app = require('./app');
const connectDB = require("./connect");

require('dotenv').config()

const PORT = 8080;

connectDB(process.env.MONGO_URI);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
