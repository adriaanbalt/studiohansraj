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
	}, uid = 0, slides = [], currentSlide, currentIndex = 0,


	_Slide = function( $target ) {
		this.$target = $target;
		this.$target.data('this', this);

		$target.find('.previousBtn').on( 'click', _previous );
		$target.find('.nextBtn').on( 'click', _next );
	},

	/**
	 * @name STUDIOHANSRAJ.Details-_initialize
	 * @exports STUDIOHANSRAJ.Details-_initialize as STUDIOHANSRAJ.Details.initialize
	 * @function
	 * @description
	 */
	_initialize = function() {
		console.log ( 'STUDIOHANSRAJ.Details.initialize ' );
		$('#details ul li').each( function() {
			slides[uid++] = new _Slide( $(this) );
		});
		currentSlide = slides[0];
		console.log ( 'slide: ', slides );
	},

	/**
	 * go to next
	 */
	_next = function() {
		currentIndex++;
		if ( currentIndex > slides.length-1 ){
			currentIndex = slides.length-1;
		}
		showSlide();
	},

	/**
	 * go to previous
	 */
	_previous = function() {
		currentIndex--;
		if ( currentIndex < 0 ){
			currentIndex = 0;
		}
		showSlide();
	},

	/**
	 * go to index
	 */
	_gotoSlide = function( index ) {
		currentIndex = index;
		showSlide();
	},

	/**
	 * show next slide, hide current slide
	 */
	showSlide = function() {
		currentSlide.hide();
		currentSlide = slides[currentIndex];
		currentSlide.show();
	};

	_Slide.prototype = {

		show : function() {
			this.$target.removeClass('hidden');
		},

		hide : function() {
			this.$target.addClass('hidden');
		}
			
	};
	
	// public methods for this class
	return {
		initialize: _initialize
	};

}(STUDIOHANSRAJ, window, undefined));