// navbar change on scroll
       
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.fixed-top').css('background', 'transparent');
        
    } else{
        $('.fixed-top').css('background', 'rgba(255,255,255, 1)');
        $('#navbarTogglerMain li a').css('color', 'rgba(0,0,0, 1)');
    }
});

//Background white on click toggler icon
$('.navbar-toggler-icon').click(function() {
    $('#navbarTogglerMain').css('background', 'rgba(255,255,255, 1)');
  });

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

