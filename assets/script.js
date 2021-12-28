var startButtonEl = $('#btn-start');
var submitButtonEl = $('#submit');
var goBackButtonEl = $('#goBack');
var clearHighscoreEl = $('#clearHighscore');
var correctButtonEl = $('.button-choice-correct');
var buttonChoiceEl = $('.button-choice');
var secondsLeft = 90;
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


    // timers starts when the start button is clicked
    startButtonEl.on('click', function () {


        // Sets interval in variable
        var timerInterval = setInterval(function () {

            secondsLeft--;
            timeEl.text("Time: " + secondsLeft + " s");

            if (secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
            }

        }, 1000);

    });


    $('.question .button-choice').click(function () {
        // get data attribute
        current = $(this).parents('form:first').data('question');
        next = $(this).parents('form:first').data('question') + 1;
        // hide all questions
        $('.question').hide();
        // show next question
        $('#q' + next + '').show();
        return false;

    });

    $("button[name='q5']").click(function () {
        $('#all-done').show();
        $('#q5').hide();
        return false;
    });

    $('#submit').click(function () {
        // when the submit button is clicked, the highscore page will show

        // get the input value of the initial
        //     var initialInput = $('#initial-input').val();
        //     $('#initial-input').val(initialInput);

        //    initialInput.change(function(){
        //     $('#initial-list').val($(this).val(initialInput)).show();

        //     });

        $('#view-highscore').show();
        $('#all-done').hide();
        return false;
    });

    $('#goBack').click(function () {
        location.reload();
    });




    // $(document).on('click', ".button-choice", function(event){
    //         console.log('hu');

    //     // get the btn value
    //     var userSelected = event.target.value;

    //     // get from local storage
    //     var questionId = event.target.name;
    //     var answer = localStorage.getItem(questionId);

    //      // compare with local storage
    //      if (userSelected === answer) {
    //         // if same, increase score and go to next question
    //         score++;     
    //     } else {
    //         // alert wrong and minus 10 sec
    //         alert('Wrong! You have lost 10s of your time.')
    //         event.prevetDefault();
    //         secondsLeft -=10;
    //     }

    // });

    // function for choosing correct answer
    correctButtonEl.on('click', function (event){
        if (true) {
            score++; 
            event.preventDefault();
        } 
    });

    // function for choosing other than the correct answer
    buttonChoiceEl.on('click', function (){
        if (true) {
            alert('Wrong! You have lost 10s of your time.')
            secondsLeft -=10;
        }

    })

    // in highscore.html or when viewing highscore
    // on page load 
    // get all the hs from local storage (array)

    // loop thru hs  : initial - score

    // for each hs,

    // create li,
    // put the initial - score as the text content
    // then add css class

    // put this li to the dom







});
