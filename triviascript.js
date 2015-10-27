$(document).ready(function(){
  console.log('SGo');

var triviaQuestions = ['How tall am I?', 'How old am I?'];
// var triviaQuestions = {
//   Question1: ['How tall am I?'],
//   Question2: ['How old am I?'],
// }
    console.log(triviaQuestions)

//Clicking start displays first question and 4 potential answers

  $('.start').click(function(e) {
    console.log(triviaQuestions)
    e.preventDefault();
    $('p').replaceWith(function(triviaQuestions) {
      return $(this).append(['<p>How tall am I?</p>']);
    });
    $('p').show('slow');
    $('h2').show('slow');
    })

// Restart button hides question and answers
  $('.reset').click(function(){
    $(':input','p')
    $('p').hide('fast');
    $('h2').hide('fast');

    })

// Array of questions


// Object Array of answer sets
var triviaAnswers = {
  Answer1: ['6', '5', '7', '4'],
  Answer2: ['29', '30', '31', '32'],
  }
  console.log(triviaAnswers)
// Click event to indicate the correct answer was chosen

// Click event to indicate the incorrect answer was chosen

// Click event to refresh question AND answer array after answer is selected

// Assign a point for each correct answer
$('.answer1, .answer2, .answer3, .answer4').click(function(){

    console.log('clicked');
})
})
