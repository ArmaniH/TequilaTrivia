$(document).ready(function(){
  console.log('SGo');

  $('container').append(
    $('<div>')
      .attr("id", "trivia")
      .addClass("questions")
    )
    $( ".start" ).click(function() {
        $( "p" ).show( "slow" );
      });

  // $('body').append(
  //     $('button')
  //       .attr('type', 'button')
  //       .addClass("questions")
  //     )
    // $('.go').on('click', 'img', function(e) {
    //     $(this).width(100).height(100).appendTo('#badgeselect');
    //     $('#modal').modal({'show':true});
    // });



    $('.reset').click(function(){
        $(':input','p')
        $('p').hide('fast');
        // .not(':button, :submit, :reset, :hidden')
        // .val('')
        // .removeAttr('checked')
        // .removeAttr('selected');
    });

})
