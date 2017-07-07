$(function() {

	$('.but').click(function (event) {
		var top = $('#top').offset().top;

		$('body, html').animate({scrollTop: top}, 1500);
	});

});
