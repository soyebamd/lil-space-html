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
	
});

