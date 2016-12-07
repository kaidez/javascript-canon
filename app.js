// use strict mode
"use strict";

var

    // Require the express module
    express = require("express"),

    // Create a new express application called "app"
    app = express(),

    // Require the various versions of JS Canon via their folders
    vanillaJS = require("./vanilla-js-mvc"),

    // Create a server variable for later use
    server;

/*
 * ==================
 * START APP SETTINGS
 * ==================
 */

// Point to views in the local folder
app.set("views", __dirname + "/views");

// Set the view engine to be EJS
app.set("view engine", "ejs");

/*
 * =================
 * STOP APP SETTINGS
 * =================
 */



/*
 * =========================
 * START MIDDLEWARE SETTINGS
 * =========================
 */



// Plug in the various versions of JS Canon as middleware
app.use(vanillaJS);

// Point to asset files...images, .css, .js, etc.
app.use(express.static(__dirname + "/public/"));

/*
 * ========================
 * STOP MIDDLEWARE SETTINGS
 * ========================
 */



/*
 * ====================
 * START ROUTE SETTINGS
 * ====================
 */

 // HOME PAGE ROUTE: Render the index template when going to home page
app.get("/", function(req, res) {
  res.render("index", {
    pageID: "index"
  });
});

// ABOUT PAGE ROUTE: Render the about template when going to about page
app.get("/about", function(req, res) {
  res.render("about", {
    pageID: "about"
  });
});


/*
 * ===================
 * STOP ROUTE SETTINGS
 * ===================
 */



// Set the development site port
app.set("port", process.env.PORT || 3000 );

// Run a local server via the "server" variable
server = app.listen(app.get("port"), function() {
  console.log("Listening on port " + app.get("port"));
});