const express = require("express");
const fs = require("fs");
const htmlRoutes = require("./routes/htmlRoutes");

var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this is an express feature that creates a route to the assets folder where the css and JS lives
app.use(express.static("public"))
app.use("/", htmlRoutes)



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// need to set up getNotes portion
// use same model as on line 14 where I can put all of my api notes (savenote,createnote,deletenote)
// create a new file like line 14 for the apiroutes

