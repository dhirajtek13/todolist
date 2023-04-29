//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    // res.send("hello");
    const today = new Date();
    var currentDay = today.getDay();
    if(currentDay === 6 ||currentDay == 0) {
        // res.send("<b>yey! its the weekend</b>");

        // res.write("<b>yey! its the weekend</b>");
        // res.send();

        res.sendFile(__dirname+'/index.html');

    }  else {
        res.send("Boo! I have to work!");
    }
});




app.listen(3000, function() {
    console.log("server started on port 3000.");
});