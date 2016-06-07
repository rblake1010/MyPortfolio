$(function() {
	
	// ON REFRESH

	// Grab current URL
	var url = getURL();
	
	// Run responsive function
	responsive();
  	$(window).resize(function() { responsive(); });

	// START REFRESH CODE
	if (url === ''){
		if ($('body').hasClass('iphone')){	
			$('.top').animate({ top: '100px', marginTop: '0px'}, 1000 );	
		}
	}
	else {
		$('body').addClass('ready');
		$('nav ul').find("." + url).addClass('active');	
		var showcontent = url + " .main";

		if($('body').hasClass('iphone')) {
			$('.top').animate({ top: '100px', marginTop: '0px'}, 1000 , function () {
			$(something).show().animate({ width: '100%'}, 1000, function () {
			$(showcontent).fadeIn('slow');
				});	
			});		
		}
		else {
			$('.top').animate({ top: '100px', marginTop: '0px'}, 1000 ) 
			         .animate({ left: '0px' , marginLeft: '0px' } , 1000, function () {
			$(something).show().animate({ width: '100%'}, 1000, function () {
			$(showcontent).fadeIn('slow');
				});	
			});
		}
	
	}

	// ON CLICK
	$('nav ul li').click (function() {
		
		if ($('body').hasClass('ready')) {	
			
			formedURL($(this).attr('class'));
			var formedURLContent = formedURL + ".main";
			
			if ($(this).hasClass('active')) {
				
			 }
			else { 	
			   $('.aboutpage, .workpage, .creditspage, .contactpage').removeClass('activeNow');  
			   $(newname).addClass('activeNow');   
			    var url = self.document.location.hash.substring(1);  
			    var oldername = "." + url + "page";
			      
			   
			   $('.aboutpage, .workpage, .creditspage, .contactpage').css('z-index', 0);
			   $(newname).css('z-index', 1000);	   
			   $(newname).show().animate({ width: '100%'}, 1000, function () {
			   		$(showcontent).fadeIn('slow');	   
					$(".page:not('.activeNow')").css('width', '0px');
			   		$(".page:not('.activeNow')").find('.main').hide();
				});	
			}
			   
			$('nav ul li').removeClass('active');
		    $(this).addClass('active');
			
		} 

		else {
			
			formedURL($(this).attr('class'));
			var formedURLContent = formedURL + ".main";
			
			 if ($('body').hasClass('iphone')){
				 $('.top').css('top', '-170px');
				 $('.top').animate({ top: '100px', marginTop: '0px'}, 1000, function () {
			 		$('body').addClass('ready');	 
					$(formedURL).show().animate({ width: '100%'}, 1000, function () {
						$(formedURLContent).fadeIn('slow');
					});
				});
				 
			 } else {
				 
				 
				 
				 $('.top').animate({ top: '100px', marginTop: '0px'}, 1000 ) 
	         	.animate({ left: '0px' , marginLeft: '0px' } , 1000, function () {
			 		$('body').addClass('ready');	 
					$(formedURL).show().animate({ width: '100%'}, 1000, function () {
						$(formedURLContent).fadeIn('slow');
					});
				});
				 
			 }	
				
				
			$(this).addClass('active');
				
				
			}		
		});
});

function getURL() {
	var url = "." + self.document.location.hash.substring(1) + "page"; 
	return url;
}

function formURL(listAttr) {
	var formedURL = "." + listAttr + "page";	
	return formedURL;
}

function responsive(){
    var winWidth = $(window).width();
    if(winWidth > 568) { //tablet
	$('body').removeClass('iphone'); 
	if( url === "") { 
	$('div.top').css({ 'top':'35%'})
	} else
	{$('div.top').css({ 'left':'50%', 'margin-left':'-225px'}) ;}

    } 
    else if(winWidth < 568){  //mobile
    $('body').addClass('iphone');   
    }
    else{  //desktop
	$('body').removeClass('iphone');   

    }
}