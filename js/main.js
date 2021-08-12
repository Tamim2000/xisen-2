

$(function(){
    "use strict";


//page preloader script----------------------


// data background---------------------
$('[data-background]').each(function(){
    $(this).css('background-image','url('+ $(this).attr('data-background')+')');
});

 //=sticky header script========================================= */
  $(window).scroll(function(){
      if ($(window).scrollTop() >= 300) {
          $('header').addClass('fixed-header');
          $('header').addClass('visible-title');
      }
      else {
          $('header').removeClass('fixed-header');
          $('header').removeClass('visible-title');
      }
  });
  


// brand slider  jQ script-----------------
$('.brand').slick({
    slidesToShow:5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
  });

 



// img animation efect pluign activation
//----------------------------------------
AOS.init();



})(jQuery);
