/* global $ */

$('nav ul li').on('click', function () {
	let targetAttribute = $(this).attr('data-target');

	let target = $('.page[data-target=' + targetAttribute + ']');

	target[0].scrollIntoView({ behavior: 'smooth' });
});
