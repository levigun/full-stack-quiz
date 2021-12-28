var startButtonEl = $('#btn-start');
var q1ButtoneEl = $("button[name='q1']")
var score = 0;
var total = 5;
var point = 1;
var highest = total * point;

// // // Initializer
function init() {
    // set correct answers
    localStorage.setItem('a1', 'c');
    localStorage.setItem('a2', 'c');
    localStorage.setItem('a3', 'd');
    localStorage.setItem('a4', 'c');
    localStorage.setItem('a5', 'd');

}

// hides all the questions,high score page, and the "All Done "section
$(document).ready(function () {
    $('.question').hide();
    $('#all-done').hide();
    $('#view-highscore').hide();

    var secondsLeft = 90;
    var timeEl = $('.timer');
    

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

    // when start button is clicked, 1st question is showing
    //Questions will then  be presented but the questions are displayed one by one.

    $('#btn-start').click(function () {
        $('#q1').show();
        $('.intro').hide();
        // process('q1');
        return false;
    });

    $(document).on('click', ".button-choice", function(event){

        // get the btn value
        var userSelected = event.target.value;

        // get from local storage
        var questionId = event.target.name;
        var answer = localStorage.getItem(questionId);


        // in highscore.html or when viewing highscore
        // on page load 
        // get all the hs from local storage (array)

        // loop thru hs  : initial - score

        // for each hs,
        
        // create li,
        // put the initial - score as the text content
        // then add css class

        // put this li to the dom


        // compare with local storage
        if (userSelected === answer) {
            // if same
            // increase score
            score++;     
        } else {
            // TODO: show wrong or correct
            // minus 10 sec

            // i live to eat

            // now is better than later
            // later is better than never

            secondsLeft -=10;
        }


        // if no,


    });

    // $("button[name='q1']").click(function () {
    //     $('#q2').show();
    //     $('#q1').hide();
    //     return false;
    // });

    // $("button[name='q2']").click(function () {
    //     $('#q3').show();
    //     $('#q2').hide();
    //     return false;
    // });

    // $("button[name='q3']").click(function () {
    //     $('#q4').show();
    //     $('#q3').hide();
    //     return false;
    // });

    // $("button[name='q4']").click(function () {
    //     $('#q5').show();
    //     $('#q4').hide();
    //     return false;
    // });

    // $("button[name='q5']").click(function () {
    //     $('#all-done').show();
    //     $('#q5').hide();
    //     return false;
    // });

    // $('#submit').click(function () {
    //     $('#view-highscore').show();
    //     $('#all-done').hide();
    //     return false;
    // });

    // $('#goBack').click(function () {
    //     $('.intro').show();
    //     $('#view-highscore').hide();
    //     return false;
    // });

    // $('#clearHighscore').click(function() {
    // });

});

// function process(q) {
//     if (q == "q1") {
//         var submitted = $('button[name=q1]:clicked').val();
//         if (submitted === localStorage.a1) {
//             score++;
//         }
//     }
// }


// // // Add event listener
window.addEventListener('load', init, false);


// when the start button is clicked, the timer starts


//  ask question about the timer change to Time: 90s then the 90s --;







