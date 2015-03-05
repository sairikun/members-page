$("img").hover(
	function() {
		$(this).foggy({
			blurRadius: 1.8,
			opacity: 0.9,
			cssFilterSupport: true
		});
	},
	function() {
		$(this).foggy(false);
	}
);


