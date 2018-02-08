/*      Friend Finder Express Node App | Composed by John Kim | University of Richmond      */

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Connecting both routes
const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');

// Initiate express App
const app = express();
const PORT = process.env.PORT || 3000;

// Initiate app for data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Async & must execute chronologically | Server Routing Map 
apiRoutes(app); // API route - Must list before HTML route for 'use' route to succeed
htmlRoutes(app); // HTML route 


// Execute server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});