$(document).ready(function(){
  console.log('SGo');

// Array of questions
var tQuestions = {
  question: 'What plant is Tequila distilled from?', answers: [ 'Maguey', 'Agave Americana', 'Agave Azul', 'Agave Attenuata'],
  question2: 'In which Mexican State is the town of Tequila located?', answers2: ['Jalisco', 'Chihuahua', 'Durango', 'Oaxaca'],
}
// var triviaQuestions = ['What plant is Tequila distilled from?',
//                       'Which Mexican state is the town of Tequila located in?',
//                       'What is the traditional way to serve Tequila?',
//                       'The Agave plant is also used to make what?',
//                       'Tequila was first served out of...',
//                     ];
    console.log(tQuestions)

// Object Array of answer sets
// var triviaAnswers = {
//     Answer1: ['Maguey', 'Agave Americana', 'Agave Azul', 'Agave Attenuata'],
//     Answer2: ['Jalisco', 'Chihuahua', 'Durango', 'Oaxaca'],
//     Answer3: ['Lime & Salt', 'With Sangrita', 'Orange & Cinnamon', 'Out of Your Navel with High Fives'],
//     Answer4: ['Lotions', 'Textiles', 'Fuel', 'Sweeteners'],
//     Answer5: ['1 oz. Shot Glass', '2 oz. Shot Glass', 'Bulls Horn', 'Out of Your Navel with High Fives'],
//     Answer6: [],
//     Answer7: [],
//     Answer8: [],
//     Answer9: [],
//     Answer10: [],
  // }
    // console.log(answers)

//Clicking start displays first question and 4 potential answers

  $('.start').click(function(e) {
    console.log(tQuestions)
    e.preventDefault();
    $('p').show('slow');
    $('h2').show('slow');
  })
    $('.q1').html('<h2>'+tQuestions.question+'</h2>')
    for (i = 0; i < tQuestions.answers.length; ++i) {
      var answer = tQuestions.answers[i]
      var btn = $('<button>'+answer+'</button>')
      if( i == 2 ){
          btn.addClass("correct");
        }
        $(".q1").append(btn)
      }

      $("button").on("click", function(){
          if($(this).hasClass("correct")){
            // $("update").(function() {
            $('#counter').html(function(i, val) { return +val+1 });


            alert("correct")
          }else{
            $( "button" ).shake;

  }


// $('.q1').html('<h2>'+tQuestions.question2+'</h2>')
// for (i = 0; i < tQuestions.answers2.length; ++i) {
//   var answer = tQuestions.answers2[i]
//   var btn = $('<button>'+answer+'</button>')
//   if( i == 0 ){
//       btn.addClass("correct");
//     }
//     $(".q1").append(btn)
//   }
//
//   $("button").on("click", function(){
//       if($(this).hasClass("correct")){
//         alert("correct")
//       }else{
//         $( "button" ).shake;
// }
// })


})
// Restart button hides question and answers
  $('.reset').click(function(){
    $(':input','p')
    $('p').hide('fast');
    $('h2').hide('fast');

    })
})
// Click event to indicate the correct answer was chosen

// Click event to indicate the incorrect answer was chosen

// Click event to refresh question AND answer array after answer is selected

// Assign a point for each correct answer
