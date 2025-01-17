var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("client"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
