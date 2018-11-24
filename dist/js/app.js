(function ($) {
	$("body").keyup(function (e) {
		e.preventDefault();

		if (e.keyCode == 37) {
			$(".nav-link-previous").click();
		}
		if (e.keyCode == 39) {
			$(".nav-link-next").click();
		}
	});
})($);
