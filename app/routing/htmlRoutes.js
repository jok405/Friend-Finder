//console.log('HTML Route Connected Successfully');


// Middleware dependency
const path = require('path');

function htmlRoutes(app) {

  // GET Route to /survey to display the survey page.
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // USE route displays the home page.
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
}

// Export to main server.js 
module.exports = htmlRoutes;