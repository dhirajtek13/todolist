//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "cook Food", "Eat Food"];
var workItems = [];
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
  res.render("list", { listTitle: day, newItems: items });
});

app.post("/", function(req, res) {
    let item = req.body.newItem;
    if(req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");

    } else {
        items.push(item);
        res.redirect("/");
    }
});



app.get("/work", function (req, res) {
    res.render("list", {listTitle:"work List", newItems: workItems});
});

// app.post("/work", function(req, res) {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.get('/about', function(req, res) {
    res.render("about");
});



app.listen(3000, function () {
  console.log("server started on port 3000.");
});
