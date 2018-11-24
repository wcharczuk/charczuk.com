; (function ($) {
	$("body").keyup(function (e) {
		e.preventDefault();

		if (e.keyCode == 37) {
			$(".nav-link-previous").click();
		} else if (e.keyCode == 39) {
			$(".nav-link-next").click();
		} else if (e.keyCode == 27) {
			$(".lightbox").addClass("hidden");
		}
	});
})(Zepto);

; (function ($) {
	$(".post-image").on('click', function (e) {
		e.preventDefault();
		$(".lightbox").removeClass("hidden");
	});
	$(".lightbox-close").on('click', function (e) {
		e.preventDefault();
		$(".lightbox").addClass("hidden");
	});
	$(".lightbox").on('click', function (e) {
		e.preventDefault();
		$(".lightbox").addClass("hidden");
	});
})(Zepto);

$(document).ready(function (e) {
	var parent = $(".left-content").offset();
	var offset = $(".list-active").offset();
	if (offset.top > parent.height) {
		$(".left-content").scrollTop(offset.top - 25);
	}
});