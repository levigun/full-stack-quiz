var startButtonEl = $('#btn-start');
var submitButtonEl = $('#submit');
var goBackButtonEl = $('#goBack');
var clearHighscoreEl = $('#clearHighscore');
var correctButtonEl = $('.correct');
var buttonChoiceEl = $('.button-choice');
var secondsLeft = 90;
var timerInterval;
var timeEl = $('.timer');
var score = 0;
var total = 5;
var point = 1;
var highest = total * point;

// hides all the questions,high score page, and the "All Done "section
$(document).ready(function () {
    $('.question').hide();
    $('#all-done').hide();
    $('#view-highscore').hide();


    // when start button is clicked, 1st question is showing
    //Questions will then  be presented but the questions are displayed one by one.

    $('#btn-start').click(function () {
        $('#q1').show();
        $('.intro').hide();
        return false;
    });

    function questionsDisplay() {
        $('.question .button-choice').click(function (event) {
            event.preventDefault();
            // check if the correct button is clicked 
            if ($(this).hasClass("correct")) {
                // if yes score ++ 
                score++;
            } else {
                // if no, -10s and alert 
                alert('Wrong! You have lost 10s of your time.')
                secondsLeft -= 10;
            }

            // next question displays
            // get data attribute
            current = $(this).parents('form:first').data('question');
            next = $(this).parents('form:first').data('question') + 1;
            // hide all questions
            $('.question').hide();
            // show next question
            $('#q' + next + '').show();
            return false;

        })
    };

    questionsDisplay();
    

    $("button[name='q5']").click(function () {
        $('#all-done').show();
        $('#q5').hide();
        clearInterval(timerInterval);
        timeEl.text("Time: 0");
        return false;
    });

    $('#submit').click(function () {
        $('#view-highscore').show();
        $('#all-done').hide();
        return false;
    });

    $('#goBack').click(function () {
        location.reload();
    });


    // timers starts when the start button is clicked
    startButtonEl.on('click', function () {


        // Sets interval in variable
        timerInterval = setInterval(function () {

            secondsLeft--;
            timeEl.text("Time: " + secondsLeft + " s");

            if (secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
            }

        }, 1000);

    });



  // when the submit button is clicked, the highscore page will show

        // get the input value of the initial
            var initialInput = $('#initial-input');

        //    initialInput.change(function(){
        //     $('#initial-list').val($(this).val(initialInput)).show();

        //     });

    
    // get all the hs from local storage (array)

    // loop thru hs  : initial - score

    // for each hs,

    // create li,
    // put the initial - score as the text content
    // then add css class

    // put this li to the dom







});
