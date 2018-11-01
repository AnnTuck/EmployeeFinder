//Imports express into our app and sets it up for use
const express = require('express');
//The Path module provides a way of working with directories and file paths.
//The Path method join() below joins specified paths into one.
const path = require('path');

const app = express();

//Defines a PORT for the server to listen for requests

// const PORT = 8080;
var PORT = process.env.PORT || 3000;

//Sets up our server to parse our request body for usage
//app.use allows us to use middleware
//(for taking .json stuff that was converted to binary and converting it back to .json)
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Sets our server to use the public directory for static assets
//we want the public to only see what's in the public directory
// __dirname is the path the .js file resides in when it is executed
app.use(express.static(path.join(__dirname, './app/public')));


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Starts our server on the predefined PORT
app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`);
});

