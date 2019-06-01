var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors')
var router = require("./routes/routing");
var app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

app.get("/", function(req, res) {
res.status(200).send("NAGP Backend API");
});

const port = process.env.PORT || 3030;

var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});