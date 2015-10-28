$(document).ready(function(){
  console.log('SGo');

// Array of questions and answers
var i = 0;
var tQuestions = {
  question: ['What plant is Tequila distilled from?'], answers: ['Maguey', 'Agave Americana', 'Agave Azul', 'Agave Attenuata'],
  question2: ['In which Mexican State is the town of Tequila located?'], answers2: ['Jalisco', 'Chihuahua', 'Durango', 'Oaxaca'],
  question3: ['What is the traditional way to serve Tequila?'], answers3: ['Lime & Salt', 'With Sangrita', 'Orange & Cinnamon', 'Out of Your Navel with High Fives'],
  question4: ['The Agave plant is also used to make what?'], answers4: ['Lotions', 'Textiles', 'Cosmetics', 'Sweeteners'],
  question5: ['Tequila was first served out of...'], answers5: ['1 oz. Shot Glass', '2 oz. Shot Glass', 'Bulls Horn', 'Out of Your Navel with High Fives'],
  question6: ['"Worms" are found in which type of Tequila?'], answers6: ['Ordinario', 'Mezcal', 'Corazon', 'Cabeza'],
  question7: ['The Blue Agave is closley related to which other plants?'], answers7: ['']
}

    console.log(tQuestions)


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
// Click event to indicate the correct answer was chosen
      $("button").on("click", function(){
          if($(this).hasClass("correct")){
// Assign a point for each correct answer
          tQuestions.question = tQuestions.question + 1;
            $('#counter').html(function(i, val) { return +val+1 });
            alert("correct")
// Click event to indicate the incorrect answer was chosen
          }else{
            $( "button" ).shake;

  }


$('.q1').html('<h2>'+tQuestions.question2+'</h2>')
for (i = 0; i < tQuestions.answers2.length; ++i) {
  var answer = tQuestions.answers2[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 0 ){
      btn.addClass("correct");
    }
    $(".q1").append(btn)
  }
  $("button").on("click", function(){
    tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      if($(this).hasClass("correct")){
        alert("correct")
      }else{
        $( "button" ).shake;
}



})


})

})
// Restart button hides question and answers
  $('.reset').click(function(){
    $(':input','p')
    $('p').hide('fast');
    $('h2').hide('fast');
    })



// Click event to refresh question AND answer array after answer is selected
