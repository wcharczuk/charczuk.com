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
	})
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
	$("div[href]").on('click', function (e) {
		e.preventDefault();
		window.location = $(this).attr("href");
	});
})(Zepto);

; (function ($) {
	$("#hero-post-image").on('click', function (e) {
		e.preventDefault();
		var $indexTop = $("#index-top");
		var indexTopOffset = $indexTop.offset().top;
		window.scrollTo(0, indexTopOffset);
	});
})(Zepto);