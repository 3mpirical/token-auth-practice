const express = require("express"),
      app     = express(),
      bodyParser = require("body-parser"),
      hbs       = require("hbs"),
      methodOverride = require("method-override"),
      mongoose = require("mongoose"),
      colors = require("colors"),

      mainRoutes = require("./routes/pages/mainRoutes.js");

const PORT = process.env.PORT || 3000,
      MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/recipe-crud-app";


//DB CONNECT ===============
mongoose.connect(MONGODB_URI, (err) => {
  if(err) return console.log("Could Not Connect To MongoDB".red);
  console.log("Connected To MongoDB".green);
});
// CONFIGURATION ===============
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "views/partials");


// MIDDLEWARE ===============
app.use(express.static(__dirname + "public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(mainRoutes);

// ROUTES ===============




// SERVER START ===============
app.listen(PORT, () => {
  console.log(`Server Has Started On PORT: ${PORT}`.green);
});
