$(window).scroll(function(){

  if( $(this).scrollTop() > 120 ){
    $("header").addClass( 'scrolled' )
  }else{
    $("header").removeClass( 'scrolled' )
  }

})
