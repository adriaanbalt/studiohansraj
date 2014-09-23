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
	}, 
	widthAccumulator = 0,
	totalImages = $('#details ul li img').length,
	callback,
	loaded = 0,

	_imageOnloadHandler = function ( target ) {
		loaded++;
		widthAccumulator += target.width() + 10;
		$('#details ul').width( widthAccumulator + 10 );
		console.log ( loaded, totalImages );
		if ( loaded == totalImages ) {
			callback();
		}
	},

	/**
	 * @name STUDIOHANSRAJ.Details-_initialize
	 * @exports STUDIOHANSRAJ.Details-_initialize as STUDIOHANSRAJ.Details.initialize
	 * @function
	 * @description
	 */
	_initialize = function( cb ) {
		console.log ( 'STUDIOHANSRAJ.Details.initialize ' );

		callback = cb;
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