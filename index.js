var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongo = require("mongodb");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/react-router");
var db = mongoose.connection;

var routes = require("./routes/routes");
//INIT APP

var app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

//VIEW ENGINE
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//BODYPARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use("/api", routes);


//SET PORT
app.set("port", (process.env.PORT || 8000));

app.listen(app.get("port"), function() {
	console.log("Server started on port" + app.get("port"));
})








