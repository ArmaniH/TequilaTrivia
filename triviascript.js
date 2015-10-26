$(document).ready(function(){
  console.log('SGo');

  $('container').append(
    $('<div>')
      .attr("id", "trivia")
      .addClass("questions")
    )
    // $('.go').on('click', 'img', function(e) {
    //     $(this).width(100).height(100).appendTo('#badgeselect');
    //     $('#modal').modal({'show':true});
    // });

    $( "button" ).click(function() {
      $( "p" ).show( "slow" );
    });

})
