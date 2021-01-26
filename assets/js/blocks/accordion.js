const $ = jQuery;

export function accordion() {
	let parent = 'body',
		class_name = 'accordion';

	$(parent).on('click', '.' + class_name + '-item__header', function (e) {
		e.preventDefault();
		let elem = $('.' + class_name + '-item__header');

		// Add the correct active class
		if ($(this).closest('.' + class_name + '-item__header').hasClass('active')) {
			// Remove active classes
			elem.removeClass('active');
		} else {
			// Remove active classes
			elem.removeClass('active');

			// Add the active class
			$(this).closest('.' + class_name + '-item__header').addClass('active');
		}

		// Show the content
		let $content = $(this).next();
		console.log($content);
		$content.slideToggle(150);
		$('.' + class_name + '-item .' + class_name + '-item__content').not($content).slideUp('fast');
	});
}

