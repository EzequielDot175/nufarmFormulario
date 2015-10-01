(function($){

	$.fn.customModal = function(){
		
	}


	$.fn.steps = function(v){
		$form = false;
		
		var collection = $(this);
		var sections = $('section.step');
		var content_steps = $('.step-content');
		var events = [];

		if (v != undefined) {
			var speed = v;		
		}else{
			var speed = 500;		
		}

		$(this).each(function(index, el) {

			events.push({button: $(el),  content: $(sections[index]) });

			$(el).click(function(event) {
				// if ($form) {
					collection.removeClass('active');
					$(this).addClass('active');
				// }
			});
		});

		$.each(events, function(index, val) {
			val.button.click(function(event) {
				// console.info('Reporting $form:', $form);
				// if ($form) {
					content_steps.animate({height: val.content.height() + 50}, 100);
					sections.animate({opacity: 0}, speed).css('z-index', '-100');
					val.content.animate({opacity: 1, zIndex: 100}, speed).css('z-index', '100');
				// };
			});
		});


	
	}
})(jQuery);




