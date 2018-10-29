const path = require('path');

module.exports = function(app) {
console.log("htmlRoutes");
// Define an action to be performed when a GET request is made to the survey route
//Shows the user the survey page.
        app.get('/', function (req, res){
            res.sendFile(path.join(__dirname, '../public/survey.html'));
        })
};



