$(document).ready(function() {

  $('.mobileIcon').click( function(){
        $('.navigationwrap').toggleClass('activeNav');          
});



 //$(".fancybox").fancybox();
 $(".fancybox").fancybox({
   openEffect  : "fade",
   closeEffect : "fade",
   type : "image"
});

    $('#friends').lightSlider({
        item:4,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        slideMargin:30,
        autoWidth: true,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    }); 




    $('.image').hover(function(){
        $(this).find('span').addClass('active-title');
    });

      $('.image').mouseleave(function(){
        $(this).find('span').removeClass('active-title'); 
    });





  });