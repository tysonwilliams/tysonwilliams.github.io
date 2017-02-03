var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var config = require("./config");
var expressJwt = require("express-jwt");

var port = process.env.PORT || 7070;

app.use(morgan("dev"));
app.use(bodyParser.json());

// let express serve up the static files
app.use(express.static(__dirname));

// setup server to listen on designated port
app.listen(port, function () {
    console.log("Server is listening on port " + port);
});

// allows for configuration of the database
mongoose.connect(config.database, function (err) {
    if (err) throw (err);
    console.log("Successfully connected to the database");
});

// Make the app use the express-jwt authentication middleware on anything starting with "/api"
app.use("/api,", expressJwt({secret: config.secret}));
