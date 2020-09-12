const express = require('express');
const bodyParser = require('body-parser');                      // library de lay du lieu nhap vao (ex: req.body)
const morgan = require('morgan'); 
const mongoose = require('mongoose');
var config = require('./config');                               // hien thi req url bang console.log
const setupController = require('./api/controllers/setupController');
const todoController = require('./api/controllers/todoController');


const app = express();
const port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());                                     // doc kieu du lieu tu client gui len la json
app.use(bodyParser.urlencoded({extended: true}));               // chap nhan toan bo kieu du lieu POST ve server

app.use(morgan("dev"));                                         // log request ra console

app.set("view engine", "ejs");

// db info
mongoose.connect(config.getDbConnectionString());
setupController(app); todoController(app);

// cau hinh route
app.get("/", function(req, res) {
    res.render("index");
});

app.listen(port, function() {
    console.log("App listening on port: " + port);
})