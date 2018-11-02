$(function () {
    //Takes in the data from the form and sends it out in a POST request

    const addSurvey = function (event) {
    //Takes in the data from the form and clears form after submit.

        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        console.log("addSurvey");


        //Grab the form elements and fill the newSurveyEntry object
        //Fill question array with scores
        var question = [($('#q1').val()).slice(0,1), ($('#q2').val()).slice(0,1), ($('#q3').val()).slice(0,1), ($('#q4').val()).slice(0,1), ($('#q5').val()).slice(0,1), ($('#q6').val()).slice(0,1), ($('#q7').val()).slice(0,1), ($('#q8').val()).slice(0,1), ($('#q9').val()).slice(0,1), ($('#q10').val()).slice(0,1)];
        // var question = [($('#q1').val()).slice(0,1), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val()];
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

        //Call the function that will find the closest match with the existing surveys.    
        matchSurvey(newSurveyEntry); 
    };

    const matchSurvey = function (newSurveyEntry) {
        //Take the newly entered survey and find the closest match with the existing surveys.

        console.log("matchSurvey");
        console.log("newSurveyEntry", newSurveyEntry);

        //Get the survey entry from employee.js
        $.ajax({
            method: 'GET',
            url: 'api/employees',
            }).then(function(data){
                
                var diffScore = [];

                console.log("Get data", data);                
                console.log("data[0]", data[0]); 
                console.log("data[0].scores", data[0].scores);  
                console.log("newSurveyEntry.scores",newSurveyEntry.scores);

                //data[] is the existing surveys, newSurveyEntry is the newest survey entry
                for (let j=0; j<data.length; j++) {
                    let sumDiff = 0;
                    for (let i=0; i<data[j].scores.length; i++) {
                    let diff = Math.abs(data[j].scores[i] - newSurveyEntry.scores[i]);
                    sumDiff = sumDiff + diff;
                    console.log("diff", i, diff);
                    };

                console.log("sumDiff j",j, sumDiff);
                diffScore[j] = sumDiff;
                };
                console.log ("diffScore", diffScore);

                let diffScoreMin = 51;
                for (let i=0; i < diffScore.length; i++) {
                    if (diffScoreMin > diffScore[i]) {
                        diffScoreMin = diffScore[i];
                        matchIndex = i;
                    }
                };
                console.log("matching index",matchIndex);
                console.log("matching name", data[matchIndex].name);
                console.log("matching photo", data[matchIndex].photo);

                

                

               //Pass matching name and photo to modal and launch modal 

                $('#modalName').text(data[matchIndex].name);

                //???Why doesn't this work??
                // let modalPhotoHolder = $('<img>').attr("src","https://vignette.wikia.nocookie.net/muppet/images/0/0f/Animal-BlueBackground.jpg/revision/20150814012530");
                // $('#modalPhoto').append(modalPhotoHolder);
                document.getElementById("modalPhoto").src = data[matchIndex].photo;
                
                $('#exampleModal').modal('toggle');

                //Post the new survey data to the Employee list
                postNewSurvey(newSurveyEntry);
            });

        
    };



    const postNewSurvey = function(newSurveyEntry) {
//Post the new survey entry to employee.js

        $.ajax({
            method: 'POST',
            url: 'api/employees',
            data: newSurveyEntry
        });


    };


    $('#submitSurvey').on('click', addSurvey);
});



