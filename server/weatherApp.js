const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/cities");
const bodyParser = require('body-parser');
const path = require("path");
const weatherApp = express();


const urlMongoConnect = "mongodb://localhost:27017/weatherApp";


mongoose.connect(urlMongoConnect, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=> console.log("MongoDB connected"))
.catch(()=> console.log("Error"));

weatherApp.use(bodyParser.urlencoded({extended:true}));
weatherApp.use(bodyParser.json());
weatherApp.use(require("cors")());

weatherApp.use(express.static(path.join(__dirname, '..' , 'client')));
weatherApp.use(routes);

module.exports = weatherApp;