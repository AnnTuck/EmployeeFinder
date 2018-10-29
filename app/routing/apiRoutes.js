let employeeList = require('../data/employees.js');

module.exports = function (app) {
    console.log("apiRoutes app");

    //GET the employee list
    app.get('/api/employees', function (req,res) {
        res.json(employeeList);


    });


    app.post('/api/employees', function(req,res) {
        employeeList.push(req.body);
    })
};