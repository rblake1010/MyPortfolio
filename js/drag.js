// JavaScript Document
$(document).ready(function() {
	
$('.clear').hide();

$( ".draggable img" ).draggable({ 
    helper: "clone",
    revert: "valid",
    draggable: "true"
});
    
    $( "#droppable" ).droppable({
        accept: 'img',
      tolerance: "fit",
      drop: function( event, ui ) {
          var currentImage = "<div><img src='" + ui.draggable.attr('src') + "'/></div>";
          $(this).append(currentImage);
          
          ui.draggable.addClass('dropped');
          ui.draggable.draggable( "disable" );
          $('.clear').show().addClass('chosen');
		  
      }
    });

$('#droppable a').click(function(){
    $('#droppable div').remove();
    $('.clear').hide().removeClass('chosen');
	$('input.hidden').attr('value', '');
    $('.draggable img').draggable('enable');
});

/*$('.services img').each(function() {
  if ($(this).attr("src", "seo.png")) {
	  alert('its here');
  }else {
	alert('nope')  
  }
});*/
	
	
});