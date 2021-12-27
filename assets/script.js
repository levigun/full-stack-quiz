var startButtonEl = $('.btn-container');
var q1ButtoneEl = $("button[name='q1']")
var score = 0;
var total = 5;
var point = 1;
var highest = total * point;



// hides all the questions,high score page, and the "All Done "section
$(document).ready(function(){
    $('.question').hide();
    $('#all-done').hide();
    $('#view-highscore').hide();

})

// when start button is clicked, 1st question is showing
//Questions will then  be presented but the questions are displayed one by one.

     $('.btn-container').click(function() {
        $('#q1').show();
        $('.intro').hide();
        return false;
        });

    q1ButtoneEl.on('click', function(event){
        if (q1ButtoneEl[value="c"]){
        // how to target the buttone value
        $('#q2').show();
        $('#q1').hide();
        } else {
        alert("Wrong answer! you have lost 10s of your time")
        $('#q2').show();
        $('#q1').hide();
        event.preventDefault();

    }
    });

// $("button[name='q1']").click(function() {
//     $('#q2').show();
//     $('#q1').hide();
//     return false;
// });

    $("button[name='q2']").click(function() {
        $('#q3').show();
        $('#q2').hide();
        return false;
    });

    $("button[name='q3']").click(function() {
        $('#q4').show();
        $('#q3').hide();
        return false;
    });

    $("button[name='q4']").click(function() {
        $('#q5').show();
        $('#q4').hide();
        return false;
    });

    $("button[name='q5']").click(function() {
        $('#all-done').show();
        $('#q5').hide();
        return false;
    });

    $('#submit').click(function() {
        $('#view-highscore').show();
        $('#all-done').hide();
        return false;
    });

    $('#goBack').click(function() {
        $('.intro').show();
        $('#view-highscore').hide();
        return false;
    });

// // Initializer
// function init ();
// // set correct answers
//     localStorage.setItem('a1','c');
//     localStorage.setItem('a2','c');
//     localStorage.setItem('a3','d');
//     localStorage.setItem('a4','c');
//     localStorage.setItem('a5','d');


// // Add event listener
// window.addEventListener('load',init,false);

// $('#clearHighscore').click(function() {
//     // clears the highscore function
// });



// when the start button is clicked, the timer starts
// var secondsLeft= 90;
// var timeEl = $('float-right');
    
// startButtonEl.on('click', function () {  
//     function setTime() {
//         // Sets interval in variable
//         var timerInterval = setInterval(function() {
//           secondsLeft--;
//           timeEl.textContent = "Time: " + secondsLeft + " s";
      
//           if(secondsLeft === 0) {
//             // Stops execution of action at set interval
//             clearInterval(timerInterval);
//           }
      
//         }, 1000);
//       }
//       setTime ();
// }
//  ask question about the timer change to Time: 90s then the 90s --;







