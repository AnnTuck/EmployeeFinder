$(function () {
    //Retreives the employee data and finds a match with the most recent survey

    const matchSurvey = function (newSurveyEntry) {


        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        console.log("matchSurvey");
        console.log("newSurveyEntry", NewSurveyEntry);

       

        //Get the survey entry from employee.js
        $.ajax({
            method: 'GET',
            url: 'api/employees',
            }).then(function(data){
                console.log("Get data", data);
            });

        
    };

    
});