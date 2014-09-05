/**
 * @fileOverview BALT - STUDIOHANSRAJ 2014 Details
 * @author <a href="mailto:adriaan@BALT.us">Adriaan Scholvinck</a>
 * @version 1.0
 */

// declare STUDIOHANSRAJ in case it has not been declared yet
window.STUDIOHANSRAJ = window.STUDIOHANSRAJ || {};

/**
 * @name STUDIOHANSRAJ.Details
 * @namespace The public namespace and api for the STUDIOHANSRAJ Details functionality.
 * @description The public namespace and api for the STUDIOHANSRAJ Details functionality. 
 * @requires STUDIOHANSRAJ
 */
STUDIOHANSRAJ.Details = (function(STUDIOHANSRAJ, window, undefined){
	
	var config = {
		initialized: false
	}, widthAccumulator = 0,

	_imageOnloadHandler = function ( target ) {
		widthAccumulator += target.width() + 10;
		$('#details ul').width( widthAccumulator + 10 );
	},

	/**
	 * @name STUDIOHANSRAJ.Details-_initialize
	 * @exports STUDIOHANSRAJ.Details-_initialize as STUDIOHANSRAJ.Details.initialize
	 * @function
	 * @description
	 */
	_initialize = function() {
		console.log ( 'STUDIOHANSRAJ.Details.initialize ' );
		var scope = this;

		$('#details ul li img').each( function() {
			if ( !$(this).hasClass( 'loaded' ) ) {
				// load via data-src attribute
				// $(this).attr('src', $(this).data('src') );
				$(this).addClass('loaded');
				// load handlers
				if ( $(this)[0].complete ) {
					_imageOnloadHandler( $(this) );
				} else {
					$(this).load( function() {
						scope.imageOnloadHandler( $(this) );
					});
				}
			}
		});

		$('#details ul').width( widthAccumulator + 10 );
	};

	// public methods for this class
	return {
		initialize: _initialize,
		imageOnloadHandler: _imageOnloadHandler
	};

}(STUDIOHANSRAJ, window, undefined));