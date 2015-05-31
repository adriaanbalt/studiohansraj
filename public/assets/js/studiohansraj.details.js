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
	$details = $('#details ul'),
	$detailsIMGS = $('#details ul img'),

	_dragging = function( enable ) {
		if ( enable ) {
			$details.drag(function( ev, dd ){
				if((dd.deltaX > 5) || (dd.deltaX < -5)) {

					// Prevent click events while dragging and add class for cursor styling
					dragging = true;
					$(this).addClass('dragging');
					$(this).closest('body').addClass('dragging');
					$(this).closest('body').addClass('dragged');

					// Determine right limit
					var windowWidth = $(window).width(),
						limit = _getWidth()-windowWidth;

					// Move element if distance falls between left and right limits
					if((dd.offsetX < 0) && (dd.offsetX > (-limit))) {
						$(this).css({
							//'margin-left': dd.offsetX
							'margin-left': dd.offsetX
						});
					}
				}
			})
			.drag("end", function( ev, dd ) {
				// Allow click events once dragging has ended 
				dragging = false;
				// $(this).removeClass('dragging');
				setTimeout(function(){
						$(this).removeClass('dragging');

					}, 50);
				$(this).closest('body').removeClass('dragging');

				if($(window).height() > 670) {
					setTimeout(function(){
						$('.portfolio-block').each(function() {
								homePositionCheck($(this));
						 });

					}, 200);
					setTimeout(function(){
						$('.portfolio-block').each(function() {
								homePositionCheck($(this));
						 });

					}, 400);
				}
				//THIS PART KILLS THE ISSUE OF DRAGGING NEAR THE EDGE NOT GOING ALL THE WAY
				//AND CLIPS TO THE START WHEN YOU ARE NEAR TO IT.

				var windowWidth = $(window).width(),
				limit = $(this).width()-windowWidth;
				if(((limit*-1) > dd.offsetX-200)) {
					$(this).css({
						'margin-left': (limit*-1)
					});
				}

				if((dd.offsetX > -160)) {
					$(this).css({
						'margin-left': 0
					});
				}

				//

			});
		} else {
			$details.drag(function( ev, dd ){}).drag("end", function( ev, dd ) {});
		}

	},

	_imageOnloadHandler = function ( target ) {
		loaded++;
		widthAccumulator += target.width() + 10;
		// $details.width( widthAccumulator + 10 );
		if ( loaded == totalImages ) {
			callback();
			resize( RwdResize.getLayoutByWidth() );
			// fade in
			$details.addClass('show');
		}
	},

	resize = function( evt ) {
		if ( evt == 'small' || evt.layout == 'small' ) {
			$detailsIMGS.width( '100%' );
			$details.width( "auto" );
			$details.height( "auto" );
			$details.css({
				'margin-left': 0
			});
		} else {
			$details.width( widthAccumulator + 10 );
			$detailsIMGS.width( 'auto' );
			_dragging( true );
		}
	},

	_getWidth = function(){
		return $details.width();
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

		this.resize_uid = RwdResize.subscribe(resize, this);

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

		// $details.width( widthAccumulator + 10 );
	};

	// public methods for this class
	return {
		initialize: _initialize,
		imageOnloadHandler: _imageOnloadHandler,
		getWidth: _getWidth
	};

}(STUDIOHANSRAJ, window, undefined));