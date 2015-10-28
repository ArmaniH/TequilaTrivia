$(document).ready(function(){
  console.log('SGo');
//Clicking start displays first question and 4 potential answers
  $('.start').click(function(e) {
    e.preventDefault();
    $('fieldset').hide('slow');
    $('#counter').show('slow');
    $('h2').show('slow');
    $('input').show('slow');
// Restart button hides question and answers
  $(".reset").on("click", function(){
     location.reload();
    })
// Array of questions and answers
var tQuestions = {
  question1: ['What plant is Tequila distilled from?'], answers1: ['Maguey', 'Agave Americana', 'Agave Azul', 'Agave Attenuata'],
  question2: ['In which Mexican State is the town of Tequila located?'], answers2: ['Jalisco', 'Chihuahua', 'Durango', 'Oaxaca'],
  question3: ['What is the traditional way to serve Tequila?'], answers3: ['Lime & Salt', 'Sangrita', 'Orange & Cinnamon', 'Out of Your Navel with High Fives'],
  question4: ['The Agave plant is also used to make what?'], answers4: ['Lotions', 'Textiles', 'Cosmetics', 'Sweeteners'],
  question5: ['Tequila was first served out of a...'], answers5: ['1 oz. Shot Glass', '2 oz. Shot Glass', 'Bulls Horn', 'Out of Your Navel with High Fives'],
  question6: ['"Worms" are found in which type of Tequila?'], answers6: ['Ordinario', 'Mezcal', 'Corazon', 'Cabeza'],
  question7: ['The Blue Agave is closley related to which other plant?'], answers7: ['Lily','Cacti', 'Aloe', 'Asparagus'],
}

$('.q1').html('<h2>'+tQuestions.question1+'</h2>')
  for (i = 0; i < tQuestions.answers1.length; ++i) {
  var answer = tQuestions.answers1[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 2 ){
    btn.addClass("correct");
  }
  $(".q1").append(btn)
  }
  $('button').on('click', function(){
// Click event to indicate the correct answer was chosen
    if($(this).hasClass('correct')){
// Click event to refresh question AND answer array after answer is selected
      tQuestions.question = tQuestions.question1 + 1;
// Assign a point for each correct answer
      $('#counter').html(function(i, val) { return +val+1 });
      alert('Nice!')
// Click event to indicate the incorrect answer was chosen
    }else{
  }

$('.q1').html('<h2>'+tQuestions.question2+'</h2>')
  for (i = 0; i < tQuestions.answers2.length; ++i) {
  var answer = tQuestions.answers2[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 0 ){
    btn.addClass('correct');
  }
  $('.q1').append(btn)
  }
  $('button').on('click', function(){
    if($(this).hasClass('correct')){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert('Another!')
    }else{
}

$('.q1').html('<h2>'+tQuestions.question3+'</h2>')
for (i = 0; i < tQuestions.answers3.length; ++i) {
  var answer = tQuestions.answers3[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 1 ){
      btn.addClass('correct');
    }
    $(".q1").append(btn)
  }
  $('button').on('click', function(){
    if($(this).hasClass('correct')){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert('Party!')
    }else{
}

$('.q1').html('<h2>'+tQuestions.question4+'</h2>')
for (i = 0; i < tQuestions.answers4.length; ++i) {
  var answer = tQuestions.answers4[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 3 ){
      btn.addClass("correct");
    }
    $('.q1').append(btn)
  }
  $('button').on('click', function(){
    if($(this).hasClass('correct')){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert('Maybe have a glass of water?')
    }else{
}

$('.q1').html('<h2>'+tQuestions.question5+'</h2>')
for (i = 0; i < tQuestions.answers5.length; ++i) {
  var answer = tQuestions.answers5[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 2 ){
      btn.addClass('correct');
    }
    $('.q1').append(btn)
  }
  $('button').on('click', function(){
    if($(this).hasClass('correct')){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert("Let's get you an Uber...")
    }else{
}

$('.q1').html('<h2>'+tQuestions.question6+'</h2>')
for (i = 0; i < tQuestions.answers6.length; ++i) {
  var answer = tQuestions.answers6[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 1 ){
      btn.addClass("correct");
    }
    $('.q1').append(btn)
  }
  $('button').on('click', function(){
    if($(this).hasClass("correct")){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert('WHERE ARE YOUR PANTS?!')
    }else{
}

$('.q1').html('<h2>'+tQuestions.question7+'</h2>')
for (i = 0; i < tQuestions.answers7.length; ++i) {
  var answer = tQuestions.answers7[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 0 ){
      btn.addClass('correct');
    }
    $('.q1').append(btn)
  }
  $('button').on('click', function(){
    if($(this).hasClass('correct')){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert("F it, let's go again!")
    }else{
}})
})
})
})
})
})
})
})
})
