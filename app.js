const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




app.get("/", function(req, res) {
let v=10;
  res.render("dupli",{});

});

app.get("/dupli", function(req, res) {
let v=10;
  res.render("index",{});

});



app.listen(process.env.PORT||3000, function() {
  console.log("the server is running on port 3000");
});
