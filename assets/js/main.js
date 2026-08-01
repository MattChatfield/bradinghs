/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<button type="button" class="toggle" aria-controls="navPanel" aria-expanded="false" aria-label="Open navigation">' +
						'<span class="sr-only">Open navigation</span>' +
					'</button>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

				// Keep the toggle's aria-expanded state in sync with the panel visibility.
				var $toggle = $('#titleBar').find('.toggle');

				// Update the label and aria-expanded after panel opens/closes.
				$toggle.on('click', function () {
					setTimeout(function () {
						var expanded = $body.hasClass('navPanel-visible');
						$toggle.attr('aria-expanded', expanded ? 'true' : 'false');
						$toggle.find('.sr-only').text(expanded ? 'Close navigation' : 'Open navigation');
					}, 50);
				});

})(jQuery);
