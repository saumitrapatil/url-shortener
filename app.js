const express = require('express');
const rateLimit = require('express-rate-limit');
const urlRoute = require("./src/routes/urlRoute");
const app = express();

app.use(express.json());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
});
app.use(limiter);

app.use("/", urlRoute);

module.exports = app;