const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true});

app.get("/", function(req, res) {
    res.render("Hello World");
})

app.listen(3000, function(req, res) {
    console.log("Server started on port 3000");
})