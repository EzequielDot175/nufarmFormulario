$(document).ready(function(){
	$('.info-box').hide();

	$('.show-more').click(function(){
		var element = $(this).parent('.login-box').attr('id');
		$('#'+ element +'.info-box').slideDown(400);
		$('.pre, .show-more, .goto').slideUp(250);
		$('.login-box h3').not('#'+ element +'.login-box h3').css('opacity', '.6');
		$('#'+ element +'.login-box .icon').css('opacity', '1');
	});

	$('.show-less').click(function(){
		$('.info-box').slideUp(250);
		$('.pre, .show-more, .goto').slideDown(400);
		$('.login-box h3').css('opacity', '1');
		$('.login-box .icon').css('opacity', '.4');
	});


   	 //footer
   	 $(window).resize(function() {
		var windowHeight = $(window).height();
		if(windowHeight > 900){
			$('.footer').css('position', 'absolute');
		}else{
			$('.footer').css('position', 'fixed');
		}
	});

	// var windowHeight = $(window).height();
	// console.log(windowHeight);
	// if(windowHeight > 1110){
	// 	$('.footer').css('position', 'fixed');
	// }else{
	// 	$('.footer').css('position', 'relative');
	// }

});

