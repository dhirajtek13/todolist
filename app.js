//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "cook Food", "Eat Food"];
app.set("view engine", "ejs"); //for ejs template engine

app.use(bodyParser.urlencoded({extended:true}));//for form body parser
app.use(express.static("public"));

app.get("/", function (req, res) {
  // res.send("hello");
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newItems: items });
});

app.post("/", function(req, res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
  console.log("server started on port 3000.");
});
