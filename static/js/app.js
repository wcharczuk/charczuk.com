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
	$(".hero-enter-button").on('click', function (e) {
		e.preventDefault();
		$("#index-content .thumbnail").addClass("shown");
		smoothScroll($("#index-top"), 500);
	});
})(Zepto);

function easeInOutQuart(t) {
	const t1 = t - 1
	return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1
}

function scroll($el) {
	var indexTopOffset = $el.offset().top;
	window.scrollTo(0, indexTopOffset);
}

function smoothScroll($to, duration) {
	var to = $to.offset().top
	var el = $(window)
	var initial = el.scrollTop()
	var dest = to - initial
	var start = null
	function step(timestamp) {
		if (!start) start = timestamp
		var progress = timestamp - start
		var percentage = progress / duration
		var tick = (easeInOutQuart(percentage) * dest) + initial
		window.scrollTo(0, tick)
		if (progress < duration) { window.requestAnimationFrame(step) }
		else { return }
	}
	window.requestAnimationFrame(step)
}