const express = require("express");
const connectDB = require("./connect");
const urlRoute = require("./src/routes/urlRoute");
require('dotenv').config()

const app = express();
const PORT = 8080;

connectDB(process.env.MONGO_URI);

app.use(express.json());
app.use("/", urlRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
