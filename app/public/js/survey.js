// $(function () { 
//Takes in the data from the form and sends it out in a POST request

    const addSurvey = function (event) {

        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        console.log("addSurvey");
       

        //Grab the form elements and fill the newSurveyEntry object
        //Fill question array with scores
        var question = [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val()];
       
        const newSurveyEntry = {
            name: $('#formName').val().trim(),
            photo: $('#formPhoto').val().trim(),
            scores: question
        };
            console.log("newSurveyEntry", newSurveyEntry);


            //Clear the form data when submitting
            $('#formName').val('');
            $('#formPhoto').val('');
            $('#q1').val('');
            $('#q2').val('');
            $('#q3').val('');
            $('#q4').val('');
            $('#q5').val('');
            $('#q6').val('');
            $('#q7').val('');
            $('#q8').val('');
            $('#q9').val('');
            $('#q10').val('');

            //Post the new survey entry to employee.js
            $.ajax({
                method: 'POST',
                url: 'api/employees',
                data: newSurveyEntry
            });
            

    };

$('#submitSurvey').on('click', addSurvey);

// });
