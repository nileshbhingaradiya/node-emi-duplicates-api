const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const emiRoute = require("./routes/emiRoute");
app.use("/emi", emiRoute);

const utilRoute = require("./routes/utilRoute");
app.use("/util", utilRoute);

module.exports = app;
