// JavaScript Document
$(document).ready(function() {

	

// Grabbing url after hash tag

 responsive();
  $(window).resize(function() { responsive(); });
// Function to run animation on refresh
function onRefresh() {
	var url = self.document.location.hash.substring(1); 
	if (url == ''){		
		if ($('body').hasClass('iphone')){	
	$('.top').animate({ top: '100px', marginTop: '0px'}, 1000 );	
		}
		
	}else {
	
	$('body').addClass('ready');
	$('nav ul').find("." + url).addClass('active');	
	var something = "." + url + "page";
 	var showcontent = something + " .main";
	/*alert(showcontent);*/
	if($('body').hasClass('iphone')) {
	$('.top').animate({ top: '100px', marginTop: '0px'}, 1000 , function () {
	$(something).show().animate({ width: '100%'}, 1000, function () {
	$(showcontent).fadeIn('slow');
		});	
	});		
	} else if ($('body').hasClass('ipad')) {
	$('.top').css({'top':'-170px', 'margin-left' : '0px', 'left' : '6px'});
	$('.top').animate({ top: '100px', marginTop: '0px'}, 1000 , function () {
	$(something).show().animate({ width: '100%'}, 1000, function () {
	$(showcontent).fadeIn('slow');
		});	
	});			
		
	} else {
	$('.top').animate({ top: '100px', marginTop: '0px'}, 1000, function () {
	$(something).show().animate({ width: '100%'}, 1000, function () {
	$(showcontent).fadeIn('slow');
		});	
	});
	}
	
	}
	
}

// Checking url for work on refresh and running function
/*if( url == 'about'){	
	onRefresh();
	
  } else if ( url == 'work') {
   onRefresh(); 
  
  }else if ( url == 'contact') {
	 onRefresh(); 
	
  }else if ( url == 'credits') {
	 onRefresh();
	 
  }
  */
  
  onRefresh();
 
  
  
// Clicking the Navigation 
$('nav ul li').click (function() {
	
	if ($('body').hasClass('ready')) {	
		
		$('.aboutpage img.clouds').fadeOut('slow');	 
		var pagename = $(this).attr('class');
		var newname = "." + pagename + "page";
		var showcontent = newname + " .main";
		
		if ($(this).hasClass('active')) {
			
		   }
		else { 	
		   $('.aboutpage, .workpage, .creditspage, .contactpage').removeClass('activeNow');  
		   $(newname).addClass('activeNow');   
		    var url = self.document.location.hash.substring(1);  
		    var oldername = "." + url + "page";
		      
		   
		   $('.aboutpage, .workpage, .creditspage, .contactpage, .thankspage, .resumepage').css({'z-index': '0'});
		   $(newname).css('z-index', 1000);	   
		   $(newname).show().animate({ width: '100%'}, 1000, function () {
		   		$(showcontent).fadeIn('slow');
				 $(oldername).css({'display': 'none'});	   
				$(".page:not('.activeNow')").css('width', '0px');
		   		$(".page:not('.activeNow')").find('.main').hide();
			});	
		}
		   
		$('nav ul li').removeClass('active');
	    $(this).addClass('active');
		
	} 

	else {
		
		var pagename = $(this).attr('class');
		var newname = "." + pagename + "page";
		var showcontent = newname + " .main";
		
		 if ($('body').hasClass('iphone')){
			 $('.top').css('top', '-170px');
			 $('.top').animate({ top: '100px', marginTop: '0px'}, 1000, function () {
		 		$('body').addClass('ready');
				
				$(newname).show().animate({ width: '100%'}, 1000, function () {
					$(showcontent).fadeIn('slow');
				});
			});
			 
		 } else if ($('body').hasClass('ipad')){
			$('.top').animate({ top: '100px', marginTop: '0px'}, 1000 ) 
         	 .animate({ left: '0px' , marginLeft: '6px' } , 1000, function () {
		 		$('body').addClass('ready');	 
				$(newname).show().animate({ width: '100%'}, 1000, function () {
					$(showcontent).fadeIn('slow');
				});
			});
			 
		 }
		 
		  else {
			
			 $('.top').animate({ top: '100px', marginTop: '0px'}, 1000 ) 
         	.animate({ left: '0px' , marginLeft: '0px' } , 1000, function () {
		 		$('body').addClass('ready');	 
				$(newname).show().animate({ width: '100%'}, 1000, function () {
					$(showcontent).fadeIn('slow');
				});
			});
			 
		 }	
			
			
			 $(this).addClass('active');
			
			
		}		
	});
	
	$('.logo').click( function() {
	window.location.href = "http://www.richblake.me/";

	
	});
	
	$('.online').click( function() {
	window.location.href = "http://www.richblake.me/#resume";
	location.reload();
	
	});
	
	$('.pdf').click( function() {
	window.open ("http://www.richblake.me/pdf/R.Blake-Resume.pdf");
	
	});

		$('.doc').click( function() {
	window.location.href = "http://www.richblake.me/doc/R.Blake-Resume.doc";
	
	});
	
	
	
	$('.resume').click( function() {
	window.location.href = "http://www.richblake.me/#resume";
	
	});
	
	$('.hit').click(function() {
		window.location.href = "http://www.richblake.me/#contact";
		location.reload();
		
		});
		
		
	function responsive(){		
		var url = self.document.location.hash.substring(1); 
        var winWidth = $(window).width();
        if(winWidth >= 1024) { //tablet
		$('body').removeClass('iphone'); 
		$('body').removeClass('ipad'); 
		if( url == "") { 
		$('div.top').css({ 'top':'35%'})
		} else
		{$('div.top').css({ 'left':'0px', 'margin-left':'0px', 'top': '100px'});}

        } 
        else if(winWidth <= 568){  //mobile
        $('body').addClass('iphone'); 
		$('body').removeClass('ipad');   
        }
		 else if(winWidth >= 768 && winWidth <= 1024){  //mobile
        $('body').addClass('ipad');   
		$('body').removeClass('iphone');
		
		
        }
		
        else{  //desktop
		/*$('body').removeClass('iphone');*/   

        }
    }
	
	
	
 /*  $('.workboxnext, .workbox, .bigbox').mouseover(function() {
	 var define = $(this).find('img').attr('class');
	  var next = "images/" + define + ".png";
	 $(this).find('img').attr('src', next);	
		}).mouseleave(function() {
		var define = $(this).find('img').attr('class');
		 var next = "images/" + define + "_maybe" + ".png";
		$(this).find('img').attr('src', next);
	});
	*/
	
	
	$('form').submit( function() {		
		
		 var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;	
		$('.message').css('display', 'none').empty();
		
		
	if ($('body').hasClass('iphone')){	
		
	if($("input.name").val() == "" || $("input.email").val() == "" || $("textarea.info").val() == "" ){
		
	if($("input.name").val() == "") {
	$('.yourname').css('display', 'block');	
	$('.yourname').append('You forgot your name').hide().fadeIn(200);

	}
	
	if($("textarea.info").val() === "") {
	$('.textarea').css('display', 'block');	
	$('.textarea').append('Give me some details!').hide().fadeIn(200);	
	
	}else {}
	
		
	if($("input.email").val() == "") {
	$('.youremail').css('display', 'block');	
	$('.youremail').append('You forgot your email').hide().fadeIn(200);	

	}
	
	else if(!emailReg.test($('input.email').val())){
	$('.youremail').css('display', 'block');		
   $('.youremail').append('Valid email please!').hide().fadeIn(200);	  
 
}
	
	return false;
	
	}else { return true;}
	
	}
	
	
	else if ($('body').hasClass('ipad')) {
		
		if($("input.name").val() == "" || $("input.email").val() == "" || $("textarea.info").val() == "" ){
		
	if($("input.name").val() == "") {
	$('.yourname').css('display', 'block');	
	$('.yourname').append('You forgot your name').hide().fadeIn(200);

	}
	
	if($("textarea.info").val() === "") {
	$('.textarea').css('display', 'block');	
	$('.textarea').append('Give me some details!').hide().fadeIn(200);	
	
	}else {}
	
		
	if($("input.email").val() == "") {
	$('.youremail').css('display', 'block');	
	$('.youremail').append('You forgot your email').hide().fadeIn(200);	

	}
	
	else if(!emailReg.test($('input.email').val())){
	$('.youremail').css('display', 'block');		
   $('.youremail').append('Valid email please!').hide().fadeIn(200);	  
 
}
	
	return false;
	
	}else { return true;}	
		
		
	}else {
	
	if($("span.clear").hasClass('chosen')){
		
	$('#droppable img').each(function() {
      var img = $(this).attr('src');
	        if (img === 'images/seo.png'){$('input#seo').attr('value','Yes'); }
	   else if (img === 'images/joomla.png') { $('input#joomla').attr('value','Yes');}
	   else if (img === 'images/website.png') { $('input#website').attr('value','Yes');}
	   else if (img === 'images/wordpress.png') { $('input#wordpress').attr('value','Yes');}
	   else if (img === 'images/other.png') { $('input#other').attr('value','Yes');}
	   else if (img === 'images/logo.png')  {$('input#logo').attr('value','Yes');}
	   else if (img === 'images/responsive.png') { $('input#responsive').attr('value','Yes'); }
	 
	
    });	
	
	}else {
		$('.theoptions').css('display', 'block');	
		$('.theoptions').append('What are you looking for?').hide().fadeIn(200); }		
	
	}
		
	
	if($("input.name").val() == "" || $("input.email").val() == "" || $("textarea.info").val() == "" || $("#droppable div img").length == 0){
		
	if($("input.name").val() == "") {
	$('.yourname').css('display', 'block');	
	$('.yourname').append('You forgot your name').hide().fadeIn(200);

	}
	
	if($("textarea.info").val() === "") {
	$('.textarea').css('display', 'block');	
	$('.textarea').append('Give me some details!').hide().fadeIn(200);	
	
	}else {}
	
		
	if($("input.email").val() == "") {
	$('.youremail').css('display', 'block');	
	$('.youremail').append('You forgot your email').hide().fadeIn(200);	

	}
	
	else if(!emailReg.test($('input.email').val())){
	$('.youremail').css('display', 'block');		
   $('.youremail').append('Valid email please!').hide().fadeIn(200);	  
 
}
	
	return false;
	
	}else { return true;}
	
	});
	

		
/*if ($.browser.webkit) {
    alert( "this is webkit!" );	
  } else if ($.browser.msie)  {	  
	  alert( "this is msie!" );	 
	 $('.mainconfetti, .sodacan, .bachelors, .photoshop  ').css("-ms-animation", "none");
    $('.mainconfetti, .sodacan, .bachelors, .photoshop  ').css("animation", "none"); 
	$('.portraits-creative:hover').css('background-color', '#F00');
	$('.portraits').mouseleave('background-color', 'none');
	
	 $('.portraits').mouseover(function() {
	$(this).attr('src','tax-relief1.jpg');			
		}).mouseleave(function() {
			$(this).attr('src','tax-relief.jpg');
		});
		 $('.aboutpage img.clouds').css('display', 'none');
  } else if ($.browser.mozilla)  {		
	 alert( "this is mozilla!" );}*/
	
		$('.mainconfetti').css({'opacity':'0', '-webkit-animation-play-state' : 'pause', '-moz-animation-play-state' : 'pause', '-o-animation-play-state': 'pause', 'animation-play-state':'pause', 'display':'none'})
		$('.sodacan, .bachelors, .photoshop, .window, .soccer').css({ '-webkit-animation-play-state' : 'pause', '-moz-animation-play-state' : 'pause', '-o-animation-play-state': 'pause', 'animation-play-state':'pause', 'display':'none'})
		$('.stress, .frame, .time, .bighand-fade, .smallhand-fade').css({ '-webkit-animation-play-state' : 'pause', '-moz-animation-play-state' : 'pause', '-o-animation-play-state': 'pause', 'animation-play-state':'pause', 'display':'none'})

	
	// Competitive	
	$('.portraits').mouseover(function() {
	$('.mainconfetti').css({'opacity':'1', '-webkit-animation-play-state' : 'running', '-moz-animation-play-state' : 'running', '-o-animation-play-state': 'running', 'animation-play-state':'running', 'display':'block'})
	}).mouseleave( function() {
	$('.mainconfetti').css({'opacity':'0', 'display': 'none' });
		
	});
	
	// Cool Nerd 
	$('.portraits-nerd').mouseover(function() {
	$('.bars, .bars1, .bars2, .bars3').css({'opacity':'1', '-webkit-animation-play-state' : 'running', '-moz-animation-play-state' : 'running', '-o-animation-play-state': 'running', 'animation-play-state':'running', 'display':'block'});
	/*alert($('.compete').attr('src'));*/
	$('.portraits-nerd').find('img').attr('src', 'images/coolNerd-newphones1.png').removeClass('nerd').addClass('headphones');
	}).mouseleave( function() {
		$('.portraits-nerd').find('img').attr('src', 'images/coolNerd-new.png').removeClass('headphones').addClass('nerd');
	$('.bars, .bars1, .bars2, .bars3').css({'opacity':'0', 'display': 'none' });
	
		
	});	
	
	// Creative
	$('.portraits-creative').mouseover(function() {
	$('.sodacan, .bachelors, .photoshop, .window, .soccer').css({ '-webkit-animation-play-state' : 'running', '-moz-animation-play-state' : 'running', '-o-animation-play-state': 'running', 'animation-play-state':'running', 'display':'block'})
	}).mouseleave( function() {
	$('.sodacan, .bachelors, .photoshop, .window, .soccer').css({'opacity':'0', 'display': 'none' });
		
	});	
	
	
	
	// Passion
	$('.portraits-passion').mouseover(function() {
	$('.stress, .frame, .time, .bighand-fade, .smallhand-fade').css({ '-webkit-animation-play-state' : 'running', '-moz-animation-play-state' : 'running', '-o-animation-play-state': 'running', 'animation-play-state':'running', 'display':'block'})
	}).mouseleave( function() {
	$('.stress, .frame, .time, .bighand-fade, .smallhand-fade').css({'opacity':'0', 'display': 'none' });
		
	});	
	

if ($('body').hasClass('iphone')){	

}else {
	// Scrolling Cloud	
	$(window).scroll(function(){
  var h = $('body').height();
  var y = $(window).scrollTop();
  if( y < (h*.20)){
   $(".aboutpage img.clouds").fadeIn("slow");
  } else {
   $('.aboutpage img.clouds').fadeOut('slow');
  }
 });
 
}
 
 $(".fancybox").fancybox({	 
	 beforeShow : function() {
        this.title = $(this.element).find('img').attr('alt');
    },
				padding: 0,
				openEffect : 'elastic',
				openSpeed  : 150,
				closeEffect : 'elastic',
				closeSpeed  : 150,
				closeClick : true,
				
				helpers : {
					overlay : true,
				
				}
				
			});
			
			
				var icons = {
      header: "plus",
      activeHeader: "minus"
    };
			$("#accordion").accordion({ 
			icons : icons,		
     heightStyle: "content",
	 collapsible: true,
	 active: false,

    });
	
	
	
	
		
		
	
	
	 if ($('body').hasClass('iphone')){
	$('p.disappear').hide(); 
		 
		 
	 }else {
		 $('.more').click(function() {	
	$('.hidetext').fadeToggle('slow');	
	
	});
		 }
	
	
	
//$(window).resize( function(){
//    var height = $(window).height();
//	    var width = $(window).width();
//	 
//	    if(width>height) {
//	      // Landscape
//      alert('landscape');
//	  alert($('body').attr('class'));
//		  $('.aboutpage img.clouds').css('display', 'none');
//	    } else {
//	      // Portrait
//       alert('portrait');
// 		alert($('body').attr('class'));
//		   $('.aboutpage img.clouds').css('display', 'none');
//	    }
//	   });

			
			
 
 
		
});

