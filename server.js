//           Friend Finder Express Node App | Composed by John Kim | University of Richmond 

// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Connecting both html and API Routes
var apiRoutes = require('./app/routing/api-routes.js');
var htmlRoutes = require('./app/routing/html-routes.js');



// Set up Express App

var PORT = process.env.PORT || 3000;
var app = express();

// Start the server
app.listen(PORT, function() { // check for successful execution
  console.log("App listening on PORT: " + PORT);
});