//js

$(function(){

	new WOW().init();

	var window_width = $(window).width();

	if(window_width >= 768) {
	
		var htc_height = $('.htc-mob').height();

		$('.htc-text').css({'height':htc_height+'px'});
	}

	else {$('.htc-text').css({'height':'auto'});}

	$('#available').parallax({imageSrc: './images/sky.jpg'});

				
				$(".youtube").colorbox({iframe:true, innerWidth:740, innerHeight:420});
				
				$('.non-retina').colorbox({rel:'group5', transition:'none'})
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			
	
});

