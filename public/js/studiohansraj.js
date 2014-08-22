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
	
	/**
	 * @name STUDIOHANSRAJ-_initialize
	 * @exports STUDIOHANSRAJ-_initialize as STUDIOHANSRAJ
	 * @function
	 * @description The initialize method that kicks off all STUDIOHANSRAJ functionality
	 */
	var _initialize = function() {
		
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
			large: 1140
		}, STUDIOHANSRAJ.$body );

		STUDIOHANSRAJ.Nav.initialize();

		// prevent bootstrap from executing twice
		self.initialized = true;
	
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