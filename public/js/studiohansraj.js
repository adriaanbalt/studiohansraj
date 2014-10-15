/**
 * @fileOverview STUDIOHANSRAJ bootstrap JavaScript file
 * @author <a href="mailto:adriaan@BALT.us">Adriaan Scholvinck</a> - <a href="http://BALT.us">www.BALT.us</a> 
 * @version 1
 */

/**
 * @name STUDIOHANSRAJ
 * @namespace The global namespace for the STUDIOHANSRAJ website
 * @description The global namespace for the STUDIOHANSRAJ website
 * @requires <a href="http://www.jquery.com">jQuery 1.7.2+</a>
 */
window.STUDIOHANSRAJ = (function(self, window, undefined){
	
	var leftMax, $header, $details, $window,

	/**
	 * @name STUDIOHANSRAJ-_initialize
	 * @exports STUDIOHANSRAJ-_initialize as STUDIOHANSRAJ
	 * @function
	 * @description The initialize method that kicks off all STUDIOHANSRAJ functionality
	 */
	_initialize = function() {
		
		// prevent bootstrap from executing twice
		if (self.initialized) {
			return;
		}
		
		// console overwrite for IE8
		if (window.console === undefined) {
			window.console = {};
			console.log = function() {};
			console.error = function() {};
		}
		
		console.log('STUDIOHANSRAJ.initialize');

		// Set body now that DOM is available	
		STUDIOHANSRAJ.$body = $('body');

		var rwdResizeData = RwdResize.initialize({
			small: 640,
			medium: 1024,
			large: 1280
		}, STUDIOHANSRAJ.$body );

		$header 		= $('header');
		$details 		= $('#details ul');
		$info 			= $('#details .information');
		$copyright		= $('footer .copyright');
		$window 		= $(window);
		windowWidth 	= $window.width();
		$window.scroll( scolling );

		STUDIOHANSRAJ.Nav.initialize();
		STUDIOHANSRAJ.Details.initialize( imagesLoaded );

		// prevent bootstrap from executing twice
		self.initialized = true;
	},

	imagesLoaded = function() {
		headerWidth 	= $header.width()
		detailsWidth 	= STUDIOHANSRAJ.Details.getWidth();
		infoWidth		= $info.width();
		copyWidth		= $copyright.width();
		leftMax 		= detailsWidth - windowWidth;
	},

	scolling = function(event) {
		var valueHeader, valueInfo, valueCopyright, properties, num;

		leftMax = STUDIOHANSRAJ.Details.getWidth() - windowWidth;

		// HEADER
		if ( 0 < $window.scrollLeft() && $window.scrollLeft() < leftMax ) {
			// header
			num = $window.scrollLeft() + (windowWidth/2 - headerWidth/2);
			valueHeader = "translateX(" + num + "px)";
			// info
			num = $window.scrollLeft() + (windowWidth/2 - infoWidth/2);
			valueInfo = "translateX(" + num + "px)";
			// copyright
			num = $window.scrollLeft() + (windowWidth/2 - copyWidth/2);
			valueCopyright = "translateX(" + num + "px)";
		} else if ( $window.scrollLeft() >= leftMax ) {
			// header
			num = leftMax + (windowWidth/2 - headerWidth/2);
			valueHeader = "translateX(" + num + "px)";
			//info
			num = leftMax + (windowWidth/2 - infoWidth/2);
			valueInfo = "translateX(" + num + "px)";
			// copyright
			num = leftMax + (windowWidth/2 - copyWidth/2);
			valueCopyright = "translateX(" + num + "px)";
		} else {
			// header
			valueHeader = "translateX(0px)";
			// info
			valueInfo = "translateX(0px)";
			// copyright
			valueCopyright = "translateX(0px)";
		}

		properties = {
			'-webkit-transform': valueHeader,
			'-moz-transform':    valueHeader,
			'-ms-transform':     valueHeader,
			'-o-transform':      valueHeader,
			'transform':         valueHeader
		};
		$header.css( properties );

		properties = {
			'-webkit-transform': valueInfo,
			'-moz-transform':    valueInfo,
			'-ms-transform':     valueInfo,
			'-o-transform':      valueInfo,
			'transform':         valueInfo
		};
		$info.css( properties );

		properties = {
			'-webkit-transform': valueCopyright,
			'-moz-transform':    valueCopyright,
			'-ms-transform':     valueCopyright,
			'-o-transform':      valueCopyright,
			'transform':         valueCopyright
		};
		$copyright.css( properties );
	};
	
	// STUDIOHANSRAJ public variables & methods
	return {
		/**
		 * @name STUDIOHANSRAJ.HAS_TOUCH
		 * @description Defines if touch events are supported. */ 
		HAS_TOUCH: ('ontouchstart' in window),
		/**
		 * @name STUDIOHANSRAJ.$document
		 * @description Stored jQuery reference to document */
		$document: $(document),
		/**
		 * @name STUDIOHANSRAJ.$window
		 * @description Stored jQuery reference to window */
		$window: $(window),
		/**
		 * @name STUDIOHANSRAJ.$html
		 * @description Stored jQuery reference to html element */
		$html: $('html'),
		/**
		 * @name STUDIOHANSRAJ.$body
		 * @description Stored jQuery reference to body element */
		$body: null,
		initialize: _initialize
	};

}(window.STUDIOHANSRAJ || {}, window, undefined));


// Initialize functionality
$(document).ready(STUDIOHANSRAJ.initialize);